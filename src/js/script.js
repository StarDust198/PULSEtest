$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        // adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/redarrow-left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/redarrow-right.png"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                }
            },
            {
                breakpoint: 768,
                settings: {
                    dots: true,
                    arrows: false
                }
            },
            {
                breakpoint: 576,
                settings: {
                    dots: true,
                    arrows: false
                }
            },
        ]
    });
});