// 
const seaFoodProducts = [
    {
        id: 1,
        image: 'jpg',
        title: 'mackerel'
    },
    {
        id: 2,
        image: 'jpg',
        title: 'red seabream fish'
    },
    {
        id: 3,
        image: 'jpg',
        title: 'trout'
    },
    {
        id: 4,
        image: 'png',
        title: '4'
    },
    {
        id: 5,
        image: 'jpg',
        title: '5'
    },
    {
        id: 6,
        image: 'jpg',
        title: '6'
    },
    {
        id: 7,
        image: 'jpg',
        title: '7'
    },
    {
        id: 8,
        image: 'jpg',
        title: '8'
    },
    {
        id: 9,
        image: 'jpg',
        title: '9'
    },
    {
        id: 10,
        image: 'jpg',
        title: '10'
    },
    {
        id: 11,
        image: 'jpg',
        title: '11'
    },
    {
        id: 12,
        image: 'jpg',
        title: '12'
    },
    {
        id: 13,
        image: 'jpg',
        title: '13'
    },
    {
        id: 14,
        image: 'jpg',
        title: 'Bashpata Fewa Shutki'
    },
    {
        id: 15,
        image: 'jpg',
        title: 'Chapila Fara Shutki'
    },
    {
        id: 16,
        image: 'jpg',
        title: 'Chela Shutki'
    },
    {
        id: 17,
        image: 'jpg',
        title: 'Chela Shutki'
    },
    {
        id: 18,
        image: 'jpg',
        title: 'Churi Shutki'
    },
];
const fish = [
    {
        id: 19,
        image: 'jpg',
        title: 'Deshi Powa  Popa Shutki'
    },
    {
        id: 20,
        image: 'jpg',
        title: 'Goinna Ghonia Shutki'
    },
    {
        id: 21,
        image: 'jpg',
        title: 'Lakakkha'
    },
    {
        id: 22,
        image: 'jpg',
        title: 'Local Shrimp'
    },
    {
        id: 23,
        image: 'jpg',
        title: 'Loitta Shutki'
    },
    {
        id: 24,
        image: 'jpg',
        title: 'Loitta Special NariVuri Chara Shutki'
    },
    {
        id: 25,
        image: 'jpg',
        title: 'pompret'
    },
    {
        id: 26,
        image: 'jpg',
        // title: ''
    },
    {
        id: 27,
        image: 'jpg',
        // title: ''
    },

]
const seafoodsWrapper = document.querySelector('.seafood_wrapper');
const fishWrapper = document.querySelector('.fish_wrapper');

seaFoodProducts.map(({ id, image, title }) => {
    seafoodsWrapper.innerHTML += `
        <div class="jute_items text-center">
            <div class="items_img">
                <img id="${id}" class="jute_img" loading="lazy" src="/src/images/products/seafood&driedfish/${id}.${image}"
            </div>
        </div>
        `
});
fish.map(({ id, image, title }) => {
    fishWrapper.innerHTML += `
    <div class="jute_items text-center">
        <div class="items_img">
            <img id="${id}" class="jute_img" loading="lazy" src="/src/images/products/seafood&driedfish/${id}.${image}"
        </div>
    </div>
        `
});
// <h5 class="items_title mt-3 mt-lg-3 text-capitalize text-center">${title}</h5>

{/* <a href="" class="more_btn vegetable_btn px-4 px-lg-5 py-2 py-lg-2 text-uppercase text-white rounded-pill text-center">more</a> */ }
