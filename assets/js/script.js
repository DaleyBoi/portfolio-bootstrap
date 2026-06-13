// ── SCROLL FADE OBSERVER ──
const scrollElements = document.querySelectorAll('.scroll-fade, .scroll-fade-left');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.15 });

scrollElements.forEach(el => observer.observe(el));

// ── SKILL BAR FILL ──
const progressBars = document.querySelectorAll('.progress-bar');

const barObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            barObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

progressBars.forEach(bar => barObserver.observe(bar));

// ── COUNTER ANIMATION ──
const counters = document.querySelectorAll('.counter');

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = +entry.target.getAttribute('data-target');
            const label = entry.target.closest('.fact-item').querySelector('p').textContent;
            const suffix = label.includes('Technologies') || label.includes('Skills') ? '+' : '';
            let count = 0;
            const step = Math.ceil(target / 30);
            const interval = setInterval(() => {
                count += step;
                if (count >= target) {
                    entry.target.textContent = target + suffix;
                    clearInterval(interval);
                } else {
                    entry.target.textContent = count + suffix;
                }
            }, 40);
            counterObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

counters.forEach(counter => counterObserver.observe(counter));