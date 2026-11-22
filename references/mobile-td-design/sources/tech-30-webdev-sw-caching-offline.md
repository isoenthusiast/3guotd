URL: https://web.dev/articles/service-worker-caching-and-http-caching
TITLE: Service worker caching and HTTP caching | web.dev
RETRIEVED: 2026-11-22
METHOD: web_extract

[Skip to main content](https://web.dev/articles/service-worker-caching-and-http-caching#main-content)

[![web.dev](https://www.gstatic.com/devrel-devsite/prod/vc11e4c9d4c060345ba98585d538d4546e842f4a6ee5c5f9e85be4bd345767217/web/images/lockup.svg)](https://web.dev/)

/`

Language

- [English](https://web.dev/articles/service-worker-caching-and-http-caching)
- [Deutsch](https://web.dev/articles/service-worker-caching-and-http-caching?hl=de)
- [Español](https://web.dev/articles/service-worker-caching-and-http-caching?hl=es)
- [Español – América Latina](https://web.dev/articles/service-worker-caching-and-http-caching?hl=es-419)
- [Français](https://web.dev/articles/service-worker-caching-and-http-caching?hl=fr)
- [Indonesia](https://web.dev/articles/service-worker-caching-and-http-caching?hl=id)
- [Italiano](https://web.dev/articles/service-worker-caching-and-http-caching?hl=it)
- [Polski](https://web.dev/articles/service-worker-caching-and-http-caching?hl=pl)
- [Português – Brasil](https://web.dev/articles/service-worker-caching-and-http-caching?hl=pt-br)
- [Tiếng Việt](https://web.dev/articles/service-worker-caching-and-http-caching?hl=vi)
- [Türkçe](https://web.dev/articles/service-worker-caching-and-http-caching?hl=tr)
- [Русский](https://web.dev/articles/service-worker-caching-and-http-caching?hl=ru)
- [עברית](https://web.dev/articles/service-worker-caching-and-http-caching?hl=he)
- [العربيّة](https://web.dev/articles/service-worker-caching-and-http-caching?hl=ar)
- [فارسی](https://web.dev/articles/service-worker-caching-and-http-caching?hl=fa)
- [हिंदी](https://web.dev/articles/service-worker-caching-and-http-caching?hl=hi)
- [বাংলা](https://web.dev/articles/service-worker-caching-and-http-caching?hl=bn)
- [ภาษาไทย](https://web.dev/articles/service-worker-caching-and-http-caching?hl=th)
- [中文 – 简体](https://web.dev/articles/service-worker-caching-and-http-caching?hl=zh-cn)
- [中文 – 繁體](https://web.dev/articles/service-worker-caching-and-http-caching?hl=zh-tw)
- [日本語](https://web.dev/articles/service-worker-caching-and-http-caching?hl=ja)
- [한국어](https://web.dev/articles/service-worker-caching-and-http-caching?hl=ko)

[Sign in](https://web.dev/_d/signin?continue=https%3A%2F%2Fweb.dev%2Farticles%2Fservice-worker-caching-and-http-caching&prompt=select_account)

- [Articles](https://web.dev/articles)

- On this page
- [Overview of caching flow](https://web.dev/articles/service-worker-caching-and-http-caching#overview_of_caching_flow)
- [Caching layers](https://web.dev/articles/service-worker-caching-and-http-caching#caching_layers)
  - [Service worker caching](https://web.dev/articles/service-worker-caching-and-http-caching#service_worker_caching)
  - [HTTP caching](https://web.dev/articles/service-worker-caching-and-http-caching#http_caching)
- [Designing your cache expiry logic](https://web.dev/articles/service-worker-caching-and-http-caching#designing_your_cache_expiry_logic)
  - [Consistent expiry logic for all cache layers](https://web.dev/articles/service-worker-caching-and-http-caching#consistent_expiry_logic_for_all_cache_layers)
  - [Different cache expiry logic at the service worker cache and HTTP layers](https://web.dev/articles/service-worker-caching-and-http-caching#different_cache_expiry_logic_at_the_service_worker_cache_and_http_layers)
- [Conclusion](https://web.dev/articles/service-worker-caching-and-http-caching#conclusion)
- [Learn more](https://web.dev/articles/service-worker-caching-and-http-caching#learn_more)

**Modern Web Guidance is now stable!** Upgrade your coding agents with expert-vetted web development best practices. [Read the announcement](https://developer.chrome.com/blog/modern-web-guidance-v1).


- [Home](https://web.dev/)
- [Articles](https://web.dev/articles)
- [Resources](https://web.dev/explore/ai)
- [Network reliability](https://web.dev/explore/reliable)

Was this helpful?

# Service worker caching and HTTP caching    Stay organized with collections      Save and categorize content based on your preferences.

- On this page
- [Overview of caching flow](https://web.dev/articles/service-worker-caching-and-http-caching#overview_of_caching_flow)
- [Caching layers](https://web.dev/articles/service-worker-caching-and-http-caching#caching_layers)
  - [Service worker caching](https://web.dev/articles/service-worker-caching-and-http-caching#service_worker_caching)
  - [HTTP caching](https://web.dev/articles/service-worker-caching-and-http-caching#http_caching)
- [Designing your cache expiry logic](https://web.dev/articles/service-worker-caching-and-http-caching#designing_your_cache_expiry_logic)
  - [Consistent expiry logic for all cache layers](https://web.dev/articles/service-worker-caching-and-http-caching#consistent_expiry_logic_for_all_cache_layers)
  - [Different cache expiry logic at the service worker cache and HTTP layers](https://web.dev/articles/service-worker-caching-and-http-caching#different_cache_expiry_logic_at_the_service_worker_cache_and_http_layers)
- [Conclusion](https://web.dev/articles/service-worker-caching-and-http-caching#conclusion)
- [Learn more](https://web.dev/articles/service-worker-caching-and-http-caching#learn_more)

The pros and cons of using consistent or different expiry logic across the service worker cache and HTTP cache layers.

![Jonathan Chen](https://web.dev/images/authors/jonchen.jpg)


Jonathan Chen


[X](https://twitter.com/jonchenn) [GitHub](https://github.com/jonchenn)

While service workers and PWAs are becoming standards of modern web applications, resource caching
has become more complex than ever. This article covers the big picture of browser caching,
including:

- The use cases of and differences between service worker caching and HTTP caching.
- The pros and cons of different service worker caching expiry strategies compared to regular
HTTP caching strategies.

## Overview of caching flow

At a high-level, a browser follows the caching order below when it requests a resource:

1. **Service worker cache**: The service worker checks if the resource is in its cache and
decides whether to return the resource itself based on its programmed caching strategies. Note
that this does not happen automatically. You need to create a fetch event handler in your
service worker and intercept network requests so that the requests are served from the service
worker's cache rather than the network.
2. **HTTP cache (also known as the browser cache)**: If the resource is found in the [HTTP\
Cache](https://web.dev/articles/http-cache) and has not yet expired, the browser automatically uses the
resource from the HTTP cache.
3. **Server-side:** If nothing is found in the service worker cache or the HTTP cache, the
browser goes to the network to request the resource. If the resource isn't cached in a CDN, the
request must go all the way back to the origin server.

![Caching flow overview illustration.](https://web.dev/static/articles/service-worker-caching-and-http-caching/image/caching-flow-1ca407905a2f3.png)

## Caching layers

### Service worker caching

A service worker intercepts network-type HTTP requests and uses a [caching strategy](https://web.dev/articles/offline-cookbook#serving-suggestions)
to determine what resources should be returned to the browser. The service worker cache and the HTTP
cache serve the same general purpose, but the service worker cache offers more caching capabilities,
such as fine-grained control over exactly what is cached and how caching is done.

#### Controlling the service worker cache

A service worker intercepts HTTP requests with [event\
listeners](https://github.com/mdn/sw-test/blob/gh-pages/sw.js#L19) (usually the `fetch` event). [This\
code snippet](https://github.com/mdn/dom-examples/blob/main/service-worker/simple-service-worker/sw.js#L11) demonstrates the logic of a
[Cache-First caching strategy](https://developer.chrome.com/docs/workbox/modules/workbox-strategies#cache-first-cache-falling-back-to-network).

![A diagram showing how service workers intercept HTTP requests.](https://web.dev/static/articles/service-worker-caching-and-http-caching/image/a-diagram-showing-servic-f390a0fab030a.png)

It's highly recommended to use [Workbox](https://developer.chrome.com/docs/workbox) to avoid
reinventing the wheel. For example, you can
[register resource URL paths with a single line of regular expression code](https://developer.chrome.com/docs/workbox/modules/workbox-routing#how-to-register-a-regular-expression-route).

```
import {registerRoute} from 'workbox-routing';

registerRoute(new RegExp('styles/.*\\.css'), callbackHandler);
```

#### Service worker caching strategies and use cases

The next table outlines common service worker caching strategies and when each strategy is useful.

| **Strategies** | **Freshness rationale** | **Use cases** |
| --- | --- | --- |
| **[Network only](https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook#network-only)** | The content has to be up-to-date at all times. | - Payments and checkouts<br>- Balance statements |
| **[Network falling back to cache](https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook#network-falling-back-to-cache)** | It's preferable to serve the fresh content. However if the network fails or is unstable, it's<br> acceptable to serve slightly old content. | - Timely data<br>- Prices and rates (requires disclaimers)<br>- Order statuses |
| **[Stale-while-revalidate](https://web.dev/case-studies/ads-case-study-stale-while-revalidate)** | It's okay to serve cached content right away, but updated cached content should be used in the future. | - News feeds<br>- Product listing pages<br>- Messages |
| **[Cache first, fall back to network](https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook#cache-then-network)** | The content is non-critical and can be served from the cache for performance gains, but the<br> service worker should occasionally check for updates. | - App shells<br>- Common resources |
| **[Cache only](https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook#cache-only)** | The content rarely changes. | - Static content |

#### Additional benefits of service worker caching

In addition to fine-grained control of caching logic, service worker caching also provides:

- **More memory and storage space for your origin:** The browser allocates HTTP cache
resources on a per- [origin](https://web.dev/articles/same-site-same-origin#origin) basis. In other
words, if you have multiple subdomains, they all share the same HTTP cache. There is no
guarantee that the content of your origin/domain stays in the HTTP cache for a long time. For
example, a user may purge the cache by manually cleaning up from a browser's settings UI, or
triggering a hard-reload on a page. With a service worker cache you have a much higher
likelihood that your cached content stays cached. See [Persistent\
storage](https://web.dev/articles/persistent-storage) to learn more.
- **Higher flexibility with flaky networks or offline experiences:** With the HTTP cache you
only have a binary choice: either the resource is cached, or not. With service worker caching
you can mitigate little "hiccups" much easier (with the "stale-while-revalidate" strategy),
offer a complete offline experience (with the "Cache only" strategy) or even something in
between, like customized UIs with parts of the page coming from the service worker cache and
some parts excluded (with the "Set catch handler" strategy) where appropriate.

### HTTP caching

The first time a browser loads a web page and related resources, it stores these resources in its
HTTP cache. The HTTP cache is usually enabled automatically by browsers, unless it has been
explicitly disabled by the end user.

Using HTTP caching means relying on the server to determine when to cache a resource and for how
long.

#### Control HTTP cache expiry with HTTP response headers

When a server responds to a browser request for a resource, the server uses HTTP response headers to
tell a browser how long it should cache the resource. See [Response headers: configure your web\
server](https://web.dev/articles/http-cache#response-headers) to learn more.

#### HTTP caching strategies and use cases

HTTP caching is much simpler than service worker caching, because HTTP caching only deals with
time-based (TTL) resource expiration logic. See
[Which response header values should you use?](https://web.dev/articles/http-cache#response-header-strategies)
and [Prevent unnecessary network requests with the HTTP Cache (Summary)](https://web.dev/articles/http-cache#summary) to learn more about HTTP caching strategies.

## Designing your cache expiry logic

This section explains the pros and cons of using consistent expiry logic across the service worker
cache and HTTP cache layers, as well as the pros and cons of separate expiry logic across these
layers.

### Consistent expiry logic for all cache layers

To demonstrate the pros and cons, we'll look at 3 scenarios: long-term, medium-term, and
short-term.

| Scenarios | Long-term caching | Medium-term caching | Short-term caching |
| --- | --- | --- | --- |
| Service worker caching strategy | Cache, falling back to network | Stale-while-revalidate | Network falling back to cache |
| Service worker cache TTL | **30 days** | **1 day** | **10 mins** |
| HTTP cache max-age | **30 days** | **1 day** | **10 mins** |

#### Scenario: Long-term caching (cache, falling back to network)

- When a cached resource is valid (<= 30 days): The service worker returns the cached
resource immediately without going to the network.
- When a cached resource is expired (> 30 days): The service worker goes to the network to
fetch the resource. The browser doesn't have a copy of the resource in its HTTP cache, so it
goes server-side for the resource.

Con: In this scenario, HTTP caching provides less value because the browser will always
pass the request to the server-side when the cache expires in the service worker.

#### Scenario: Medium-term caching (stale-while-revalidate)

- When a cached resource is valid (<= 1 day): The service worker returns the cached
resource immediately, and goes to the network to fetch the resource. The browser has a copy of
the resource in its HTTP cache, so it returns that copy to the service worker.
- When a cached resource is expired (> 1 day): The service worker returns the cached
resource immediately, and goes to the network to fetch the resource. The browser doesn't have a
copy of the resource in its HTTP cache, so it goes server-side to fetch the resource.

Con: The service worker requires additional cache-busting to override the HTTP cache in
order to make the most of the "revalidate" step.

#### Scenario: Short-term caching (network falling back to cache)

- When a cached resource is valid (<= 10 mins): The service worker goes to the network
to fetch the resource. The browser has a copy of the resource in its HTTP cache so it returns
that to the service worker without going server-side.
- When a cached resource is expired (> 10 mins): The service worker returns the cached
resource immediately, and goes to the network to fetch the resource. The browser doesn't have a
copy of the resource in its HTTP cache, so it goes server-side to fetch the resource.

Con: Similar to the medium-term caching scenario, the service worker requires additional
cache-busting logic to override the HTTP cache in order to fetch the latest resource from the
server-side.

#### Service worker in all scenarios

In all scenarios, the service worker cache can still return cached resources when the network is
unstable. On the other hand, the HTTP cache is not reliable when the network is unstable or down.

### Different cache expiry logic at the service worker cache and HTTP layers

To demonstrate the pros and cons, we'll again look at long-term, medium-term, and short-term
scenarios.

| Scenarios | Long-term caching | Medium-term caching | Short-term caching |
| --- | --- | --- | --- |
| Service worker caching strategy | Cache, falling back to network | Stale-while-revalidate | Network falling back to cache |
| Service worker cache TTL | **90 days** | **30 days** | **1 day** |
| HTTP cache max-age | **30 days** | **1 day** | **10 mins** |

#### Scenario: Long-term caching (cache, falling back to network)

- When a cached resource is valid in the service worker cache (<= 90 days): The service
worker returns the cached resource immediately.
- When a cached resource is expired in the service worker cache (> 90 days): The service
worker goes to the network to fetch the resource. The browser doesn't have a copy of the
resource in its HTTP cache, so it goes server-side.

Pros and cons:

- Pro: Users experience instant response as the service worker returns cached resources
immediately.
- Pro: The service worker has more fine-grained control of when to use its cache and when
to request new versions of resources.
- Con: A well-defined service worker caching strategy is required.

#### Scenario: Mid-term caching (stale-while-revalidate)

- When a cached resource is valid in the service worker cache (<= 30 days): The service
worker returns the cached resource immediately.
- When a cached resource is expired in the service worker cache (> 30 days): The service
worker goes to the network for the resource. The browser doesn't have a copy of the resource in
its HTTP cache, so it goes server-side.

Pros and cons:

- Pro: Users experience instant response as the service worker returns cached resources
immediately.
- Pro: The service worker can ensure that the **next** request for a given URL uses a
fresh response from the network, thanks to the revalidation that happens "in the background."
- Con: A well-defined service worker caching strategy is required.

#### Scenario: Short-term caching (network falling back to cache)

- When a cached resource is valid in the service worker cache (<= 1 day): The service
worker goes to the network for the resource. The browser returns the resource from the HTTP
cache if it's there. If the network is down, the service worker returns the resource from the
service worker cache
- When a cached resource is expired in the service worker cache (> 1 day): The service
worker goes to the network to fetch the resource. The browser fetches the resources over the
network as the cached version in its HTTP cache is expired.

Pros and cons:

- Pro: When the network is unstable or down, the service worker returns cached
resources immediately.
- Con: The service worker requires additional cache-busting to override the HTTP Cache and
make "Network first" requests.

## Conclusion

Given the complexity of the combination of caching scenarios, it's not possible to design one rule
that covers all cases. However, based on the findings in the previous sections, there are a few
suggestions to look at when designing your cache strategies:

- Service worker caching logic doesn't need to be consistent with HTTP caching expiry
logic. If possible, use longer expiry logic in the service worker to grant the service worker
more control.
- HTTP caching still plays an important role, but it's not reliable when the network is
unstable or down.
- Revisit your caching strategies for each resource to make sure your service worker caching
strategy provides its value, without conflicting with the HTTP cache.

## Learn more

- [Network reliability](https://web.dev/explore/reliable)
- [Prevent unnecessary network requests with the HTTP Cache](https://web.dev/articles/http-cache)
- [HTTP cache codelab](https://web.dev/articles/codelab-http-cache)
- [Measuring the real-world performance impact of service workers](https://web.dev/case-studies/service-worker-perf)
- [Cache-Control vs. Expires](https://stackoverflow.com/questions/5799906/what-s-the-difference-between-expires-and-cache-control-headers)
- [Caching Demystified: Inspect, Clear, and Disable Caches](https://developer.chrome.com/blog/devtools-tips-36)

Was this helpful?

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2020-07-17 UTC.






\[\[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2020-07-17 UTC."],[],[]\]
