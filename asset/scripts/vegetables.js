// 
const vegetablesProducts = [
    {
        id: 1,
        image: 'png',
        title: 'Bottle Gourd'
    },
    {
        id: 2,
        image: 'png',
        title: 'Broccoli'
    },
    {
        id: 3,
        image: 'png',
        title: 'Cabbage'
    },
    {
        id: 4,
        image: 'jpg',
        title: 'capcicum'
    },
    {
        id: 5,
        image: 'jpg',
        title: 'caulflower'
    },
    {
        id: 6,
        image: 'jpg',
        title: 'coriander'
    },
    {
        id: 7,
        image: 'jpg',
        title: 'cucumber'
    },
    {
        id: 8,
        image: 'jpg',
        title: 'drumstick'
    },
    {
        id: 9,
        image: 'png',
        title: 'egg plant'
    },
    {
        id: 10,
        image: 'jpg',
        title: 'ghee kanchon'
    },
    {
        id: 11,
        image: 'jpg',
        title: 'green paes'
    },
    {
        id: 12,
        image: 'png',
        title: 'green chili'
    },
    {
        id: 13,
        image: 'jpg',
        title: 'green papya'
    },
    {
        id: 14,
        image: 'webp',
        title: 'jute leaves'
    },
    {
        id: 15,
        image: 'jpg',
        title: 'kochu'
    },
    {
        id: 16,
        image: 'jpg',
        title: 'kochur loti'
    },
    {
        id: 17,
        image: 'webp',
        title: 'kochur mukhi'
    },
    {
        id: 18,
        image: 'jpg',
        title: 'kohlrabi'
    },
    {
        id: 19,
        image: 'jpg',
        title: 'lady finger'
    },
    {
        id: 20,
        image: 'jpeg',
        title: 'lemon'
    },
    {
        id: 21,
        image: 'webp',
        title: 'Cabbage'
    },
    {
        id: 22,
        image: 'jpg',
        title: 'mula radish'
    },
    {
        id: 23,
        image: 'jpg',
        title: 'pointed gourd'
    },
    {
        id: 24,
        image: 'jpg',
        title: 'potato'
    },
    {
        id: 25,
        image: 'jpg',
        title: 'pumkin'
    },
    {
        id: 26,
        image: 'jpg',
        title: 'red spinach'
    },
    {
        id: 27,
        image: 'jpg',
        title: 'ridge gourd'
    },
    {
        id: 28,
        image: 'jpg',
        title: 'snake gourd'
    },
];

const vegetables_wrapper = document.querySelector('.vegetables_wrapper');

vegetablesProducts.map(({ id, image, title }) => {
    vegetables_wrapper.innerHTML += `
    <div class="vegetable_items text-center">
        <div
            id="${id}"
            class="vegetables_img items_img"
            style="background-image: url('/src/images/pages/vegetable/items${id}.${image}');"
        >
        </div>
        <h5 class="items_title mt-3 mt-lg-3 text-capitalize text-center">${title}</h5>
        </div>
        `
});

{/* <a href="" class="more_btn vegetable_btn px-4 px-lg-5 py-2 py-lg-2 text-uppercase text-white rounded-pill text-center">more</a> */ }
