$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav:true,
        responsive: {
            0: {
                items: 1,
                stagePadding: 0
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })
});
// Testimonial