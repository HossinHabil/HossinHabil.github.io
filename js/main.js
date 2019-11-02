$(function () {
    'use strict';
    
    var winH = $(window).height();
    
    $('.head-slider, .carousel-item').height(winH);
});

var owl = $('.owl-carousel');
owl.owlCarousel({
    items: 4,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true
});

$(document).ready(function() {
    
    var scrollLink = $('.scroll');
    
    // smooth scrolling
    
    scrollLink.click(function(e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 2000)
    })
})