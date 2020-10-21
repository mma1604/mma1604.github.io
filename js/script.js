$(document).ready(function(){
    $('.carousel__inner').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.png" alt="l"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.png" alt="r"></button>',
    });
});