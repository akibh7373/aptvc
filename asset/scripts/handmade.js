// 
const handMadeProducts = [
    {
        id: 1,
        image: 'jpg',
        title: ''
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
        // title: 'amla'
    },
    {
        id: 6,
        image: 'jpg',
        // title: 'amla'
    },
    {
        id: 7,
        image: 'jpg',
        title: 'flower vase'
    },
];

const handMade_wrapper = document.querySelector('.handmade_wrapper');

handMadeProducts.map(({ id, title }) => {
    handMade_wrapper.innerHTML += `
        <div class="jute_items text-center">
            <img
                id="${id}"
                class="jute_img items_img"
                src="src/images/products/handmade/${id}.jpg"
            />
        </div>
    `
});

// <h5 class="items_title mt-3 mt-lg-3 text-capitalize text-center">${title}</h5>
{/* <a href="" class="more_btn vegetable_btn px-4 px-lg-5 py-2 py-lg-2 text-uppercase text-white rounded-pill text-center">more</a> */ }


