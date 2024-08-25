document.addEventListener('DOMContentLoaded', () => {
    // Preloader
    window.addEventListener('load', () => {
        const preloader = document.getElementById('preloader');
        if (preloader) {
            preloader.style.opacity = '0';
            setTimeout(() => preloader.style.display = 'none', 500); // Fade out the preloader
        }
    });

    // GSAP Animations
    gsap.from('.hero-title', { opacity: 0, y: -50, duration: 1, delay: 0.5 });
    gsap.from('.hero-subtitle', { opacity: 0, y: 50, duration: 1, delay: 1 });

    // ScrollTrigger Animations
    gsap.utils.toArray('.skill-bar .progress').forEach(progress =>
        gsap.to(progress, {
            width: progress.dataset.percent,
            duration: 4,
            ease: 'power1.inOut',
            scrollTrigger: { trigger: progress, start: 'top 80%' }
        })
    );

    // Smooth Scrolling
    document.querySelectorAll('nav a').forEach(anchor =>
        anchor.addEventListener('click', e => {
            e.preventDefault();
            const targetId = anchor.getAttribute('href').substring(1); // Remove the '#' symbol
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        })
    );
});
