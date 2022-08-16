$(document).ready(function(){
    let rotation = 0;
    
    var $bannerSlider = $('.banner__slider');    
    $(".banner__slide").each(function(eachSlideIndex,eachSlide){
        $(".gradient-wrapper").append(`
            <svg class="gradient-wrapper" width="0" height="0" viewBox="0 0 0 0" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="gradient_${eachSlideIndex}" x1="280.988" y1="1.86192" x2="629" y2="596" gradientUnits="userSpaceOnUse">
                        <stop stop-color="${eachSlide.dataset.gradient_1}"></stop>
                        <stop offset="1" stop-color="${eachSlide.dataset.gradient_2}"></stop>
                    </linearGradient>
                </defs>
            </svg>
        `);

        $(".banner__shape-slider").prepend(`
            <div class="banner__shape-slide active">
                <svg class="banner__shape-slide__item" width="1em" height="1em" viewBox="0 0 648 644" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill="url(#gradient_${eachSlideIndex})" d="M227.296 30.6147C256.367 -1.1097 303.542 -8.44647 340.875 12.9504L600.849 161.957C635.081 181.578 652.991 220.844 645.365 259.557L592.801 526.402C585.325 564.361 554.903 593.585 516.676 599.53L237.945 642.879C199.718 648.825 161.856 630.22 143.204 596.325L12.0841 358.047C-6.93851 323.478 -1.79993 280.628 24.8567 251.538L227.296 30.6147Z"/>
                </svg>
            </div>
        `);
    })
    // $bannerSlider.on('init', function(slick) {   
    //     var allSlide = slick;
    //     let allSlideArray = [...$(allSlide.target).find(".banner__slide")];
    // });

    $bannerSlider.on('beforeChange', function(slick, currentSlide, nextSlide) {
        // var allSlide = slick;
        // let allSlideArray = [...$(allSlide.target).find(".banner__slide")];
        // console.log(slick);
        // console.log(nextSlide);
        let allSlideShape = document.querySelectorAll(".banner__shape-slide");
        let slideShapeArray = Array.from(allSlideShape);
        console.log(currentSlide);
        $(".banner__shape-slide").removeClass("active");
        slideShapeArray[currentSlide.currentSlide].classList.add("active")
        rotation += 72;
        $(".banner__shape-slide").css("transform", `rotate(${rotation}deg)`)
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
