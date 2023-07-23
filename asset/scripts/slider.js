// *********** Banner Slider ***********
$(document).ready(function () {
    $(".banner_wrapper").slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 3000
    });
});