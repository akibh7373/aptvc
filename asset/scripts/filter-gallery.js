$(document).ready(function () {
    $('.gallery_btn').click(function () {
        const value = $(this).attr('data-filter');
        if (value == 'all') {
            $('.gallery_child').show('1000');
        } else {
            $('.gallery_child').not('.' + value).hide('1000');
            $('.gallery_child').filter('.' + value).show('1000');
        }
    })
});