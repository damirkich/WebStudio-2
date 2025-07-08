document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.header__burger');
    const nav = document.querySelector('.header__nav');
    const address = document.querySelector('.header__address');
    
    burger.addEventListener('click', function() {
        // Toggle burger animation
        burger.classList.toggle('active');
        
        // Toggle navigation
        nav.classList.toggle('active');
        
        // Toggle body scroll
        document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
        
        // If you want to show address in mobile menu
        if (nav.classList.contains('active')) {
            const mobileAddress = address.cloneNode(true);
            mobileAddress.classList.add('mobile-address');
            mobileAddress.style.display = 'flex';
            mobileAddress.style.flexDirection = 'column';
            mobileAddress.style.gap = '32px';
            mobileAddress.style.marginTop = '32px';
            
            // Add address to menu if not already there
            if (!document.querySelector('.mobile-address')) {
                nav.appendChild(mobileAddress);
            }
        } else {
            // Remove address when closing menu
            const mobileAddress = document.querySelector('.mobile-address');
            if (mobileAddress) {
                mobileAddress.remove();
            }
        }
    });
    
    // Close menu when clicking on links
    const navLinks = document.querySelectorAll('.header__list--link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            burger.classList.remove('active');
            nav.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
});