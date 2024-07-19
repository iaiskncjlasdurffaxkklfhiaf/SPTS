document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('scroll-down-button').addEventListener('click', function (e) {
        e.preventDefault();
        const targetElement = document.getElementById('second-layer');
        const targetOffsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ top: targetOffsetTop, behavior: 'smooth' });
    });
});
