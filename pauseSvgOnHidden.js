let pausedSvgs = [];
window.addEventListener('visibilitychange', function() {
    const svgs = document.querySelectorAll('svg');
    const indefinitelyAnimatedSvgs = Array.from(svgs).filter(svg => 
        svg.querySelectorAll('animate[repeatCount="indefinite"],animateTransform[repeatCount="indefinite"]').length > 0);
    if (document.hidden) {
        for (const svg of indefinitelyAnimatedSvgs) {
            svg.pauseAnimations();
        }
        pausedSvgs = indefinitelyAnimatedSvgs;
    } else {
        for (const svg of pausedSvgs) {
            svg.unpauseAnimations();
        }
        pausedSvgs = [];
    }
});
