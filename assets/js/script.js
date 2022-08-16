$(document).ready(function(){
    
    var $bannerSlider = $('.banner__slider');    
    $bannerSlider.on('init', function(slick) {   
        var allSlide = slick;
        // console.log(allSlide);
        let allSlideArray = [...$(allSlide.target).find(".banner__slide")];
        allSlideArray.forEach((eachSlide)=>{
            $(".banner__shape-slider").append(`
            <div class="banner__shape__slide__item__bg" style="background-image: ${eachSlide.dataset.bg};"></div>
            `);
        })
    });

    $bannerSlider.on('beforeChange', function(slick, currentSlide, nextSlide) {
        // $(".banner__shape__slide__item__bg")
        console.table(currentSlide)
    });

    $bannerSlider.slick({
        infinite: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
    });

   

    // $('.banner__shape-slider').on('beforeChange', function(slick, currentSlide, nextSlide){
    //     console.log(slick);
    //     console.log(currentSlide);
    //     console.log(nextSlide);
    // });
    

})
