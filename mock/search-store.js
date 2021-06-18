const Stores = [
    {
        id: 1,
        name : "Pizza Hut",
        priceRate : 3,
        desc : "Pizza, Breads, Italic",
        rating : {
            stars :4.7,
            votes : 4500
        },
        delivery : {
            timeRequired:  27,
            isFree : true
        },
        images: [
            "images/food1.jpg",
            "images/food2.jpg"
        ],
    },
    {
        id: 2,
        name : "Dominos",
        priceRate : 3,
        desc : "Pizza, Breads, Italic",
        rating : {
            stars :4.4,
            votes : 5500
        },
        delivery : {
            timeRequired:  15,
            isFree : true
        },
        images: [
            "images/food1.jpg",
            "images/food2.jpg"
        ],
    },
    {
        id: 3,
        name : "Spices",
        priceRate : 3,
        desc : "Indian",
        rating : {
            stars :4.2,
            votes : 6000
        },
        delivery : {
            timeRequired:  35,
            isFree : false
        },
        images: [
            "images/food1.jpg",
            "images/food2.jpg"
        ],
    },
];

export default Stores;