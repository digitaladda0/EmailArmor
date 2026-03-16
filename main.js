document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    
    // Header scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Mobile Menu Toggle
    const navLinks = document.querySelector('.nav-links');
    const toggle = document.createElement('div');
    toggle.className = 'menu-toggle';
    toggle.innerHTML = '<span></span><span></span><span></span>';
    document.querySelector('nav').appendChild(toggle);

    toggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        toggle.classList.toggle('active');
    });

    // Close menu when link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // Simple observer for animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll, .glass-card, .stat-card').forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });

    // Form Security and Sanitization
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            
            // Simple XSS Sanitization
            const inputs = contactForm.querySelectorAll('input, textarea');
            let isValid = true;

            inputs.forEach(input => {
                const cleanValue = input.value.replace(/<[^>]*>?/gm, '').trim();
                input.value = cleanValue; // Sanitize in-place
                
                if (input.required && !cleanValue) {
                    isValid = false;
                }
            });

            if (isValid) {
                submitBtn.disabled = true;
                submitBtn.innerText = 'Sending...';
                
                // Mock success message
                setTimeout(() => {
                    contactForm.innerHTML = `
                        <div class="glass-card animate-on-scroll visible" style="text-align: center; padding: 3rem;">
                            <div style="font-size: 3rem; margin-bottom: 1.5rem;">✅</div>
                            <h3>Message Sent Safely!</h3>
                            <p style="color: var(--text-dim); margin-top: 1rem;">We've received your inquiry and will get back to you within 24 hours.</p>
                        </div>
                    `;
                }, 1500);
            }
        });
    }
});
