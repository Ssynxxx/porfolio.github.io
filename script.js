let slider = tns({
    container : ".my-slider",
    "slideBy" : "1",
    "speed" : 6000,
    "nav" : false,
    autoplay: true,
    controls : false,
    autoplayButtonOutput : false,
    responsive: {
        1600: {
            items: 5,
            gutter: 30
        },
        1024: {
            items: 5,
            gutter: 30
        },
        768: {
            items: 5,
            gutter: 30
        },
        345: {
            items: 5,
            gutter: 30
        },
    }
})

function animateOnScroll() {
    const aboutText = document.querySelector('.about .content .text');
    const aboutPosition = aboutText.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3; // Sesuaikan nilai untuk memicu animasi

    if (aboutPosition < screenPosition) {
        aboutText.classList.add('active');
        window.removeEventListener('scroll', animateOnScroll); // Hentikan event listener setelah animasi berlangsung
    }
}

// Panggil fungsi saat halaman di-scroll
window.addEventListener('scroll', animateOnScroll);