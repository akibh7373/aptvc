const nameGroup = [
    {
        name: 'pepper',
        links: 'pepper',
    },
    {
        name: 'spinach',
        links: 'spinach',
    },
    {
        name: 'sweet pumpkin',
        links: 'sweet-pumpkin',
    },
    {
        name: 'rice pumpkin',
        links: 'rice-pumpkin',
    },
    {
        name: 'gourd',
        links: 'gourd',
    },
    {
        name: 'corolla',
        links: 'corolla',
    },
    {
        name: 'eggplant',
        links: 'eggplant',
    },
    {
        name: 'carrot',
        links: 'carrot',
    },
    {
        name: 'cabbage',
        links: 'cabbage',
    },
    {
        name: 'cauliflower',
        links: 'cauliflower',
    },
    {
        name: 'tomatto',
        links: 'tomatto',
    },
    {
        name: 'cucumber',
        links: 'cucumber',
    },
    {
        name: 'bean',
        links: 'bean',
    },
    {
        name: 'watermelon',
        links: 'watermelon',
    },
    {
        name: 'lemon',
        links: 'lemon',
    },
    {
        name: 'pineapple',
        links: 'pineapple',
    },
    {
        name: 'banana',
        links: 'banana',
    },
    {
        name: 'papaya',
        links: 'papaya',
    },
    // {
    //     name: 'red vegetables',
    // },
    // {
    //     name: 'puishak',
    // },
    // {
    //     name: 'broken',
    // },
    // {
    //     name: 'pour out',
    // },
    // {
    //     name: 'shrimp',
    // },
    // {
    //     name: 'radish',
    // },
    // {
    //     name: 'wolkopi',
    // },
    // {
    //     name: 'shrimp',
    // },
    // {
    //     name: 'radish',
    // },
];

const season_fruits_area = document.querySelector('.season_fruits_area');

nameGroup.map(({ name, links }) => {
    season_fruits_area.innerHTML += `
     <a href="${links}.html" class="season_fruits ps-3 py-2 mb-lg-2 ps-lg-3 py-lg-1 w-100 text-uppercase">
     ${name}</a>
     `
})