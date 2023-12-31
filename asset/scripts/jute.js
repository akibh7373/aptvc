// 
const juteBags = [
    {
        id: 1,
        image: 'jpg',
        title: 'Bottle Gourd'
    },
    {
        id: 2,
        image: 'jpg',
        title: 'Broccoli'
    },
    {
        id: 3,
        image: 'webp',
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
        image: 'webp',
        title: 'cucumber'
    },
    {
        id: 8,
        image: 'jpg',
        title: 'drumstick'
    },
    {
        id: 9,
        image: 'jpg',
        title: 'egg plant'
    },
    {
        id: 10,
        image: 'jpg',
        title: 'ghee kanchon'
    },
    {
        id: 11,
        image: 'webp',
        title: 'green paes'
    },
    {
        id: 12,
        image: 'jpg',
        title: 'green chili'
    },
    {
        id: 13,
        image: 'jpg',
        title: 'green papya'
    },
    {
        id: 14,
        image: 'jpg',
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
        image: 'jpg',
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
        image: 'jpg',
        title: 'lemon'
    },
];
const juteAccessProducts = [
    {
        id: 21,
        image: 'jpg',
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
    {
        id: 29,
        image: 'jpg',
        title: 'snake gourd'
    },
    {
        id: 30,
        image: 'webp',
        title: 'ridge gourd'
    },
    {
        id: 31,
        image: 'jpg',
        title: 'snake gourd'
    },
    {
        id: 32,
        image: 'jpg',
        title: 'snake gourd'
    },
    {
        id: 33,
        image: 'jpg',
        title: 'snake gourd'
    },
    {
        id: 34,
        image: 'jpg',
        title: 'ridge gourd'
    },
    {
        id: 35,
        image: 'jpg',
        title: 'snake gourd'
    },
    {
        id: 36,
        image: 'jpg',
        title: 'snake gourd'
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
        image: 'webp',
        title: 'ridge gourd'
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
        title: 'ridge gourd'
    },
    {
        id: 44,
        image: 'jpg',
        title: 'snake gourd'
    },
];
const fabBags = [
    {
        id: 45,
        image: 'jpg',
        title: 'snake gourd'
    },
    {
        id: 46,
        image: 'jpg',
        title: 'snake gourd'
    },
    {
        id: 47,
        image: 'jpg',
        title: 'snake gourd'
    },
    {
        id: 48,
        image: 'jpg',
        title: 'snake gourd'
    },
    {
        id: 49,
        image: 'jpg',
        title: 'snake gourd'
    },
    {
        id: 50,
        image: 'jpg',
        title: 'snake gourd'
    },
    {
        id: 51,
        image: 'jpg',
        title: 'snake gourd'
    },
    {
        id: 52,
        image: 'jpg',
        title: 'snake gourd'
    },
    {
        id: 53,
        image: 'jpg',
        title: 'snake gourd'
    },
    {
        id: 54,
        image: 'jpg',
        title: 'snake gourd'
    },
    {
        id: 55,
        image: 'jpg',
        title: 'snake gourd'
    },
]
const juteBags_wrapper = document.querySelector('.jute_bags_wrapper');
const jute_accessories_wrapper = document.querySelector('.jute_accessories_wrapper');
const fabBags_wrapper = document.querySelector('.fab_bags_wrapper');
juteBags.map(({ id, image, title }) => {
    juteBags_wrapper.innerHTML += `
        <div class="jute_items text-center">
            <div class="items_img">
                <img id="${id}" class="jute_img" loading="lazy" src="/src/images/pages/jute/items${id}.${image}"
            </div>
        </div>
    `
});
juteAccessProducts.map(({ id, image, title }) => {
    jute_accessories_wrapper.innerHTML += `
        <div class="jute_items text-center">
            <div class="items_img">
                <img id="${id}" class="jute_img" loading="lazy" src="/src/images/pages/jute/items${id}.${image}"
            </div>
        </div>
    `
});
fabBags.map(({ id, image, title }) => {
    fabBags_wrapper.innerHTML += `
        <div class="jute_items text-center">
            <div class="items_img">
                <img id="${id}" class="jute_img" loading="lazy" src="/src/images/pages/jute/items${id}.${image}"
            </div>
        </div>
    `
});

{/* <a href="" class="more_btn vegetable_btn px-4 px-lg-5 py-2 py-lg-2 text-uppercase text-white rounded-pill text-center">more</a> */ }
// <h5 class="items_title mt-3 mt-lg-3 text-capitalize text-center">${title}</h5>