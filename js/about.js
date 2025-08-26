// عد الإحصائيات
function animateCounter() {
    const counters = document.querySelectorAll('.stat-number');
    const speed = 200;
    
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-count');
        const count = +counter.innerText;
        const increment = Math.ceil(target / speed);
        
        if (count < target) {
            counter.innerText = count + increment;
            setTimeout(() => animateCounter(counter), 1);
        } else {
            counter.innerText = target;
        }
    });
}

// التهيئة الأولية
document.addEventListener('DOMContentLoaded', () => {
    // تشغيل عداد الإحصائيات عندما يكون القسم في مجال الرؤية
    const statsSection = document.querySelector('.stats-section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter();
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });
    
    if (statsSection) {
        observer.observe(statsSection);
    }
});
