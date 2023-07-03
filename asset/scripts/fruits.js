// 
const fruitsProducts = [
    {
        id: 1,
        image: 'amla.jpg',
        title: 'amla'
    },
    {
        id: 2,
        image: 'banana.jpeg',
        title: 'banana'
    },
    {
        id: 3,
        image: 'beetroots.png',
        title: 'beetroots'
    },
    {
        id: 4,
        image: 'coconut.jpg',
        title: 'coconut'
    },
    {
        id: 5,
        image: 'dragon-fruits.jpg',
        title: 'dragon fruits'
    },
    {
        id: 6,
        image: 'guava.webp',
        title: 'guava'
    },
    {
        id: 7,
        image: 'jackfruit.jpg',
        title: 'jackfruit'
    },
    {
        id: 8,
        image: 'lichi.jpg',
        title: 'lichi'
    },
    {
        id: 9,
        image: 'mango.jpg',
        title: 'mango'
    },
    {
        id: 10,
        image: 'papaya.jpg',
        title: 'papaya'
    },
    {
        id: 11,
        image: 'pineapple.jpg',
        title: 'pineapple'
    },
    {
        id: 12,
        image: 'rock-melon.jpg',
        title: 'rock melon'
    },
    {
        id: 13,
        image: 'tamarind.jpg',
        title: 'tamarind'
    },
    {
        id: 10,
        image: 'watermelon.jpg',
        title: 'watermelon'
    },
];

const jute_wrapper = document.querySelector('.fruits_wrapper');

fruitsProducts.map(({ id, image, title }) => {
    jute_wrapper.innerHTML += `
        <div class="jute_items text-center">
            <div
                id="${id}"
                class="jute_img items_img"
                style="background-image: url('/src/images/pages/fruits/${image}');"
            >
            </div>
            </div>
            `
});
// <h5 class="items_title mt-3 mt-lg-3 text-capitalize text-center">${title}</h5>

{/* <a href="" class="more_btn vegetable_btn px-4 px-lg-5 py-2 py-lg-2 text-uppercase text-white rounded-pill text-center">more</a> */ }


