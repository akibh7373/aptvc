// product data { OBJECT }
let products = [
    {
        id: 1,
        image: 'fruits',
        links: 'jute.html',
    },
    {
        id: 2,
        image: 'fruits',
        links: 'leather.html',
    },
    // {
    //     id: 3,
    //     image: 'vegetables',
    //     links: 'vegetables.html',
    // },
    // {
    //     id: 4,
    //     image: 'fruits',
    //     links: 'fruits.html',
    // },
    {
        id: 4,
        image: 'handicrafts',
        links: 'handicrafts.html',
    },
    {
        id: 5,
        image: 'fruits and vegetables',
        links: 'fruits&vegetables.html',
    },
    {
        id: 6,
        image: 'fruits',
        title: 'handmade clay tiles',
        links: 'handmadeclaytiles.html',
    },
    {
        id: 7,
        image: 'seafoods',
        title: 'seafoods and frozen fish',
        links: 'seafood&driedfish.html',
    },
    {
        id: 8,
        image: 'seafoods',
        title: 'sun dried fish',
        links: 'sun-dried-fish.html',
    },
];

const product_wrapper = document.querySelector('.product_wrapper');
products.map(({ image, links }) => {
    product_wrapper.innerHTML += `
        <a href="${links}" class="product_content d-flex justify-content-center align-items-end pb-3 pb-lg-4" style="background-image: url('/src/images/products/${image}.jpg');">
            <button href="${links}" class="more_btn px-4 px-lg-5 py-2 py-lg-2 text-uppercase text-white rounded-pill">
                more
            </button>
        </a>
        `
});
