const cart = [
    {
        id: 1,
        image: 'jutes.jpg',
        title: 'jute'
    },
    {
        id: 2,
        image: 'leather.jpg',
        title: 'leather'
    },
    {
        id: 3,
        image: 'handicrafts.jpg',
        title: 'handicrafts'
    },
    {
        id: 7,
        image: 'fruits&vegetables.jpg',
        title: 'fruits&vegetables'
    },
    {
        id: 8,
        image: 'handmadeclaytiles.jpg',
        title: 'handmadeclaytitles'
    },
    {
        id: 4,
        image: 'seafoods.jpg',
        title: 'seafoods&frozenfish'
    },
    {
        id: 6,
        image: 'sundriedfish.jpg',
        title: 'sun-driedfish'
    },


];

// show the product nav wrapper
const navBtn = document.querySelector('.product_nav');
const navWrapper = document.querySelector('.product_nav_wrapper');
navBtn.addEventListener('click', () => {
    navWrapper.classList.toggle('product_nav_wrapper_active');
});
cart.map(({ image, title }) => {
    navWrapper.innerHTML += `
    <a href="${title}.html" class="product_nav_items">
        <img src="/src/images/products/${image}" alt="" class="product_nav_img">
        <h6 class="product_nav_title mt-lg-2 text-uppercase text-dark">${title}</h6>
    </a>
    `
})