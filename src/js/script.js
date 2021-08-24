$(document).ready(function(){
/*     $('.carousel__inner').slick({
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
    }); */

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
        })
    }

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');
});

var slider = tns({
    container: '.carousel__inner',
    nav: true,
    controls: false,
    // items: 1,
    // slideBy: 1,
    // autoplay: false,
    // controlsText: [
    //     `<img src="icons/redarrow-left.png">`,        
    //     `<img src="icons/redarrow-right.png">`
    // ]
    prevButton: document.querySelector('.prev'),
    nextButton: document.querySelector('.next'),
    responsive: {
        576: {
            nav: false,
            controls: true
        },
    }
});