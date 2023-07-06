const shoesProducts = [
    {
        id: 1,
        image: 'jpg',
        title: 'cucumber'
    },
    {
        id: 2,
        image: 'jpg',
        title: 'drumstick'
    },
    {
        id: 3,
        image: 'jpg',
        title: 'egg plant'
    },
    {
        id: 4,
        image: 'jpg',
        title: 'kochu'
    },
    {
        id: 5,
        image: 'jpg',
        title: 'kochur mukhi'
    },
    {
        id: 6,
        image: 'jpg',
        title: 'kohlrabi'
    },
    {
        id: 7,
        image: 'jpg',
        title: 'lemon'
    },
    {
        id: 8,
        image: 'jpg',
        title: 'potato'
    },
    {
        id: 9,
        image: 'jpg',
        title: 'pumkin'
    },
    {
        id: 10,
        image: 'jpg',
        title: 'snake gourd'
    },
    {
        id: 11,
        image: 'jpg',
        title: 'ridge gourd'
    },
    {
        id: 12,
        image: 'jpg',
        title: 'snake gourd'
    },
    {
        id: 13,
        image: 'jpg',
        title: 'snake gourd'
    },
    {
        id: 14,
        image: 'jpg',
        title: 'snake gourd'
    },
    {
        id: 15,
        image: 'jpg',
        title: 'snake gourd'
    },
    {
        id: 16,
        image: 'jpg',
        title: 'snake gourd'
    },
    {
        id: 17,
        image: 'jpg',
        title: 'snake gourd'
    },
    {
        id: 18,
        image: 'jpg',
        title: 'ridge gourd'
    },
    {
        id: 19,
        image: 'jpg',
        title: 'snake gourd'
    },
    {
        id: 20,
        image: 'jpg',
        title: 'snake gourd'
    },
    {
        id: 21,
        image: 'jpg',
        title: 'snake gourd'
    },
    {
        id: 22,
        image: 'jpg',
        title: 'snake gourd'
    },
];

const bagsProduct = [
    {
        id: 23,
        image: 'jpg',
        title: 'green papya'
    },
    {
        id: 24,
        image: 'jpg',
        title: 'jute leaves'
    },
    {
        id: 25,
        image: 'jpg',
        title: 'ghee kanchon'
    },
    {
        id: 26,
        image: 'jpg',
        title: 'green chili'
    },
    {
        id: 27,
        image: 'jpg',
        title: 'Bottle Gourd'
    },
    {
        id: 28,
        image: 'jpg',
        title: 'Cabbage'
    },
    {
        id: 29,
        image: 'jpg',
        title: 'capcicum'
    },
    {
        id: 30,
        image: 'jpg',
        title: 'Cabbage'
    },
    {
        id: 31,
        image: 'jpg',
        title: 'mula radish'
    },
    {
        id: 32,
        image: 'jpg',
        title: 'pointed gourd'
    },
    {
        id: 33,
        image: 'jpg',
        title: 'ridge gourd'
    },
    {
        id: 34,
        image: 'jpg',
        title: 'snake gourd'
    },
    {
        id: 35,
        image: 'jpg',
        title: 'snake gourd'
    },
    {
        id: 36,
        image: 'jpg',
        title: 'ridge gourd'
    },
    {
        id: 37,
        image: 'jpg',
        title: 'snake gourd'
    },
    {
        id: 38,
        image: 'jpg',
        title: 'snake gourd'
    },
    {
        id: 39,
        image: 'jpg',
        title: 'snake gourd'
    },
    {
        id: 40,
        image: 'jpg',
        title: 'snake gourd'
    },
    {
        id: 41,
        image: 'jpg',
        title: 'snake gourd'
    },
    {
        id: 42,
        image: 'jpg',
        title: 'snake gourd'
    },
    {
        id: 43,
        image: 'jpg',
        title: 'snake gourd'
    },
    {
        id: 44,
        image: 'jpg',
        title: 'lady finger'
    },
];

const accessoriesProduct = [
    {
        id: 45,
        image: 'jpg',
        title: 'green paes'
    },
    {
        id: 46,
        image: 'jpg',
        title: 'kochur loti'
    },
    {
        id: 47,
        image: 'jpg',
        title: 'Broccoli'
    },
    {
        id: 48,
        image: 'jpg',
        title: 'caulflower'
    },
    {
        id: 49,
        image: 'jpg',
        title: 'coriander'
    },
    {
        id: 50,
        image: 'jpg',
        title: 'snake gourd'
    },
    {
        id: 51,
        image: 'jpg',
        title: 'red spinach'
    },
    {
        id: 52,
        image: 'jpg',
        title: 'snake gourd'
    },
    {
        id: 53,
        image: 'jpg',
        title: 'ridge gourd'
    },
];

const shoes_wrapper = document.querySelector('.shoes_wrapper');
const bags_wrapper = document.querySelector('.bags_wrapper');
const accessories_wrapper = document.querySelector('.accessories_wrapper');

shoesProducts.map(({ id, image, title }) => {
    shoes_wrapper.innerHTML += `
    <div class="jute_items text-center">
        <div
            id="${id}"
            class="jute_img items_img"
            style="background-image: url('/src/images/pages/leather/items${id}.${image}');"
        >
        </div>
        </div>
        `
});
bagsProduct.map(({ id, image, title }) => {
    bags_wrapper.innerHTML += `
    <div class="jute_items text-center">
        <div
            id="${id}"
            class="jute_img items_img"
            style="background-image: url('/src/images/pages/leather/items${id}.${image}');"
        >
        </div>
        </div>
        `
});
accessoriesProduct.map(({ id, image, title }) => {
    accessories_wrapper.innerHTML += `
    <div class="jute_items text-center">
        <div
            id="${id}"
            class="jute_img items_img"
            style="background-image: url('/src/images/pages/leather/items${id}.${image}');"
        >
        </div>
        </div>
        `
});
// <h5 class="items_title mt-3 mt-lg-3 text-capitalize text-center">${title}</h5>

{/* <a href="" class="more_btn vegetable_btn px-4 px-lg-5 py-2 py-lg-2 text-uppercase text-white rounded-pill text-center">more</a> */ }
