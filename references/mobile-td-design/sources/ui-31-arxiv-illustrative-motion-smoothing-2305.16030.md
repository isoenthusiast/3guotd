URL: https://arxiv.org/html/2305.16030v1
TITLE: Illustrative Motion Smoothing for Attention Guidance in Dynamic Visualizations
RETRIEVED: 2026-11-22
METHOD: web_extract

[Skip to main content](https://arxiv.org/html/2305.16030v1#infobox)

Title:

Content selection saved. Describe the issue below:

Description:

[License: CC BY-NC-SA 4.0](https://info.arxiv.org/help/license/index.html#licenses-available)

arXiv:2305.16030v1 \[cs.HC\] 25 May 2023

\\SpecialIssuePaper\\CGFStandardLicense

# Illustrative Motion Smoothing for    Attention Guidance in Dynamic Visualizations

Volume: 42Issue: 3

Johannes Eschner1
Peter Mindek2
Manuela Waldner1

1TU Wien, Austria 2Nanographics GmbH, Austria[ORCID 0009-0001-6784-8503](https://orcid.org/0009-0001-6784-8503 "ORCID 0009-0001-6784-8503")[ORCID 0000-0002-9434-5952](https://orcid.org/0000-0002-9434-5952 "ORCID 0000-0002-9434-5952")[ORCID 0000-0003-1387-5132](https://orcid.org/0000-0003-1387-5132 "ORCID 0000-0003-1387-5132")

###### Abstract

3D animations are an effective method to learn about complex dynamic phenomena, such as mesoscale biological processes. The animators’ goals are to convey a sense of the scene’s overall complexity while, at the same time, visually guiding the user through a story of subsequent events embedded in the chaotic environment. Animators use a variety of visual emphasis techniques to guide the observers’ attention through the story, such as highlighting, halos – or by manipulating motion parameters of the scene. In this paper, we investigate the effect of smoothing the motion of contextual scene elements to attract attention to focus elements of the story exhibiting high-frequency motion. We conducted a crowdsourced study with 108 participants observing short animations with two illustrative motion smoothing strategies: geometric smoothing through noise reduction of contextual motion trajectories and visual smoothing through motion blur of context items. We investigated the observers’ ability to follow the story as well as the effect of the techniques on speed perception in a molecular scene. Our results show that moderate motion blur significantly improves users’ ability to follow the story. Geometric motion smoothing is less effective but increases the visual appeal of the animation. However, both techniques also slow down the perceived speed of the animation. We discuss the implications of these results and derive design guidelines for animators of complex dynamic visualizations.

###### ccs

Human-centered computing Empirical studies in visualization

###### ccs

Computing methodologies Animation

††year: 2023††year: 2023††editors: D. Archambault, R. Bujack, and T. Schreck††subject: Eurographics Conference on Visualization CGF Vol No ††teaser: Snapshot of a single frame of a molecular animation without any illustrative motion smoothing (a), with moderate visual motion smoothing applied to context elements (b), and a high level of visual motion smoothing (c). The focus element is marked by a circle in (a) for illustration purposes. Moderate visual motion smoothing (b) was found to be a good trade-off between story comprehensiveness and obtrusiveness in our study. Please also refer to the supplementary video. ![Refer to caption](https://arxiv.org/html/2305.16030v1/img/tl0_s.png)(a)![Refer to caption](https://arxiv.org/html/2305.16030v1/img/tl2_s.png)(b)![Refer to caption](https://arxiv.org/html/2305.16030v1/img/tl4_s.png)(c)

## 1 Introduction

Learning about dynamic processes can be facilitated by animation, which has been found to be more effective than a series of static images when done well \[ [TMB02](https://arxiv.org/html/2305.16030v1#bib.bibx57 "")\]. For example, molecular visualization frequently uses animations to depict complex biological processes \[ [KKF∗17](https://arxiv.org/html/2305.16030v1#bib.bibx27 "")\]. In the field of biology, studies have shown that students retain more information for a longer period of time after viewing an animation instead of static graphics \[ [O’d07](https://arxiv.org/html/2305.16030v1#bib.bibx43 "")\] and that students had the best post-test scores – and thus understanding of the depicted biological processes – after watching a very detailed animation compared to more abstracted ones \[ [JM12](https://arxiv.org/html/2305.16030v1#bib.bibx25 "")\].

Visualization of dynamic biological processes is particularly challenging because the phenomena to be conveyed often consist of a series of fast and chaotic movements  – the so-called _Brownian motion_ – in a crowded environment. This seemingly erratic movement by individual molecules is caused by constant collisions with other molecules. Therefore, biological animations easily become overwhelming or cluttered. That means they are so packed with visual information that it is getting difficult to reliably attract the viewer’s attention to the main actors of the story \[ [RLN07](https://arxiv.org/html/2305.16030v1#bib.bibx49 "")\]. If too cluttered, an animation may even be harmful for learning, especially if the content is so complex that it is unclear where the attention should be directed \[ [RCL09](https://arxiv.org/html/2305.16030v1#bib.bibx46 "")\]. Animators are therefore facing the challenge of carefully balancing two competing requirements for creating insightful biological animations: they want to communicate the complexity of the scene and, at the same time, visually guide the user through the story of subsequent events embedded in this chaotic environment.

Visualization designers and animators use a variety of techniques to declutter complex dynamic visualizations, such as lowlighting of contextual parts of the animation \[ [DKTRP07](https://arxiv.org/html/2305.16030v1#bib.bibx12 "")\], visual abstraction \[ [BTM∗19](https://arxiv.org/html/2305.16030v1#bib.bibx6 ""), [LKEP14](https://arxiv.org/html/2305.16030v1#bib.bibx33 ""), [GMF∗21](https://arxiv.org/html/2305.16030v1#bib.bibx14 "")\], or sparsification and carefully chosen camera angles \[ [Iwa07](https://arxiv.org/html/2305.16030v1#bib.bibx22 "")\]. Popular educational videos in the biological field often use a combination of selective camera angles, lowlighting, depth-of-field, and motion blur \[ [Ber09](https://arxiv.org/html/2305.16030v1#bib.bibx2 ""), [Ber18](https://arxiv.org/html/2305.16030v1#bib.bibx3 "")\]. While design recommendations \[ [TMB02](https://arxiv.org/html/2305.16030v1#bib.bibx57 ""), [RCL09](https://arxiv.org/html/2305.16030v1#bib.bibx46 "")\] and experience reports \[ [Iwa07](https://arxiv.org/html/2305.16030v1#bib.bibx22 "")\] exist, empirical evidence on attention guidance in dynamic scenes is scarce such that animators often work based on their intuition.
Indeed, in their survey of 25 years of animation, Chevalier et al. \[ [CRP∗16](https://arxiv.org/html/2305.16030v1#bib.bibx11 "")\] note that the influence of different factors of the animation, such as the speed or the number of objects possibly tracked, is still not sufficiently investigated.

In this work, we make a step towards closing this gap by systematically investigating the effect of _illustrative motion smoothing_ on the story comprehensiveness, speed perception, and subjective visual appeal of a dynamic biological visualization. Motion smoothing declutters the scene by removing high-frequency movement. We are particularly interested in whether selectively applying motion smoothing effects is sufficient to effectively guide the users’ attention without adding artificial attention cues, such as halos, to the scene. We propose and investigate two motion smoothing strategies: 1) _geometric_ smoothing that removes high-frequency jitter of the scene elements’ motion trajectories, and 2) _visual_ smoothing by adding motion blur. Our proposed illustrative motion smoothing applies these smoothing effects to contextual scene elements only while retaining the unmodified appearance of focus elements.

Through a crowdsourced study investigating a dynamic molecular visualization, we aim to answer the following research questions:

Q1 (comprehensiveness):

Is illustrative motion smoothing sufficient to visually guide users through the main story in a cluttered dynamic visualization without additional attention cues?

Q2 (perception):

How does illustrative motion smoothing affect the perceived speed of the dynamic visualization?

Q3 (obtrusiveness):

Does illustrative motion smoothing affect the visual quality of the visualized scene?

In summary, our contributions are the following:

1. 1.


We introduce a new attention guidance technique, which selectively applies motion smoothing to contextual scene elements in crowded dynamic visualizations.

2. 2.


We present the results of a crowdsourced study evaluating the effectiveness of illustrative motion smoothing, its impact on speed perception, and its level of obtrusiveness.

3. 3.


We formulate design guidelines for effective illustrative motion smoothing in dynamic visualizations.


## 2 Related Work

We first outline how previous work has used illustrative techniques to effectively convey dynamic phenomena in static and dynamic visualizations. Afterwards, we discuss the background of motion perception in visualizations.

### 2.1 Visualization of Dynamic Processes

Static visualizations depicting dynamic processes often use illustrative techniques to indicate motion, such as speedlines, flow ribbons, opacity modulation, or strobe silhouettes \[ [JR05](https://arxiv.org/html/2305.16030v1#bib.bibx26 "")\]. Others explicitly illustrate “causal chains” by analyzing the motion of scene elements, such as mechanical assemblies or motion-captured body parts, and sequentially highlight key elements together with arrows \[ [MYY∗10](https://arxiv.org/html/2305.16030v1#bib.bibx40 ""), [BZOP07](https://arxiv.org/html/2305.16030v1#bib.bibx9 "")\]. Short video sequences can be visually summarized in single images using stroboscopic motion illustration \[ [ADA∗04](https://arxiv.org/html/2305.16030v1#bib.bibx1 "")\] and visualizations of extracted trajectories \[ [MI13](https://arxiv.org/html/2305.16030v1#bib.bibx37 "")\]. Stroboscopic motion illustration is conceptually similar to motion blur as it merges multiple static poses of the animation into a single image to suggest movement. Similarly, for static images, motion blur generates the impression that objects are moving \[ [CNM96](https://arxiv.org/html/2305.16030v1#bib.bibx10 "")\]. To the best of our knowledge, stroboscopic motion illustration has been demonstrated only on sparse scenes, such as footage from a static surveillance camera. In this work, we are interested in cluttered scenes capturing complex processes. For these cases, animations seem to be more effective \[ [TMB02](https://arxiv.org/html/2305.16030v1#bib.bibx57 ""), [O’d07](https://arxiv.org/html/2305.16030v1#bib.bibx43 ""), [JM12](https://arxiv.org/html/2305.16030v1#bib.bibx25 "")\]. Therefore, we focus on dynamic visualizations in this work.

Particularly in the field of molecular visualization, designers and researchers have experimented with a variety of illustrative visualization techniques. For example, the molecular viewer ePMV \[ [JAG∗11](https://arxiv.org/html/2305.16030v1#bib.bibx23 "")\] supports motion blur both for static images and for slow animations _“to imply dynamics”_. In contrast to global motion blur, we apply motion blur selectively to context elements to make focus elements stand out, similarly to the semantic-depth-of-field effect for static visualizations \[ [KMH02](https://arxiv.org/html/2305.16030v1#bib.bibx28 "")\]. Le Muzic et al. \[ [LMWPV15](https://arxiv.org/html/2305.16030v1#bib.bibx35 "")\] performed geometric trajectory smoothing of selected focus molecules in fast-forward animations to allow users to follow a chain of reactions. In our work, we propose a similar geometric motion smoothing effect but reverse it: we do not manipulate the movement of focus elements but rather reduce high-frequency motion of contextual scene elements to make focus elements visually stand out due to their more chaotic movement.

Others manipulate the rendered visualization by slowing down or speeding up the entire animation – either depending on a global  \[ [BTM∗19](https://arxiv.org/html/2305.16030v1#bib.bibx6 "")\] or a spatial degree of interest \[ [SSS∗20](https://arxiv.org/html/2305.16030v1#bib.bibx54 "")\].
Using such global “time-stretching” and “time compression” is a common strategy of animators \[ [Jen17](https://arxiv.org/html/2305.16030v1#bib.bibx24 "")\].
In virtual reality, researchers have proposed slow motion effects, similar to effects shown in the well-known _Matrix_ movie \[ [RGR17](https://arxiv.org/html/2305.16030v1#bib.bibx47 ""), [LCL19](https://arxiv.org/html/2305.16030v1#bib.bibx31 "")\]. During studies of these systems, users explicitly asked for motion blur effects to emphasize the slow motion episodes. In our work, we apply selective geometric motion smoothing on contextual scene elements and explore the interaction between this geometric smoothing and motion blur.

There is surprisingly little work on attention guidance in dynamic scenes, which does not slow down the entire animation.
One strategy is to suppress the lightness and contrast of contextual parts of the animation \[ [DKTRP07](https://arxiv.org/html/2305.16030v1#bib.bibx12 "")\]. Others use motion-independent depth-of-field effects for animated pathlines \[ [LGP14](https://arxiv.org/html/2305.16030v1#bib.bibx32 "")\].
Researchers have also investigated attention guidance by adding highly salient attention cues, such as flicker \[ [WLMB∗14](https://arxiv.org/html/2305.16030v1#bib.bibx61 "")\], or by using an additional modality to the visual content, such as audio \[ [RHA17](https://arxiv.org/html/2305.16030v1#bib.bibx48 ""), [XMWZ19](https://arxiv.org/html/2305.16030v1#bib.bibx62 "")\].
In the field of mixed reality, where users are facing dynamic imagery by constantly changing their view, researchers have proposed attention guidance through luminance changes \[ [BSM∗13](https://arxiv.org/html/2305.16030v1#bib.bibx5 "")\], by target saliency manipulation of the image \[ [SLP∗22](https://arxiv.org/html/2305.16030v1#bib.bibx52 "")\], or by adding an artificially moving light cone \[ [RHA17](https://arxiv.org/html/2305.16030v1#bib.bibx48 "")\]. In contrast to these works, we assume that we have a highly complex scene, whose inherent motion we aim to selectively declutter to guide the user’s attention to the remaining high-frequency elements in the scene. To the best of our knowledge, we are the first to systematically investigate such selective motion smoothing in dynamic scenes.

### 2.2 Motion Perception in Dynamic Visualizations

Human observers are very sensitive to motion.
Studies have shown that in computational neurobiological models of attention (as proposed, for example, by Itti et al. \[ [IDP03](https://arxiv.org/html/2305.16030v1#bib.bibx20 "")\]), flicker and motion detectors are the strongest predictors of human attention in dynamic scenes \[ [Itt05](https://arxiv.org/html/2305.16030v1#bib.bibx21 ""), [MSHH11](https://arxiv.org/html/2305.16030v1#bib.bibx39 "")\]. It can therefore be expected that selectively modifying motion parameters in the scene can have considerable effects on scene perception:

Animation speed can have a strong influence on what users may learn from an animation. Fischer et al. \[ [FLS08](https://arxiv.org/html/2305.16030v1#bib.bibx13 "")\] showed that users focus more on the functional aspects when viewing an animation of a pendulum clock at a higher speed. Selectively smoothing the trajectory of focus elements allows users to better follow the story but also makes the scene appear slower as a whole \[ [LMWPV15](https://arxiv.org/html/2305.16030v1#bib.bibx35 "")\].

The human visual system (HSV) integrates the images captured on the retina for around 120 milliseconds, which can lead to a smeared or elongated perception of quickly moving objects \[ [Bur80](https://arxiv.org/html/2305.16030v1#bib.bibx8 "")\]. For static images, such as photographs or illustrations, motion blur therefore can generate the impression that objects are moving \[ [CNM96](https://arxiv.org/html/2305.16030v1#bib.bibx10 "")\]. In a dynamic scene containing a single rotating sphere, Navarro et al. \[ [NCSG11](https://arxiv.org/html/2305.16030v1#bib.bibx41 "")\] investigated the effect of shutter times, antialiasing, and texture detail at different movement speeds on perceived visual rendering quality. Their results indicate that too long shutter speeds lead to unrealistically excessive motion blur. In more complex dynamic scenes, objects that are actively tracked by the observer are expected to appear sharper than non-tracked distractors \[ [SBE∗14](https://arxiv.org/html/2305.16030v1#bib.bibx51 "")\]. Our illustrative motion smoothing approach takes these considerations into account and leaves the focus elements unsmoothed.

Tang et al. \[ [TKL13](https://arxiv.org/html/2305.16030v1#bib.bibx56 "")\] evaluated the impact of artificial motion blur on speed perception for teleoperated vehicles. They showed that users were significantly better to judge their driving speed in the presence of motion blur. In contrast, adding motion blur to a 3D racing game did not improve the players’ subjective speed impression or gaming experience \[ [SNMH13](https://arxiv.org/html/2305.16030v1#bib.bibx53 "")\]. Holm et al. \[ [HSK16](https://arxiv.org/html/2305.16030v1#bib.bibx18 "")\] found that a larger field of view increases the perceived speed in racing games, but strong motion blur can even decrease the perceived speed. In virtual reality scenes, motion or depth-of-field blur did not have any influence on users’ distance and speed estimations \[ [LRB∗16](https://arxiv.org/html/2305.16030v1#bib.bibx36 "")\]. In summary, these studies provide mixed results about the impact of motion blur on subjective speed perception. However, the visualizations we want to address differ as we have a static observer and a highly dynamic scene.

Strictly controlled psychophysics experiments have shown that extending the length of a motion smear following an object leads to speed overestimation \[ [VPC08](https://arxiv.org/html/2305.16030v1#bib.bibx59 "")\].
In the context of flow visualization, Birkeland et al. \[ [BTV14](https://arxiv.org/html/2305.16030v1#bib.bibx7 "")\] evaluated the perception of relative speed for animated flow fields. They varied the speed, contrast, direction of motion, and also added comet tails. The comet tails could slightly improve the users’ speed estimations.
In contrast to these works, dynamic molecular visualization consists of merely undirected, random motion. In the context of surveillance video analysis, Höferlin et al. \[ [HKH∗12](https://arxiv.org/html/2305.16030v1#bib.bibx16 "")\] compared four fast-forward video visualization techniques to summarize long video sequences: frame skipping, temporal blending to generate motion blur effects, adding object trails, and showing predictive motion cues. In their study, temporal blending led to subjective information overload, which caused users to miss search targets. Also, the ability to perceive motion was considered low by the participants. However, surveillance videos only sparsely contain moving objects, while dynamic molecular scenes are much more crowded. Our work, therefore, contributes new insights for attention guidance in highly complex dynamic visualizations.

![Refer to caption](https://arxiv.org/html/2305.16030v1/img/smoothness_0.png)(d)Baseline: Non-smoothed trajectories.

![Refer to caption](https://arxiv.org/html/2305.16030v1/img/smoothness_1.png)(e)Geometric motion smoothing with smoothed trajectories.

Figure 1: A short sequence of frames of a scene with extensive visual motion smoothing (trail length 4), without (a) and with (b) geometric motion smoothing. In the setting without geometric motion smoothing (with τ=0\\tau=0 in Equation [2](https://arxiv.org/html/2305.16030v1#S3.E2 "In 3.1 Geometric Motion Smoothing ‣ 3 Illustrative Motion Smoothing ‣ Illustrative Motion Smoothing for Attention Guidance in Dynamic Visualizations")), Brownian motion leads to extensive jitter of the pink molecule’s trajectory (a). With geometric motion smoothing (τ=1\\tau=1), the pink molecule moves along a rather straight trajectory (b). Trails in the first frame were added for illustration.

## 3 Illustrative Motion Smoothing

Illustrative motion smoothing aims to modify the visual saliency of a cluttered dynamic visualization so that the attention is guided to the focus elements of the main story while conveying the chaotic nature of the scene. Humans are able to visually distinguish objects by their movement speed \[ [IC92](https://arxiv.org/html/2305.16030v1#bib.bibx19 "")\]. In particular, quickly moving objects are more attention-grabbing within a set of slowly moving distractors \[ [Ros99](https://arxiv.org/html/2305.16030v1#bib.bibx50 "")\].
Illustrative motion smoothing utilizes this phenomenon and selectively modifies the dynamic representation of the scene so that focus elements exhibit more high-frequency motion than contextual elements. We achieve this by artificially reducing the attention-grabbing high-frequency motion in the contextual part of the dynamic scene.
This way, the focus parts gain relatively higher visual prominence. Illustrative motion smoothing can therefore be categorized as a _context suppression_\[ [WKG17](https://arxiv.org/html/2305.16030v1#bib.bibx60 "")\] or _anti-cueing_\[ [LB11](https://arxiv.org/html/2305.16030v1#bib.bibx30 "")\] technique operating on motion channels. The advantage of context suppression is that it leaves the focus elements unmodified so that the main actors of the story can be shown in full detail.

We exemplify illustrative motion smoothing on molecular scenes, which are especially dense and chaotic due to Brownian motion. Note that molecular animations typically show a significantly sparsified depiction of molecular environments, which are otherwise so densely packed that a dynamic visualization would be meaningless \[ [Iwa07](https://arxiv.org/html/2305.16030v1#bib.bibx22 "")\]. We assume that focus elements are given from an underlying narrative, e.g., a sequence of biological structures performing reactions \[ [KSM∗23](https://arxiv.org/html/2305.16030v1#bib.bibx29 "")\]. The remaining scene elements represent the context and are subject to illustrative motion smoothing.

### 3.1 Geometric Motion Smoothing

Fractal Brownian motion is a generalization of Brownian motion and is equivalent to Perlin noise \[ [VL15](https://arxiv.org/html/2305.16030v1#bib.bibx58 "")\]. To implement Brownian motion in a real-time system, molecular positions can therefore be sampled from a continuous random noise function approximating Perlin noise. The position pp of the ii’th molecule in the scene at animation time tt with a pre-defined fixed velocity vv is thereby computed as follows for each vector component xx:

|     |     |     |     |
| --- | --- | --- | --- |
|  | px​(i,t)=n⁡(x⋅i+t⋅v+n⁡(x⋅i+t⋅v)),p\_{x}(i,t)=n(x\\cdot i+t\\cdot v+n(x\\cdot i+t\\cdot v)), |  | (1) |

where nn is the continuous random noise function taking a single seed value as input. By nesting two noise functions, higher-frequency positional changes can be achieved. This results in noticeable visual jitter of the individual molecules, as shown in Figure [1(d)](https://arxiv.org/html/2305.16030v1#S2.F1.sf4 "In Figure 1 ‣ 2.2 Motion Perception in Dynamic Visualizations ‣ 2 Related Work ‣ Illustrative Motion Smoothing for Attention Guidance in Dynamic Visualizations").

To achieve geometric motion smoothing, we straighten the trajectories of contextual molecules. Trajectory smoothing has been previously formulated by Le Muzic et al. \[ [LMWPV15](https://arxiv.org/html/2305.16030v1#bib.bibx35 "")\] as an Infinite Impulse Response low-pass filter, which is applied to the sequence of positions obtained from the preceding simulation. For real-time implementations, where the animation sequence is computed on-the-fly, trajectories can be smoothed by reducing the influence of the nested noise function in Equation [1](https://arxiv.org/html/2305.16030v1#S3.E1 "In 3.1 Geometric Motion Smoothing ‣ 3 Illustrative Motion Smoothing ‣ Illustrative Motion Smoothing for Attention Guidance in Dynamic Visualizations") by a normalized smoothing factor τ\\tau:

|     |     |     |     |
| --- | --- | --- | --- |
|  | px​(i,t)=n⁡(x⋅i+t⋅v+(1−τ)⋅n⁡(x⋅i+t⋅v)).p\_{x}(i,t)=n(x\\cdot i+t\\cdot v+(1-\\tau)\\cdot n(x\\cdot i+t\\cdot v)). |  | (2) |

By reducing the high-frequency jitter of molecular movement, geometric motion smoothing effectively shortens the trajectories (see Figure [1(e)](https://arxiv.org/html/2305.16030v1#S2.F1.sf5 "In Figure 1 ‣ 2.2 Motion Perception in Dynamic Visualizations ‣ 2 Related Work ‣ Illustrative Motion Smoothing for Attention Guidance in Dynamic Visualizations")) and thereby reduces the speed of context elements. In a preliminary study, Le Muzic et al. \[ [LMWPV15](https://arxiv.org/html/2305.16030v1#bib.bibx35 "")\] found that by just smoothing the trajectories of focus elements, the perceived speed of the entire scene was decreased. As we apply geometric motion smoothing on the contextual scene elements, which are much more numerous than the key elements of the story in focus, we also expect to observe a considerable perceived slow-down effect.

### 3.2 Visual Motion Smoothing

Visual motion smoothing adds temporal blending on contextual elements to generate a motion blur effect.
When capturing a moving object with a camera, the amount of visible motion blur depends on two aspects: the speed of the object and the camera’s shutter speed \[ [Bri08](https://arxiv.org/html/2305.16030v1#bib.bibx4 "")\]. Within a scene, an observer can assume that the camera’s shutter speed is constant. That means, to perceive more motion blur, objects need to move faster. It can therefore be expected that increasing motion blur also leads to a higher perceived speed, which has also been observed in psychophysics experiments \[ [IC92](https://arxiv.org/html/2305.16030v1#bib.bibx19 "")\]. However, it is still unknown if the average speed of the objects in the scene is also overestimated when motion blur is only applied selectively.

In real scenes recorded by a physical camera, visible motion blur is captured automatically as the incoming light is integrated during the camera’s exposure time. In rendered scenes, motion blur needs to be artificially simulated, and multiple algorithms have been discussed \[ [NSG11](https://arxiv.org/html/2305.16030v1#bib.bibx42 "")\]. One simple algorithm, which is suitable for real-time rendering, simulates the slower shutter speed of a camera by using an incrementally cleared accumulation buffer to create a fading motion trail behind a moving object. With this algorithm, however, more recent frames will have a higher weight resulting in a fading streak instead of a motion blur trail with averaged intensities. Such motion trails – as also employed in the study by Höferlin et al. \[ [HKH∗12](https://arxiv.org/html/2305.16030v1#bib.bibx16 "")\] – do, however, not correspond to the behavior of real-world cameras and lead to less visual smoothing.

An even simpler real-time approach is to create a buffer containing the motion field of the scene between two frames. The resulting per-pixel motion vectors can then be used to apply directed Gaussian blur to the output image. While this method works well for short motion trails, it produces artifacts for longer trails due to the temporal instability of the motion vectors. As the blur can only be applied linearly along the motion vector, rapid changes in direction will result in jittery, unstable trails. To simulate real-world camera shutters more accurately, video post-processing tools provide an echo effect, which can blend the intensities of both, previous and upcoming frames. This leads to a smooth motion trail.

Illustrative visual motion smoothing applies motion blur to contextual elements only. In the worst case, this can introduce a disturbing visual discrepancy between artificial motion cues and the perceived movement. Ideally, if motion blur indeed causes observers to overestimate the speed, it could compensate for the lack of actual motion due to geometric motion smoothing.

## 4 Study

We conducted a crowdsourced study with 108 users recruited from Prolific \[ [PS18](https://arxiv.org/html/2305.16030v1#bib.bibx44 "")\] to answer our research questions Q1 to Q3 listed in Section [1](https://arxiv.org/html/2305.16030v1#S1 "1 Introduction ‣ Illustrative Motion Smoothing for Attention Guidance in Dynamic Visualizations"). For the study, we used a molecular scene rather than more simplified stimuli to increase the engagement of the participants.

### 4.1 Hypotheses

With respect to comprehensiveness (Q1), we hypothesized that both illustrative motion smoothing techniques contribute positively to the ability to follow a story in a cluttered visualization. As targets moving with higher frequency tend to stand out among a set of slowly moving distractors \[ [Ros99](https://arxiv.org/html/2305.16030v1#bib.bibx50 ""), [IC92](https://arxiv.org/html/2305.16030v1#bib.bibx19 "")\], _geometric motion smoothing will significantly facilitate the task by making focus elements stand out from the context_ (H1.1). In addition, blurring static context information has been shown to generate a similarly strong popout effect as traditional color highlights \[ [KMH02](https://arxiv.org/html/2305.16030v1#bib.bibx28 "")\]. It is, therefore, reasonable to assume that _selective motion blurring of moving objects will make the non-blurred objects stand out visually_ (H1.2).

Concerning motion perception (Q2), we hypothesized that, intuitively, _increased geometric motion smoothing will decrease the perception of speed_ (H2.1), as previously shown by Le Muzic et al. \[ [LMWPV15](https://arxiv.org/html/2305.16030v1#bib.bibx35 "")\] when smoothing focus elements (see also Section [3.1](https://arxiv.org/html/2305.16030v1#S3.SS1 "3.1 Geometric Motion Smoothing ‣ 3 Illustrative Motion Smoothing ‣ Illustrative Motion Smoothing for Attention Guidance in Dynamic Visualizations")). Conversely, previous work \[ [VPC08](https://arxiv.org/html/2305.16030v1#bib.bibx59 "")\] has suggested that _motion blur may generate the illusion of more quickly moving objects_ (H2.2), as also elaborated in Section [3.2](https://arxiv.org/html/2305.16030v1#S3.SS2 "3.2 Visual Motion Smoothing ‣ 3 Illustrative Motion Smoothing ‣ Illustrative Motion Smoothing for Attention Guidance in Dynamic Visualizations"). We, therefore, expected to see an interaction between motion blur and geometric motion smoothing so that _increasing visual motion smoothing would compensate for the decreased speed perception due to geometric motion smoothing_ (H2.3).

With respect to obtrusiveness (Q3), Le Muzic et al. \[ [LMWPV15](https://arxiv.org/html/2305.16030v1#bib.bibx35 "")\] have previously shown that smoothing the trajectories of molecules in the focus is not considered to be obtrusive but rather increased the visual appeal of the scene. We therefore also expect a similar effect when geometrically smoothing the motion of contextual element, i.e., a _higher subjective visual quality of the scene with smoother context trajectories_ (H3.1). However, long motion blur trails have been assessed as unpleasant \[ [NCSG11](https://arxiv.org/html/2305.16030v1#bib.bibx41 "")\] and overwhelming \[ [HKH∗12](https://arxiv.org/html/2305.16030v1#bib.bibx16 "")\] by users. We, therefore, expect to observe _decreased visual quality with increasing visual motion smoothing_ (H3.2).

### 4.2 Stimuli

The molecular interaction scenes were presented as short pre-recorded video sequences generated with the _Marion_ visualization framework \[ [MKS∗17](https://arxiv.org/html/2305.16030v1#bib.bibx38 "")\]. Each video lasted 20 seconds with a resolution of 1024×\\times576 pixels. All animations comprised eight different types of molecules and 1,000 molecules in total. As clearly visible in Figure [2](https://arxiv.org/html/2305.16030v1#S4.F2 "Figure 2 ‣ 4.2 Stimuli ‣ 4 Study ‣ Illustrative Motion Smoothing for Attention Guidance in Dynamic Visualizations"), this does not lead to a very crowded scene. However, early informal pilot tests showed that more crowded scenes made the task to spot reactions very difficult, especially without any illustrative motion smoothing. To keep the level of frustration low, we therefore sparsified the scene.

![Refer to caption](https://arxiv.org/html/2305.16030v1/img/102_tl2_tn_cs_s4_0_2.jpg)Figure 2: Snapshot of the study scene with visual motion smoothing, trail length 2. The reactants in focus are here shown in red and green in the central part of the screen.

Molecules were color-coded according to their type so that also users without molecular biology knowledge could solve the task. We used the 8-class Set1 color map provided by ColorBrewer \[ [HB03](https://arxiv.org/html/2305.16030v1#bib.bibx15 "")\]. Even though this color choice significantly lowers the visual appeal, all colors can be uniquely named (red, blue, green, purple, etc.), which facilitates remembering the reaction partners for the users. All molecules had approximately equal sizes.

In each frame, the positions of the molecules were evaluated in real-time in the vertex shader following the Brownian motion approximation, as outlined in Section [3.1](https://arxiv.org/html/2305.16030v1#S3.SS1 "3.1 Geometric Motion Smoothing ‣ 3 Illustrative Motion Smoothing ‣ Illustrative Motion Smoothing for Attention Guidance in Dynamic Visualizations"). In the geometry shader, billboard quads were used to draw one impostor sphere per atom in a molecule. Each animation showed exactly one reaction. Reaction time was chosen at a random frame between five and ten seconds after the animation start. A reaction sequence was composed of three stages: 1) a five seconds attraction phase where the two reacting molecules start moving towards each other, 2) a one-second reaction phase, where the molecules are physically attached and move in concordance, and 3) a five seconds repulsion phase, where the two molecules are moving away from each other again. During all three stages and eleven seconds, respectively, the two reactants represented the focus elements. No motion smoothing was applied to the focus elements during the reaction sequence. To achieve a consistent attraction motion, we blended the random movement of the two reactants with a linear interpolation moving towards a random reaction position as described by Le Muzic et al. \[ [LMPSV14](https://arxiv.org/html/2305.16030v1#bib.bibx34 "")\].

Motion blur was added as a post-processing effect. To achieve smooth motion trails with adjustable lengths, a high temporal resolution is necessary. Therefore, we first rendered the animations as 120 fps videos. To add motion blur, we rendered two videos for each sequence: one containing only the reactants (i.e., the focus elements) and a second one containing the context molecules and the focus elements masked in black. Masking was necessary to resolve potential occlusions of context motion trails by the focus elements. We then simulated motion blur through an echo effect, which accumulates nn frames centered around the current frame into a FIFO queue. The value of nn depends on two parameters: 1) the ground truth speed of the scene and 2) the anticipated trail length (cf., Section [4.4](https://arxiv.org/html/2305.16030v1#S4.SS4 "4.4 Design ‣ 4 Study ‣ Illustrative Motion Smoothing for Attention Guidance in Dynamic Visualizations")). This allows us to control the length of the motion trails independently of the movement speed of the molecules, which was required by our study design. For each frame in the scene, the original frame was then replaced by an image consisting of the average intensities of the frames in the queue. To achieve a consistent motion trail, the beginning and the end of the animation were padded with n/2n/2 frames. In a final post-processing step, we then blended the video of the smoothed context molecules with the video containing the reactants in focus using the screen blend mode. For the study, the 120 fps videos were downsampled to 30 fps as we observed playback issues with high frame rate videos in some browsers.

### 4.3 Tasks

Users were presented with ten of these short molecular animation sequences. After each animation, users had to answer the following questions:

To test for users’ ability to follow the story (Q1), we asked users if they could spot the reaction of two molecules in the animation. They were asked to report the colors of the two reacting molecules after the animation sequence.
In addition, we asked users to retrospectively assess the difficulty of spotting the reaction on a continuous slider from “impossible” to “very easy”. If they were not able to see the reaction, they were instructed to select two random colors and “impossible” on the difficulty slider.

To judge users’ speed perception (Q2), we informed users in the task description that molecules move faster in warmer environments because the intensity of Brownian motion is directly proportional to the environment temperature. We then showed two video sequences without any illustrative motion smoothing representing the lowest and highest temperature that would be shown in the course of the study. These two videos served as visual calibration, and we asked users after each animation to estimate the temperature of the current scene compared to the lowest and highest temperature references shown at the beginning. This was expressed on a continuous slider from “lowest” to “highest”.

Finally, we also asked users to rate how pleasant it was to watch the animation on a continuous slider from “horrible” to “very pleasant” to assess the obtrusiveness (Q3).

In addition to the color picker, users had to adjust three continuous sliders. All three sliders were initially centered in a neutral position, and the system would not let the users proceed unless they moved all sliders. In the color picker, there was no color selected by default, and the system would let users proceed only if they selected two colors.

### 4.4 Design

We used a within-subjects design with two independent variables:

Geometric motion smoothing (GMS) specifies if the movement of the molecules themselves is simplified. We tested two smoothness levels, namely τ=0\\tau=0 (see Equation [2](https://arxiv.org/html/2305.16030v1#S3.E2 "In 3.1 Geometric Motion Smoothing ‣ 3 Illustrative Motion Smoothing ‣ Illustrative Motion Smoothing for Attention Guidance in Dynamic Visualizations")) representing the non-smoothed scene and τ=1\\tau=1 for the smoothed scene. Albeit a finer geometric smoothing control would be possible by choosing a τ\\tau between 0 and 1, informal early pilot tests indicated that the differences were too subtle to cause large effects on story comprehensiveness, speed perception, or obtrusiveness.

Visual motion smoothing (VMS) specifies the length of the motion blur trail and thereby controls the amount of visual motion smoothing.
We tested five different trail lengths. Trail length 0 means no motion blur is applied. Trail lengths 1 to 4 define the motion blur trail length in world space. Here, one increment in trail length roughly corresponds to the diameter of the bounding sphere of one molecule, independent of the animation speed. Note that for slow animations with high VMS trail lengths, the generated motion blur effects can be actually physically impossible as the motion trails exceed that travel period captured during the virtual shutter sequence. Figure [1(e)](https://arxiv.org/html/2305.16030v1#S2.F1.sf5 "In Figure 1 ‣ 2.2 Motion Perception in Dynamic Visualizations ‣ 2 Related Work ‣ Illustrative Motion Smoothing for Attention Guidance in Dynamic Visualizations"), for instance, yields motion trails that would not be able to be captured by a physical camera.

In total, each user performed 2 GMS ×\\times 5 VMS trail length == 10 conditions. The order of appearance was fully randomized. We did not perform any repetitions to keep the study time for the participants as low as possible.

For the 10 conditions, we randomly selected one out of four linearly increasing ground truth speed levels representing the different environment temperatures. The ground truth speed level is given as parameter vv as part of the seed for the random noise function (Equation [2](https://arxiv.org/html/2305.16030v1#S3.E2 "In 3.1 Geometric Motion Smoothing ‣ 3 Illustrative Motion Smoothing ‣ Illustrative Motion Smoothing for Attention Guidance in Dynamic Visualizations")). The range of speed levels was empirically set to be representative of animation speeds in existing molecular animations. The maximum speed was chosen so that it was still possible to follow focus elements during their reaction. Note that molecular visualizations can never depict the true speed of molecular movement, which can be as high as 500 m/s for a molecule of gaseous oxygen at room temperature according to the Maxwell-Boltzmann distribution. Molecular animations are always just crude approximations that try to communicate the crowding and chaos \[ [Iwa07](https://arxiv.org/html/2305.16030v1#bib.bibx22 "")\].

As dependent variables, we obtained the following measures: to test Q1, we recorded the two colors users picked as reaction partners and checked if both are correct. The subjective difficulty expressed by the slider was measured on an integer scale from 0 to 100. As a measure for subjective speed (Q2), we used the participants’ temperature estimation relative to the reference videos, which was stored on a scale from 0 to 100. Finally, the obtrusiveness (Q3) was expressed through users’ assessment of pleasure watching the animation on a scale from 0 to 100, where 50 can be considered a neutral response.

### 4.5 Procedure and Apparatus

The study was hosted on a university server. Users were recruited from Prolific \[ [PS18](https://arxiv.org/html/2305.16030v1#bib.bibx44 "")\] and forwarded to the university server URL. We used a custom in-house web service, which takes care of randomizing the stimuli and logging user responses.

We first showed users a welcome page with a task description, including the two calibration videos for the minimum and maximum temperature, respectively (see Section [4.3](https://arxiv.org/html/2305.16030v1#S4.SS3 "4.3 Tasks ‣ 4 Study ‣ Illustrative Motion Smoothing for Attention Guidance in Dynamic Visualizations")). For both videos, we also asked users to try and spot the reactions. To help them understand the task, we mentioned the colors of the reaction partners, the video time when the reaction starts, and the approximate trajectory they take during the reaction. After assessing these two calibration videos, we let users perform a test run. This test run video had VMS with trail length 4 and no GMS. As reaction partners, we chose red and green as an implicit color blindness test. Users received feedback on their responses to the test task and could repeatedly adjust their input.
We kindly asked users to return their submission if they could not find the matching colors of the reaction partners for this test run.

On the recruiting platform, we informed users that the study would ask for a color assessment and that the videos would include many rapidly moving elements. We also informed users that we would check if their browser window is at least 1024 pixels wide. Furthermore, we used cookies to test if users navigate back or refresh the page and informed users that doing so would invalidate their assignment. Finally, we asked users to kindly return their submission if the videos were not playing smoothly or would show artifacts. All users who finished all ten stimulus responses were presented with a valid completion code and were rewarded for their participation.

After the welcome and instruction page, users filled out a short demographic questionnaire asking their age, sex, and self-assessed knowledge about molecular biology. Before each stimulus display, users could take a rest and proceed on button press. After pressing the button, the 20-second animation started playing without any video controls. After finishing the video, the questionnaire, as described in Section [4.3](https://arxiv.org/html/2305.16030v1#S4.SS3 "4.3 Tasks ‣ 4 Study ‣ Illustrative Motion Smoothing for Attention Guidance in Dynamic Visualizations"), was displayed.

### 4.6 Recruiting

An a-priori power analysis yielded a sample size of 80 to show large effects (i.e., Cohen’s f≥0.4f\\geq 0.4) with power 1−β=.81-\\beta=.8 and α=.05\\alpha=.05. We, therefore, chose 120 participants as our target sample size to reliably show large effects. Within the recruiting platform, we opted to balance female and male participants. Since edutainment animations are usually targeted towards a broad audience, we did not filter participants further based on Prolific’s available filters, such as age or nationality, to have a diverse group.
Our pilot study with nine participants recruited in a local environment showed that users required 10 to maximum 15 minutes to complete the task. We, therefore, paid all participants who completed the assignment 2.25 £, which is Prolific’s recommended payment for a 15-minute assignment.

## 5 Results

The nine users of our pilot test could correctly spot, on average, 70% of the reactions. The correlation between their estimated speed and the ground truth speed was high with an average r=0.74r=0.74. As inclusion criteria, we therefore determined that participants should report at least three correct reaction pairs and achieve at least a medium correlation between their speed estimation and the ground truth speed.

In total, 123 users participated in the study of which four did not finish all trials and were therefore excluded by the recruiting platform. From the remaining 119 users, 11 did not fulfill our inclusion criteria and were rewarded, but excluded from further analyses.
Of the remaining 108 participants, 47% were female. Ages ranged from 18 to 60 with a mean age of 26.9; one person chose not to state their age. The mean reported experience level in the field of molecular biology was expectantly low with 1.83 out of a range between 1 and 5. Eight participants stated that they are experienced, and no participant claimed to be an expert.

Before running the statistical analyses, we performed normality tests on the obtained measures. Since most of the normality tests failed, we employed non-parametric tests. For those, responses were averaged per level of the main effect to be investigated per user. To visualize the results, we use letter-value plots \[ [HKW11](https://arxiv.org/html/2305.16030v1#bib.bibx17 "")\]. All pairwise post-hoc comparisons were Bonferroni-adjusted.

### 5.1 Q1: Comprehensiveness

In our study, users could correctly identify 27% of the reactions without any illustrative motion smoothing (see leftmost blue bar in Figure [3](https://arxiv.org/html/2305.16030v1#S5.F3 "Figure 3 ‣ 5.1 Q1: Comprehensiveness ‣ 5 Results ‣ Illustrative Motion Smoothing for Attention Guidance in Dynamic Visualizations")). This, therefore, represents the lower bound for comprehensiveness in our study.
Ground truth speed had a strong influence on the percentage of correct responses (R2=.95R^{2}=.95), while increasing luminance of one of the reaction partners did not (R2=.04R^{2}=.04).

Figure 3: Overall percentage of correctly identified reaction pairs dependent on VMS trail length, grouped by GMS (non-smoothed τ=0\\tau=0 in blue and smooth τ=1\\tau=1 in orange).

Across all levels of VMS trail length, 47.2% of the responses were correct without GMS; with GMS, it was 53.3% (compare blue and orange bars in Figure [3](https://arxiv.org/html/2305.16030v1#S5.F3 "Figure 3 ‣ 5.1 Q1: Comprehensiveness ‣ 5 Results ‣ Illustrative Motion Smoothing for Attention Guidance in Dynamic Visualizations")). A Wilcoxon Signed Rank test shows that this difference is not statistically significant: Z=−1.890;p=.059Z=-1.890;p=.059.
However, users consider the task significantly easier with GMS: Z=2.477;p=.013Z=2.477;p=.013. Without GMS, the median difficulty of the task was rated with 87; with smoothing, the difficulty decreased slightly to 73.5 (see blue and orange boxes in Figure [4](https://arxiv.org/html/2305.16030v1#S5.F4 "Figure 4 ‣ 5.1 Q1: Comprehensiveness ‣ 5 Results ‣ Illustrative Motion Smoothing for Attention Guidance in Dynamic Visualizations")). H1.1 is therefore only partially supported: _GMS makes it subjectively easier to spot reactions, but this subjective impression is not backed up by objective task performance measures_.

Figure 4: How difficult it was considered by users to spot a reaction dependent on VMS trail length, grouped by GMS.

For stimuli without VMS, only 32.9% of the responses were correct. The percentage of correctly reported reaction pairs increased with every trajectory length step up to 66.67% (see groups of bars in Figure [3](https://arxiv.org/html/2305.16030v1#S5.F3 "Figure 3 ‣ 5.1 Q1: Comprehensiveness ‣ 5 Results ‣ Illustrative Motion Smoothing for Attention Guidance in Dynamic Visualizations")). A Friedman test confirmed that this increase is significant:
χ2​(4)=81.724;p<.001\\chi^{2}(4)=81.724;p<.001. According to Bonferroni-corrected post-hoc comparisons, moderate VMS with a trail length of 2, as shown in Figure [2](https://arxiv.org/html/2305.16030v1#S4.F2 "Figure 2 ‣ 4.2 Stimuli ‣ 4 Study ‣ Illustrative Motion Smoothing for Attention Guidance in Dynamic Visualizations"), already leads to significantly fewer errors compared to having no VMS.

The subjective difficulty of the task decreased from a median value of 87 with trail length 0 to 38 with trail length 4, as illustrated in Figure [4](https://arxiv.org/html/2305.16030v1#S5.F4 "Figure 4 ‣ 5.1 Q1: Comprehensiveness ‣ 5 Results ‣ Illustrative Motion Smoothing for Attention Guidance in Dynamic Visualizations"). According to a Friedman test, this decrease is statistically significant: χ2​(4)=92.204;p<.001\\chi^{2}(4)=92.204;p<.001. Similarly to the objectively measured reaction errors, a trail length of 2 already yields significantly easier task execution. There is no more statistically significant difference in terms of subjective ease of task execution when further extending the trails. Thus, H1.2 is supported: _moderate visual motion smoothing can facilitate the task to spot reactions – both subjectively and objectively. However, extending the trail length further does not necessarily make the task easier._

### 5.2 Q2: Speed Perception

Across all smoothed and unsmoothed conditions, users gave significantly different speed estimations based on the ground truth speed. This shows that users took the task seriously.
The baseline speed estimation without any motion smoothing effect in our study can be approximated using the following linear regression:

|     |     |     |     |
| --- | --- | --- | --- |
|  | e​s=30.4+0.6​s,es=30.4+0.6s, |  | (3) |

where e​ses is the estimated speed and ss is the ground truth speed in percentage from minimum (i.e., ground truth speed level 1) to maximum speed (ground truth speed level 4).

A Wilcoxon signed rank test showed that adding GMS has a significant effect on the users’ estimated speed: Z=−3.094;p=.002Z=-3.094;p=.002. As illustrated by the orange bars in Figure [5](https://arxiv.org/html/2305.16030v1#S5.F5 "Figure 5 ‣ 5.2 Q2: Speed Perception ‣ 5 Results ‣ Illustrative Motion Smoothing for Attention Guidance in Dynamic Visualizations"), users’ speed estimation is consistently lower in the presence of GMS.
This means that H2.1 is supported: _GMS significantly slows down the perceived speed of the animation_.

Considering only stimuli responses with smoothed trajectories and with VMS trail length 0, we can model speed estimation under GMS using the following linear regression:

|     |     |     |     |
| --- | --- | --- | --- |
|  | e​s=19.3+0.6​s.es=19.3+0.6s. |  | (4) |

We can see that the regression coefficient is identical to the baseline regression (Equation [3](https://arxiv.org/html/2305.16030v1#S5.E3 "In 5.2 Q2: Speed Perception ‣ 5 Results ‣ Illustrative Motion Smoothing for Attention Guidance in Dynamic Visualizations")). The lower intercept confirms that GMS is leading to a constantly lower speed estimation compared to the non-smoothed baseline, irrespective of the ground truth speed. This means that the effect of GMS, as it was implemented in our study, could be compensated by adding a small constant speed factor.

Figure 5: Estimated speed dependent on ground truth speed, grouped by GMS.

Adding VMS to contextual scene elements also had a significant impact on the perceived speed according to a Friedman test: χ2​(4)=27.914;p<.001\\chi^{2}(4)=27.914;p<.001.
Figure [6](https://arxiv.org/html/2305.16030v1#S5.F6 "Figure 6 ‣ 5.2 Q2: Speed Perception ‣ 5 Results ‣ Illustrative Motion Smoothing for Attention Guidance in Dynamic Visualizations") shows that, contrary to our expectations, the perceived speed _decreases_ with increased VMS trail length – at least for faster animations.
Post-hoc comparisons revealed that speed underestimation reaches significance with trail length 2, but does not change significantly with longer trails. Thus, H2.2 is not supported: _on the contrary, adding VMS with moderate trail lengths leads to a significantly slower speed perception_.

Since moderate VMS with a trail length of 2 seems to be a sweet spot concerning story comprehensiveness and speed perception, we look at all responses gathered for stimuli with a trail length of 2 and non-smoothed trajectories. Users’ speed estimations for these stimuli can be approximated by the following linear regression:

|     |     |     |     |
| --- | --- | --- | --- |
|  | e​s=29.8+0.4​s.es=29.8+0.4s. |  | (5) |

As the intercept is similar to the baseline regression in Equation [3](https://arxiv.org/html/2305.16030v1#S5.E3 "In 5.2 Q2: Speed Perception ‣ 5 Results ‣ Illustrative Motion Smoothing for Attention Guidance in Dynamic Visualizations"), this confirms that speed perception is comparable to the baseline for lower speeds despite VMS. However, as the ground truth speed increases, the perceived speed does not seem to increase as strongly in the presence of VMS. By substituting e​ses in Equation [3](https://arxiv.org/html/2305.16030v1#S5.E3 "In 5.2 Q2: Speed Perception ‣ 5 Results ‣ Illustrative Motion Smoothing for Attention Guidance in Dynamic Visualizations") with the regression term in Equation [5](https://arxiv.org/html/2305.16030v1#S5.E5 "In 5.2 Q2: Speed Perception ‣ 5 Results ‣ Illustrative Motion Smoothing for Attention Guidance in Dynamic Visualizations") and solving for the ground truth speed of the blurred scene, we obtain a linear formula to compute a compensated animation speed: c​s=1.5​(s+1)cs=1.5(s+1). That means the moderate motion blur in our study could be compensated by increasing the ground truth speed by a factor of approximately 50%.

Figure 6: Estimated speed dependent on ground truth speed, grouped by increasing VMS trail length.

As the normality assumption is violated and we need to perform non-parametric tests, we are not able to statistically test for interaction effects. However, since both illustrative motion smoothing techniques effectively lead to an underestimation of the animation speed, our expected interaction effect is not possible to observe anyway. Therefore, H2.3 is not supported: _both, geometric and visual motion smoothing, lead to slower speed perception and thus cannot compensate for each other._

### 5.3 Q3: Obtrusiveness

We can observe a slight increase in median aesthetics judgments when adding GMS (from 42.5 to 47), as indicated by the slightly higher median values in the orange boxes of Figure [7](https://arxiv.org/html/2305.16030v1#S5.F7 "Figure 7 ‣ 5.3 Q3: Obtrusiveness ‣ 5 Results ‣ Illustrative Motion Smoothing for Attention Guidance in Dynamic Visualizations"). This difference is statistically significant according to a Wilcoxon Signed-Rank test: Z=2.496;p=.013Z=2.496;p=.013. H3.1 is thereby supported: _geometric motion smoothing has a small positive effect on perceived scene aesthetics_.

Figure 7: Subjective visual appeal dependent on ground truth speed, grouped by GMS (50 is neutral).

Aesthetic judgments were not following VMS trail length: the highest median aesthetics judgment was found for trail length 2 (47.5). The lowest values were issued for scenes without or only very decent motion blur (i.e., trail lengths 0 and 1) with a median rating of 44, and the longest trails with length 4 with 43.5. However, as can be seen in Figure [8](https://arxiv.org/html/2305.16030v1#S5.F8 "Figure 8 ‣ 5.3 Q3: Obtrusiveness ‣ 5 Results ‣ Illustrative Motion Smoothing for Attention Guidance in Dynamic Visualizations"), these differences are small – at least for low ground truth speed levels. According to a Friedman test visual appeal ratings did not change significantly with VMS trail length: χ2=7.184;p=.126\\chi^{2}=7.184;p=.126. This means H3.2is not supported: _visual motion smoothing is neither considered obtrusive nor does it increase the visual appeal of the scene._

Figure 8: Subjective visual appeal dependent on ground truth speed, grouped by VMS trail length (50 is neutral).

## 6 Discussion

Our study showed that illustrative motion smoothing can guide the attention towards selected actors in a crowded and chaotic scene. Adding illustrative motion smoothing effects thereby has little influence on the visual appeal of the scene. However, the attention guidance effect comes at the cost of slower scene perception.

Users generally seem to like geometric motion smoothing. They have the impression that the task becomes slightly easier when smoothing of trajectories is applied, and they think that the scene looks a bit more appealing. Like visual motion smoothing, geometric motion smoothing also perceptually slows down the scene. Overall, we can observe a moderate correlation between estimated speed and subjective task difficulty (r=.314r=.314) and a weak negative correlation between estimated speed and visual appeal (r−.226r-.226). The perceived slow-down effect due to geometric motion smoothing could therefore at least partially explain the lower subjective task load and higher aesthetics ratings.

With our implementation of geometric motion smoothing, the high-frequency jitter of the unsmoothed focus elements was not intensive enough to generate a sufficiently strong motion popout effect \[ [Ros99](https://arxiv.org/html/2305.16030v1#bib.bibx50 "")\] from the smoothly moving context elements.
Overall, geometric motion smoothing of contextual elements alone is probably not sufficient to guide the users’ attention in highly cluttered environments.

Moderate visual motion smoothing significantly improves the users’ ability to follow the story – objectively and subjectively. At the same time, it also significantly slows down the animation for the users. This was not necessarily expected from prior work, which showed mixed results. To the best of our knowledge, Holm et al. \[ [HSK16](https://arxiv.org/html/2305.16030v1#bib.bibx18 "")\] presented the only study that found an unexpected underestimation of camera velocity when motion blur was applied to the surrounding scene. One plausible explanation is the fact that motion blur decreases the contrast of context elements considerably (see Figure ): It has been shown that lower-contrast objects appear to move slower than high-contrast ones \[ [ST92](https://arxiv.org/html/2305.16030v1#bib.bibx55 "")\].

Generally, we can conclude that having extensively long motion trails does not increase the ability to follow the story or the negative effect on speed perception; the effects seem to be rather saturated with a moderate trail length.
Especially the subjective visual appeal seems to slightly decrease with increasing trail length. Similarly, Navarro et al. \[ [NCSG11](https://arxiv.org/html/2305.16030v1#bib.bibx41 "")\] have found that motion blur can be perceived as too excessive at some point. Indeed, if motion trails are getting too long, they are no longer physically plausible, which may cause irritation for the observers.

## 7 Design Guidelines

From the findings of our study, we derived design guidelines for animators of complex dynamic visualizations:

Do not overdo visual motion smoothing.
Similarly, as a previous study on a simple scene has indicated \[ [NCSG11](https://arxiv.org/html/2305.16030v1#bib.bibx41 "")\], adding extensive motion trails, like shown in Figure , may be perceived as too excessive and does not add any measurable benefit for story comprehensiveness. Visual motion smoothing by adding short motion trails as shown in Figure  can already facilitate story comprehension.

Increase the animation speed to compensate for unwanted slow-down effects.
Illustrative motion smoothing leads to an underestimation of the animation’s speed. If animators seek to communicate the chaotic nature of the scene while using illustrative motion smoothing to guide the user’s attention, they should increase the speed of the animation to compensate for this slow-down effect. However, keeping the pace up constantly may not be desirable:

Avoid constantly fast animations.
We could observe a decrease in story comprehension and subjective visual appeal with increasing animation speed. It may therefore be advisable to relax the requirement to communicate the chaotic nature of a scene at all times. Reducing the animation speed can facilitate learning of complex interactions \[ [TMB02](https://arxiv.org/html/2305.16030v1#bib.bibx57 ""), [RBM∗20](https://arxiv.org/html/2305.16030v1#bib.bibx45 "")\], while also enhancing the overall viewing experience with added enjoyment.

Smooth the trajectories of contextual elements to perceptually lower the pace of very fast animations.
Geometric motion smoothing is visually appealing and subjectively improves the ability to follow a story. It could therefore be a useful method to subjectively decrease the animation speed while still being able to show the complex movement trajectories of focus elements in full detail.

Add further visual cues to guide the attention reliably.
Illustrative motion smoothing alone could not fully reliably attract users’ attention to the main actors of the story. The success rate rather peaked at 60-70% (see Figure [3](https://arxiv.org/html/2305.16030v1#S5.F3 "Figure 3 ‣ 5.1 Q1: Comprehensiveness ‣ 5 Results ‣ Illustrative Motion Smoothing for Attention Guidance in Dynamic Visualizations")). Further attention cues are necessary to further increase the saliency of focus elements, such as lowlighting of contextual scene elements \[ [DKTRP07](https://arxiv.org/html/2305.16030v1#bib.bibx12 "")\], halos around focus elements, or camera movement following the main actors of the story \[ [Iwa07](https://arxiv.org/html/2305.16030v1#bib.bibx22 "")\].

## 8 Limitations and Future Work

In this work, we studied two methods to generate illustrative motion smoothing in a highly specialized application domain. Geometric motion smoothing is an effect that is only reasonably applicable for dynamic visualizations of biologically inspired motion, such as Brownian motion or crowd simulations. However, visual motion smoothing is more generally applicable and could be studied in different contexts in the future.

Even within the same application domain, there are several factors that have been controlled for in this study, which may also have an impact on story comprehensiveness, speed perception, and visual appeal. Examples are the crowding of the scene and the heterogeneity of the molecules in terms of size and shape, which will further increase the complexity of the animation. It can be assumed that illustrative motion smoothing will also help to decrease the visual complexity of denser and more chaotic scenes.

Visual motion smoothing was found to be effective in terms of story comprehensiveness, but it was generated in a post-processing step for this study. Real-time motion blur algorithms exist but may lead to lower visual quality effects. Real-time motion blur may therefore yield lower visual appeal or influence speed perception in a different way.

Finally, illustrative motion smoothing was studied as a single method to guide the user’s attention in this paper. Manipulating multiple visual channels to generate an attention guidance effect can be highly effective \[ [WKG17](https://arxiv.org/html/2305.16030v1#bib.bibx60 ""), [Ber09](https://arxiv.org/html/2305.16030v1#bib.bibx2 ""), [Ber18](https://arxiv.org/html/2305.16030v1#bib.bibx3 "")\] and may help to overcome the limited visual prominence of motion smoothing effects alone. Investigating the interaction of multiple visual cues, such as color or static depth-of-field effects \[ [KMH02](https://arxiv.org/html/2305.16030v1#bib.bibx28 "")\], in such highly complex dynamic visualizations is therefore also important future work.

## Acknowledgments

The authors wish to acknowledge all anonymous participants of this study. The authors acknowledge TU Wien Bibliothek for financial support through its Open Access Funding Programme.

## References

- \[ADA∗04\]Agarwala A., Dontcheva M., Agrawala M., Drucker S., Colburn A., Curless
B., Salesin D., Cohen M.:

Interactive digital photomontage.

In _ACM SIGGRAPH 2004 Papers_. 2004, pp. 294–302.

- \[Ber09\]Berry D.:

The malaria lifecycle.

SIGGRAPH ’09, Association for Computing Machinery, p. 91.

- \[Ber18\]Berry D.:

DNA animations for science-art exhibition, 2018.

URL: [https://www.youtube.com/watch?v=7Hk9jct2ozY](https://www.youtube.com/watch?v=7Hk9jct2ozY "").

- \[Bri08\]Brinkmann R.:

_The art and science of digital compositing: Techniques for_
_visual effects, animation and motion graphics_.

Morgan Kaufmann, 2008.

- \[BSM∗13\]Booth T., Sridharan S., McNamara A., Grimm C., Bailey R.:

Guiding attention in controlled real-world environments.

In _Proceedings of the ACM Symposium on Applied Perception_
(2013), pp. 75–82.

- \[BTM∗19\]Byška J., Trautner T., Marques S. M., Damborskỳ J.,
Kozlíková B., Waldner M.:

Analysis of long molecular dynamics simulations using interactive
focus+ context visualization.

In _Computer Graphics Forum_ (2019), vol. 38, Wiley Online
Library, pp. 441–453.

- \[BTV14\]Birkeland Å., Turkay C., Viola I.:

Perceptually uniform motion space.

_IEEE Transactions on Visualization and Computer Graphics 20_,
11 (2014), 1542–1554.

- \[Bur80\]Burr D.:

Motion smear.

_Nature 284_, 5752 (1980), 164–165.

- \[BZOP07\]Bouvier-Zappa S., Ostromoukhov V., Poulin P.:

Motion cues for illustration of skeletal motion capture data.

In _Proceedings of the 5th international symposium on_
_Non-photorealistic animation and rendering_ (2007), pp. 133–140.

- \[CNM96\]Chen W.-G., Nandhakumar N., Martin W. N.:

Image motion estimation from motion smear-a new computational model.

_IEEE Transactions on Pattern Analysis and Machine Intelligence_
_18_, 4 (1996), 412–425.

- \[CRP∗16\]Chevalier F., Riche N. H., Plaisant C., Chalbi A., Hurter C.:

Animations 25 years later: New roles and opportunities.

In _Proceedings of the International Working Conference on_
_Advanced Visual Interfaces_ (2016), pp. 280–287.

- \[DKTRP07\]De Koning B. B., Tabbers H. K., Rikers R. M., Paas F.:

Attention cueing as a means to enhance learning from an animation.

_Applied Cognitive Psychology: The Official Journal of the_
_Society for Applied Research in Memory and Cognition 21_, 6 (2007), 731–746.

- \[FLS08\]Fischer S., Lowe R. K., Schwan S.:

Effects of presentation speed of a dynamic visualization on the
understanding of a mechanical system.

_Applied Cognitive Psychology: The Official Journal of the_
_Society for Applied Research in Memory and Cognition 22_, 8 (2008),
1126–1141.

- \[GMF∗21\]Garrison L., Meuschke M., Fairman J. E., Smit N. N., Preim B., Bruckner
S.:

An exploration of practice and preferences for the visual
communication of biomedical processes.

In _VCBM_ (2021), pp. 1–12.

- \[HB03\]Harrower M., Brewer C. A.:

Colorbrewer. org: an online tool for selecting colour schemes for
maps.

_The Cartographic Journal 40_, 1 (2003), 27–37.

- \[HKH∗12\]Höferlin M., Kurzhals K., Höferlin B., Heidemann G., Weiskopf
D.:

Evaluation of fast-forward video visualization.

_IEEE Transactions on Visualization and Computer Graphics 18_,
12 (2012), 2095–2103.

- \[HKW11\]Hofmann H., Kafadar K., Wickham H.:

_Letter-value plots: Boxplots for large data_.

Tech. rep., had.co.nz, 2011.

- \[HSK16\]Holm K. L., Skovhus N., Kraus M.:

Increasing the perceived camera velocity in 3d racing games by
changing camera attributes.

In _Interactivity, Game Creation, Design, Learning, and_
_Innovation_. Springer, 2016, pp. 121–128.

- \[IC92\]Ivry R. B., Cohen A.:

Asymmetry in visual search for targets defined by differences in
movement speed.

_Journal of Experimental Psychology: Human Perception and_
_Performance 18_, 4 (1992), 1045.

- \[IDP03\]Itti L., Dhavale N., Pighin F.:

Realistic avatar eye and head animation using a neurobiological model
of visual attention.

In _Applications and Science of Neural Networks, Fuzzy Systems,_
_and Evolutionary Computation VI_ (2003), vol. 5200, International Society for
Optics and Photonics, pp. 64–78.

- \[Itt05\]Itti L.:

Quantifying the contribution of low-level saliency to human eye
movements in dynamic scenes.

_Visual Cognition 12_, 6 (2005), 1093–1123.

- \[Iwa07\]Iwasa J.:

Visualizing the origins of life: molecular animation for scientific
research and education.

In _ACM SIGGRAPH 2007 educators program_. 2007, pp. 21–es.

- \[JAG∗11\]Johnson G. T., Autin L., Goodsell D. S., Sanner M. F., Olson A. J.:

epmv embeds molecular modeling into professional animation software
environments.

_Structure 19_, 3 (2011), 293–303.

- \[Jen17\]Jenkinson J.:

The role of craft-based knowledge in the design of dynamic
visualizations.

In _Learning from Dynamic Visualization_. Springer, 2017,
pp. 93–117.

- \[JM12\]Jenkinson J., McGill G.:

Visualizing protein interactions and dynamics: evolving a visual
language for molecular animation.

_CBE—Life Sciences Education 11_, 1 (2012), 103–110.

- \[JR05\]Joshi A., Rheingans P.:

Illustration-inspired techniques for visualizing time-varying data.

In _VIS 05. IEEE Visualization, 2005._ (2005), IEEE,
pp. 679–686.

- \[KKF∗17\]Kozlíková B., Krone M., Falk M., Lindow N., Baaden M., Baum
D., Viola I., Parulek J., Hege H.-C.:

Visualization of biomolecular structures: State of the art revisited.

In _Computer Graphics Forum_ (2017), vol. 36, Wiley Online
Library, pp. 178–204.

- \[KMH02\]Kosara R., Miksch S., Hauser H.:

Focus+ context taken literally.

_IEEE Computer Graphics and Applications 22_, 1 (2002), 22–29.

- \[KSM∗23\]Kouřil D., Strnad O., Mindek P., Halladjian S., Isenberg T.,
Gröller M. E., Viola I.:

Molecumentary: Adaptable narrated documentaries using molecular
visualization.

_IEEE Transactions on Visualization and Computer Graphics 29_, 3
(2023), 1733–1747.

- \[LB11\]Lowe R., Boucheix J.-M.:

Cueing complex animations: Does direction of attention foster
learning processes?

_Learning and Instruction 21_, 5 (2011), 650–663.

- \[LCL19\]Lee E.-C., Cho Y.-H., Lee I.-K.:

Simulating water resistance in a virtual underwater experience using
a visual motion delay effect.

In _2019 IEEE Conference on Virtual Reality and 3D User_
_Interfaces (VR)_ (2019), IEEE, pp. 259–266.

- \[LGP14\]Lawonn K., Gasteiger R., Preim B.:

Adaptive surface visualization of vessels with animated blood flow.

In _Computer Graphics Forum_ (2014), vol. 33, Wiley Online
Library, pp. 16–27.

- \[LKEP14\]Lawonn K., Krone M., Ertl T., Preim B.:

Line integral convolution for real-time illustration of molecular
surface shape and salient regions.

In _Computer Graphics Forum_ (2014), vol. 33, Wiley Online
Library, pp. 181–190.

- \[LMPSV14\]Le Muzic M., Parulek J., Stavrum A., Viola I.:

Illustrative visualization of molecular reactions using omniscient
intelligence and passive agents.

_Computer Graphics Forum 33_, 3 (2014), 141–150.

- \[LMWPV15\]Le Muzic M., Waldner M., Parulek J., Viola I.:

Illustrative timelapse: A technique for illustrative visualization of
particle-based simulations.

In _2015 IEEE Pacific Visualization Symposium (PacificVis)_
(2015), IEEE, pp. 247–254.

- \[LRB∗16\]Langbehn E., Raupp T., Bruder G., Steinicke F., Bolte B., Lappe M.:

Visual blur in immersive virtual environments: Does depth of field or
motion blur affect distance and speed estimation?

In _Proceedings of the 22nd ACM Conference on Virtual Reality_
_Software and Technology_ (2016), pp. 241–250.

- \[MI13\]Meghdadi A. H., Irani P.:

Interactive exploration of surveillance video through action shot
summarization and trajectory visualization.

_IEEE Transactions on Visualization and Computer Graphics 19_,
12 (2013), 2119–2128.

- \[MKS∗17\]Mindek P., Kouřil D., Sorger J., Toloudis D., Lyons B., Johnson
G., Gröller M. E., Viola I.:

Visualization multi-pipeline for communicating biology.

_IEEE Transactions on Visualization and Computer Graphics 24_, 1
(2017), 883–892.

- \[MSHH11\]Mital P. K., Smith T. J., Hill R. L., Henderson J. M.:

Clustering of gaze during dynamic scene viewing is predicted by
motion.

_Cognitive computation 3_, 1 (2011), 5–24.

- \[MYY∗10\]Mitra N. J., Yang Y.-L., Yan D.-M., Li W., Agrawala M.:

Illustrating how mechanical assemblies work.

_ACM Transactions on Graphics-TOG 29_, 4 (2010), 58.

- \[NCSG11\]Navarro F., Castillo S., Serón F. J., Gutierrez D.:

Perceptual considerations for motion blur rendering.

_ACM Transactions on Applied Perception (TAP) 8_, 3 (2011),
1–15.

- \[NSG11\]Navarro F., Serón F. J., Gutierrez D.:

Motion blur rendering: State of the art.

In _Computer Graphics Forum_ (2011), vol. 30, Wiley Online
Library, pp. 3–26.

- \[O’d07\]O’day D. H.:

The value of animations in biology teaching: a study of long-term
memory retention.

_CBE—Life Sciences Education 6_, 3 (2007), 217–223.

- \[PS18\]Palan S., Schitter C.:

Prolific. ac—a subject pool for online experiments.

_Journal of Behavioral and Experimental Finance 17_ (2018),
22–27.

- \[RBM∗20\]Rekik G., Belkhir Y., Mnif M., Masmoudi L., Jarraya M.:

Decreasing the presentation speed of animated soccer scenes does not
always lead to better learning outcomes in young players.

_International Journal of Human–Computer Interaction 36_, 8
(2020), 717–724.

- \[RCL09\]Ruiz J. G., Cook D. A., Levinson A. J.:

Computer animations in medical education: a critical literature
review.

_Medical education 43_, 9 (2009), 838–846.

- \[RGR17\]Rietzler M., Geiselhart F., Rukzio E.:

The matrix has you: realizing slow motion in full-body virtual
reality.

In _Proceedings of the 23rd ACM Symposium on Virtual Reality_
_Software and Technology_ (2017), pp. 1–10.

- \[RHA17\]Rothe S., Hußmann H., Allary M.:

Diegetic cues for guiding the viewer in cinematic virtual reality.

In _Proceedings of the 23rd ACM Symposium on Virtual Reality_
_Software and Technology_ (2017), pp. 1–2.

- \[RLN07\]Rosenholtz R., Li Y., Nakano L.:

Measuring visual clutter.

_Journal of vision 7_, 2 (2007), 17–17.

- \[Ros99\]Rosenholtz R.:

A simple saliency model predicts a number of motion popout phenomena.

_Vision research 39_, 19 (1999), 3157–3163.

- \[SBE∗14\]Stengel M., Bauszat P., Eisemann M., Eisemann E., Magnor M.:

Temporal video filtering and exposure control for perceptual motion
blur.

_IEEE Transactions on Visualization and Computer Graphics 21_, 5
(2014), 663–671.

- \[SLP∗22\]Sutton J., Langlotz T., Plopski A., Zollmann S., Itoh Y., Regenbrecht
H.:

Look over there! investigating saliency modulation for visual
guidance with augmented reality glasses.

In _Proceedings of the 35th Annual ACM Symposium on User_
_Interface Software and Technology_ (2022), pp. 1–15.

- \[SNMH13\]Sharan L., Neo Z. H., Mitchell K., Hodgins J. K.:

Simulated motion blur does not improve player experience in racing
game.

In _Proceedings of Motion on Games_. 2013, pp. 149–154.

- \[SSS∗20\]Solteszova V., Smit N. N., Stoppel S., Grüner R., Bruckner S.:

Memento: Localized time-warping for spatio-temporal selection.

In _Computer Graphics Forum_ (2020), vol. 39, Wiley Online
Library, pp. 231–243.

- \[ST92\]Stone L. S., Thompson P.:

Human speed perception is contrast dependent.

_Vision research 32_, 8 (1992), 1535–1549.

- \[TKL13\]Tang T., Kurkowski J., Lienkamp M.:

Teleoperated road vehicles: A novel study on the effect of blur on
speed perception.

_International Journal of Advanced Robotic Systems 10_, 9
(2013), 333.

- \[TMB02\]Tversky B., Morrison J. B., Betrancourt M.:

Animation: can it facilitate?

_International journal of human-computer studies 57_, 4 (2002),
247–262.

- \[VL15\]Vivo P. G., Lowe J.:

The book of shaders.

_[https://thebookofshaders.com](https://thebookofshaders.com/ "")_ (2015).

- \[VPC08\]Vaziri-Pashkam M., Cavanagh P.:

Apparent speed increases at low luminance.

_Journal of Vision 8_, 16 (2008), 9–9.

- \[WKG17\]Waldner M., Karimov A., Gröller E.:

Exploring visual prominence of multi-channel highlighting in
visualizations.

In _Proceedings of the 33rd Spring Conference on Computer_
_Graphics_ (2017), pp. 1–10.

- \[WLMB∗14\]Waldner M., Le Muzic M., Bernhard M., Purgathofer W., Viola I.:

Attractive flicker—guiding attention in dynamic narrative
visualizations.

_IEEE Transactions on Visualization and Computer Graphics 20_,
12 (2014), 2456–2465.

- \[XMWZ19\]Xie H., Mayer R. E., Wang F., Zhou Z.:

Coordinating visual and auditory cueing in multimedia learning.

_Journal of Educational Psychology 111_, 2 (2019), 235.
