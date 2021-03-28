# PauseSvgAnimationsOnHidden
Simple chrome extension to work-around irksome problem with SMIL+SVG

[Chrome Issue 1039243](https://bugs.chromium.org/p/chromium/issues/detail?id=1039243&can=2&q=Component%3ABlink%3ESVG%20-Type%3DTask) impacts any site that happens to use indefinitely repeating SVGs. The basic problem is that when a browser tab has an indefinitely repeating SVG and is hidden, the SVG animations are deferred in Chrome and when the browser tab is reactivated, those SVG animations are fast-forwarded to the proper state as determined by the animation markup declared. Work has been done to make the fast-forward efficiently calculated, however, the guarantee of transmitting events for the animation loops is preserved. So some amount of work for each missed animation loop is required in order to dispatch events even if there are no event listeners registered.

This [Codepen](https://codepen.io/jallers/full/OJRzyOj) demonstrates the issue as of 3/27/2021.

This chrome extension injects a content script that listens to 'visibilitychange' and then, pauses and resumes animations on any SVG with an 'animate' or 'animateTransform' descendant element that has a repeatCount='indefinite'. This prevents the creeping performance problem when reactivating tabs that have been idle on impact websites. At the time of this writing, github.com is impacted.
