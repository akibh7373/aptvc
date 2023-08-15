const cart = [
    {
        id: 1,
        image: 'jutes.jpg',
        title: 'jute',
        links: 'jutes',
    },
    {
        id: 2,
        image: 'leather.jpg',
        title: 'leather',
        links: 'leathers',
    },
    {
        id: 3,
        image: 'handicrafts.jpg',
        title: 'handicrafts',
        links: 'handicrafts',
    },
    {
        id: 4,
        image: 'fruits&vegetables.jpg',
        title: 'fruits & vegetables',
        links: 'fruits&vegetables',

    },
    {
        id: 5,
        image: 'handmadeclaytiles.jpg',
        title: 'hand made clay tiles',
        links: 'handmadeclaytiles',
    },
    {
        id: 6,
        image: 'seafoods.jpg',
        title: 'sea food & frozen fish',
        links: 'seafood&frozenfish',
    },
    {
        id: 7,
        image: 'sundriedfish.jpg',
        title: 'sun dried fish',
        links: 'sun-dried-fish',
    },


];

// show the product nav wrapper
const navBtn = document.querySelector('.product_nav');
const navWrapper = document.querySelector('.product_nav_wrapper');
navBtn.addEventListener('click', () => {
    navWrapper.classList.toggle('product_nav_wrapper_active');
});
cart.map(({ image, title, links }) => {
    navWrapper.innerHTML += `
    <a href="${links}.html" class="product_nav_items">
        <img src="/src/images/products/${image}" alt="" class="product_nav_img">
        <h6 class="product_nav_title mt-lg-2 text-uppercase text-dark">${title}</h6>
    </a>
    `
})