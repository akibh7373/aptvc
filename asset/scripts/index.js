// loader
window.addEventListener('load', () => {
    document.querySelector('.loader').classList.add('loader--hidden');
});

// Header navigation
const bar_area = document.querySelector('.bar_area');
const responsive_content = document.querySelector('.responsive_content');
const close_btn = document.querySelector('.close_btn');

bar_area.addEventListener('click', () => {
    responsive_content.classList.add('active_responsive_content');
});

close_btn.addEventListener('click', () => {
    responsive_content.classList.remove('active_responsive_content');
});

// Background-Color change after scroll
const changeHeaderBg = () => {
    const headerBg = document.querySelector('.header');
    let scrollValue = window.scrollY;
    if (scrollValue > 170) {
        headerBg.classList.add('header_bg');
    } else {
        headerBg.classList.remove('header_bg');
    }
}
window.addEventListener('scroll', changeHeaderBg);


// jQuery counter up
$('.counter_up').counterUp({
    delay: 10,
    time: 1000
});