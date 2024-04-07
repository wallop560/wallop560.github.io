const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            if (entry.target.dataset.blur === 'blurred') {
                entry.target.style.filter = entry.target.dataset.previousBlur;
            } else {
                entry.target.style.filter = 'none'; // Remove blur
            }
        } else {
            entry.target.classList.remove('show');
            if (entry.target.style.filter && entry.target.style.filter !== 'none') {
                entry.target.dataset.blur = 'blurred';
                entry.target.dataset.previousBlur = entry.target.style.filter;
            }
            entry.target.style.filter = 'blur(2px)'; // Apply blur when hidden
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));