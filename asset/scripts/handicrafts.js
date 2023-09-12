// handiCraftsProducts array of multiple object
const handiCraftsProducts = [
    {
        id: 1,
        image: 'jpg',
        title: 'flower vase'
    },
    {
        id: 2,
        image: 'jpg',
        title: 'handbags'
    },
    {
        id: 3,
        image: 'jpg',
        title: 'handmade'
    },
    {
        id: 4,
        image: 'jpg',
        title: 'handmademudshowpiece'
    },
    {
        id: 5,
        image: 'jpg',
        title: 'amla'
    },
    {
        id: 6,
        image: 'jpg',
        title: 'amla'
    },
    {
        id: 7,
        image: 'jpg',
        title: 'flower vase'
    },
    {
        id: 8,
        image: 'jpg',
        title: 'handbags'
    },
    {
        id: 9,
        image: 'jpg',
        title: 'handmade'
    },
    {
        id: 10,
        image: 'jpg',
        title: 'handmademudshowpiece'
    },
    {
        id: 11,
        image: 'jpg',
        title: 'amla'
    },
    {
        id: 12,
        image: 'jpg',
        title: 'amla'
    },
    {
        id: 13,
        image: 'jpg',
        title: 'amla'
    },
    {
        id: 14,
        image: 'jpg',
        title: 'amla'
    },
    {
        id: 15,
        image: 'jpg',
        title: 'amla'
    },
    {
        id: 16,
        image: 'jpg',
        title: 'amla'
    },
];

const handicrafts_wrapper = document.querySelector('.handicrafts_wrapper');

handiCraftsProducts.map(({ id, title }) => {
    handicrafts_wrapper.innerHTML += `
        <div class="jute_items text-center">
            <div class="items_img">
                <img id="${id}" class="jute_img" loading="lazy" src="/src/images/products/handicraft/item${id}.jpg"
            </div>
        </div>
    `
});

// <h5 class="items_title mt-3 mt-lg-3 text-capitalize text-center">${title}</h5>
{/* <a href="" class="more_btn vegetable_btn px-4 px-lg-5 py-2 py-lg-2 text-uppercase text-white rounded-pill text-center">more</a> */ }


