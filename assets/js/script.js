$(document).ready(function(){

    $('.banner__slider').slick({
        infinite: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.banner__shape-slider',
    });

    $('.banner__shape-slider').slick({
        asNavFor: '.banner__slider',
        infinite: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
    });

    $('.banner__shape-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        console.log(event);
        console.log(slick);
        console.log(currentSlide);
        console.log(nextSlide);
      });

})
