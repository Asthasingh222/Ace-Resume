/* ===== SCROLL REVEAL ANIMATION ===== */
const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});

/* SCROLL HOME */
srtop.reveal('.home .content h3', { delay: 200 });
srtop.reveal('.home .content p', { delay: 200 });
srtop.reveal('.home .content .btn', { delay: 200 });
srtop.reveal('.home .image', { delay: 400 });

/* SCROLL THREE STEPS */
srtop.reveal('.threestep h2', { delay: 200 });
srtop.reveal('.threestep .row .image', { delay: 200 });
srtop.reveal('.threestep .row .image2', { delay: 200 });
srtop.reveal('.threestep .row .s', { delay: 400 });

// SCROLL resume templates
srtop.reveal('.resume-templates h2', { delay: 200 });
srtop.reveal('.resume-templates .card__container', { delay: 200 });
/* SCROLL TRY RESUME */
srtop.reveal('.tryresume h2', { delay: 200 });
srtop.reveal('.tryresume h3', { delay: 200 });
srtop.reveal('.tryresume image', { delay: 200 });
srtop.reveal('.tryresume p', { delay: 400 });

// SCROLL ABOUT-US 
srtop.reveal('.about-us h2', { delay: 200 });
srtop.reveal('.about-us .image', { delay: 200 });
srtop.reveal('.about-us p', { delay: 300 });
/* SCROLL PROJECTS */
srtop.reveal('.work .box', { interval: 200 });

/* SCROLL CONTACT */
srtop.reveal('.contact .container', { delay: 400 });
srtop.reveal('.contact .container .form-group', { delay: 400 });