import { Product } from "../interfaces/product.interfaces";

export const FlashProduct: Product[] = [
    {
        id: 1,
        name: "HAVIT HV-G92 Gamepad",
        imgLink: "../../img/console.png",
        currentPrice: 120,
        originalPrice: 160,
        discount: 40,
        ratings: ["../../img/stars.svg"],
        ratingNumber: "88",
        isFavorite: false,
        isAddToCard: false,
    },
    {
        id: 2,
        name: "AK-900 Wired Keyboard",
        imgLink: "../../img/clavish.png",
        currentPrice: 960,
        originalPrice: 1160,
        discount: 35,
        ratings: ["../../img/Four Star.svg"],
        ratingNumber: "75",
        isFavorite: false,
        isAddToCard: false
    },
    {
        id: 3,
        name: "IPS LCD Gaming Monitor",
        imgLink: "../../img/comp.png",
        currentPrice: 370,
        originalPrice: 400,
        discount: 30,
        ratings: ["../../img/stars.svg"],
        ratingNumber: "99",
        isFavorite: false,
        isAddToCard: false
    },
    {
        id: 4,
        name: "S-Series Comfort Chair ",
        imgLink: "../../img/chair.png",
        currentPrice: 375,
        originalPrice: 400,
        discount: 25,
        ratings: ["../../img/Four Half Star.svg"],
        ratingNumber: "99",
        isFavorite: false,
        isAddToCard: false
    },
]

export const BestProduct: Product[] = [
    {
        id: 6,
        name: "The north coat",
        imgLink: "../../img/куртка.png",
        currentPrice: 260,
        originalPrice: 360,
        ratings: ["../../img/stars.svg"],
        ratingNumber: "65",
        isFavorite: false,
        isAddToCard: false,
    },
    {
        id: 7,
        name: "Gucci duffle bag",
        imgLink: "../../img/сумка.png",
        currentPrice: 960,
        originalPrice: 1160,
        ratings: ["../../img/Four Half Star.svg"],
        ratingNumber: "65",
        isFavorite: false,
        isAddToCard: false
    },
    {
        id: 8,
        name: "RGB liquid CPU Cooler",
        imgLink: "../../img/калонка.png",
        currentPrice: 160,
        originalPrice: 170,
        ratings: ["../../img/Four Half Star.svg"],
        ratingNumber: "65",
        isFavorite: false,
        isAddToCard: false
    },
    {
        id: 9,
        name: "Small BookSelf",
        imgLink: "../../img/стол.png",
        currentPrice: 360,
        ratings: ["../../img/stars.svg"],
        ratingNumber: "65",
        isFavorite: false,
        isAddToCard: false
    },
]

export const OurProduct: Product[] = [
    {
        id: 10,
        name: "Breed Dry Dog Food",
        imgLink: "../../img/corm.png",
        currentPrice: 100,
        ratings: ["../../img/Three Star.svg"],
        ratingNumber: "35",
        isFavorite: false,
        isAddToCard: false,
    },
    {
        id: 11,
        name: "CANON EOS DSLR Camera",
        imgLink: "../../img/camera.png",
        currentPrice: 360,
        ratings: ["../../img/Three Star.svg"],
        ratingNumber: "95",
        isFavorite: false,
        isAddToCard: false
    },
    {
        id: 12,
        name: "ASUS FHD Gaming Laptop",
        imgLink: "../../img/laptop.png",
        currentPrice: 700,
        ratings: ["../../img/stars.svg"],
        ratingNumber: "325",
        isFavorite: false,
        isAddToCard: false
    },
    {
        id: 13,
        name: "Curology Product Set ",
        imgLink: "../../img/curology.png",
        currentPrice: 500,
        ratings: ["../../img/Four Star.svg"],
        ratingNumber: "145",
        isFavorite: false,
        isAddToCard: false
    },
    {
        id: 14,
        name: "Kids Electric Car",
        imgLink: "../../img/car.png",
        currentPrice: 960,
        ratings: ["../../img/stars.svg"],
        ratingNumber: "65",
        isFavorite: false,
        isAddToCard: false,
        isNew: true,
        colors: ["rgba(251, 19, 20, 1)", "rgba(219, 68, 68, 1)"]
    },
    {
        id: 15,
        name: "Jr. Zoom Soccer Cleats",
        imgLink: "../../img/boots.png",
        currentPrice: 1160,
        ratings: ["../../img/stars.svg"],
        ratingNumber: "35",
        isFavorite: false,
        isAddToCard: false,
        colors: ["rgba(238, 255, 97, 1)", "rgba(219, 68, 68, 1)"]
    },
    {
        id: 16,
        name: "GP11 Shooter USB Gamepad",
        imgLink: "../../img/xbox console.png",
        currentPrice: 660,
        ratings: ["../../img/Four Half Star.svg"],
        ratingNumber: "55",
        isFavorite: false,
        isAddToCard: false,
        isNew: true,
        colors: ["rgba(0, 0, 0, 1)", "rgba(219, 68, 68, 1)"]
    },
    {
        id: 17,
        name: "Quilted Satin Jacket",
        imgLink: "../../img/jacket.png",
        currentPrice: 660,
        ratings: ["../../img/Four Star.svg"],
        ratingNumber: "55",
        isFavorite: false,
        isAddToCard: false,
        colors: ["rgba(24, 74, 72, 1)", "rgba(219, 68, 68, 1)"]
    },
]

export const JustForYouProducts: Product[] = [
    FlashProduct[0],
    FlashProduct[1],
    FlashProduct[2],
    OurProduct[2],
]