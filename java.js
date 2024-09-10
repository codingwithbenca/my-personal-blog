<script>
    const burgerMenu = document.getElementById('burger-menu');
    const mobileNav = document.getElementById('mobile-nav');
    const closeMenu = document.getElementById('close-menu');

    burgerMenu.addEventListener('click', () => {
        mobileNav.classList.toggle('active');
    });

    closeMenu.addEventListener('click', () => {
        mobileNav.classList.remove('active');
    });
</script>
