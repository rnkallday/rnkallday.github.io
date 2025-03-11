document.addEventListener('DOMContentLoaded', function() {
    const line = document.querySelector('.draw-line');
    setTimeout(() => {
        line.style.width = '100%';
    }, 1500);

    const wordNerd = document.getElementById('word-nerd');
    setTimeout(() => {
        wordNerd.classList.remove('opacity-0');
    }, 500);

    const interactiveElements = document.querySelectorAll('.interactive-text');
    let scaleWidth = 1.05;
    let scaleHeight = 1.05;
    document.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        interactiveElements.forEach(el => {
            el.style.transform = `scale(${scaleWidth}, ${scaleHeight})`;
        });
    });
});
