// product data { OBJECT }
let products = [
    {
        id: 1,
        image: 'jutes',
        title: 'jutes',
        links: 'jute.html',
    },
    {
        id: 2,
        image: 'leather',
        title: 'leather',
        links: 'leather.html',
    },
    // {
    //     id: 3,
    //     image: 'vegetables',
    // title: 'handmade clay tiles',
    //     links: 'vegetables.html',
    // },
    // {
    //     id: 4,
    //     image: 'fruits',
    // title: 'handmade clay tiles',
    //     links: 'fruits.html',
    // },
    {
        id: 4,
        image: 'handicrafts',
        title: 'handicrafts',
        links: 'handicrafts.html',
    },
    {
        id: 5,
        image: 'fruits',
        title: 'fruits &amp; vegetables',
        links: 'fruits&vegetables.html',
    },
    {
        id: 6,
        image: 'handmadeclaytiles',
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
        image: 'sundriedfish',
        title: 'sun dried fish',
        links: 'sun-dried-fish.html',
    },
];

const product_wrapper = document.querySelector('.product_wrapper');
products.map(({ id, image, title, links }) => {
    product_wrapper.innerHTML += `
        <a href="${links}" class="product_content d-flex justify-content-center align-items-end">
            <img class="product_img w-100 h-100" src="/src/images/products/${image}.jpg" />
            <div class="product_overlay d-flex justify-content-center align-items-center">
                <h6 class="text-uppercase text-center text-white">${title}</h6>
            </div>
        </a>
        `
});
        // <button href="${links}" class="more_btn px-4 px-lg-5 py-2 py-lg-2 text-uppercase text-white rounded-pill">
        //     more
        // </button>
