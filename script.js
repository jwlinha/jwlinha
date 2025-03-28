document.addEventListener('DOMContentLoaded', function() {

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                history.pushState(null, null, targetId);
            }
        });
    });

    function animateOnScroll() {
        const elements = document.querySelectorAll('.projeto-card, .sobre-conteudo, .habilidade-categoria');
        const triggerPoint = window.innerHeight * 0.85;
        
        elements.forEach(el => {
            const elTop = el.getBoundingClientRect().top;
            
            if (elTop < triggerPoint) {
                el.classList.add('reveal');
                console.log('Elemento animado:', el); 
            }
        });
    }

    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                animateOnScroll();
                ticking = false;
            });
            ticking = true;
        }
    });

    animateOnScroll();
});
