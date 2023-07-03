// 
const sunDriedFishProducts = [
    {
        id: 1,
        image: 'jpg',
        title: 'Mustard Seed'
    },
    {
        id: 2,
        image: 'jpg',
        title: 'Prince of Rice'
    },
    {
        id: 3,
        image: 'jpg',
        title: 'sesame Seed'
    },
    {
        id: 4,
        image: 'jpg',
        title: 'Prince of Rice'
    },
    {
        id: 5,
        image: 'jpg',
        title: 'sesame Seed'
    },
];

const sun_dried_fish_wrapper = document.querySelector('.sun_dried_fish_wrapper');

sunDriedFishProducts.map(({ id, image }) => {
    sun_dried_fish_wrapper.innerHTML += `
    <div class="jute_items text-center">
        <div
            id="${id}"
            class="jute_img items_img"
            style="background-image: url('/src/images/products/sun-dired-fish/${id}.${image}');"
        >
        </div>
    </div>
    `
});

{/* <a href="" class="more_btn vegetable_btn px-4 px-lg-5 py-2 py-lg-2 text-uppercase text-white rounded-pill text-center">more</a> */ }
    // <h5 class="items_title mt-3 mt-lg-3 text-capitalize text-center">${title}</h5>


