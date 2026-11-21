type Cue = 'purchase' | 'hit' | 'breach' | 'wave'
let audio: AudioContext | undefined
let lastHit = -Infinity

export function enableAudio() {
  try {
    audio ??= new AudioContext()
    void audio.resume().catch(() => {})
  } catch {
    // The game remains playable when audio is unavailable.
  }
}

export function playCue(cue: Cue) {
  if (!audio || audio.state !== 'running') return
  const time = audio.currentTime
  if (cue === 'hit' && time - lastHit < 0.15) return
  if (cue === 'hit') lastHit = time
  const frequency = { purchase: 392, hit: 260, breach: 105, wave: 330 }[cue]
  const voice = audio.createOscillator()
  const gain = audio.createGain()
  voice.frequency.setValueAtTime(frequency, time)
  voice.frequency.exponentialRampToValueAtTime(frequency * (cue === 'breach' ? 0.65 : 1.25), time + 0.11)
  gain.gain.setValueAtTime(cue === 'hit' ? 0.025 : 0.055, time)
  gain.gain.exponentialRampToValueAtTime(0.001, time + 0.12)
  voice.connect(gain)
  gain.connect(audio.destination)
  voice.start(time)
  voice.stop(time + 0.13)
}
