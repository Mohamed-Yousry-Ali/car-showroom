import { v4 as uuid } from "uuid";
import { ICategory, IFormInput, IProduct } from "../interfaces";

export const ProductList: IProduct[] = [
  {
    id: uuid(),
    title: "HYUNDAI ELANTRA CN7",
    descriptipn:
      "HYUNDAI ELANTRA CN7 NEW CASH OR INSTALLMENT Elantra CN7 2024 A/T / BLACK DIAMOND",
    imageUrl:
      "https://media.hatla2eestatic.com/uploads/ncarmodel/12293/big-up_8e6ca48eaa051a4dc1821b104a12c89e.png",
    price: "1,300,000 EGP",
    colors: ["#A31ACB", "#FF6E31", "#3C2A21"],
    category: {
      name: "HYUNDAI ",
      imageUrl:
        "https://media.hatla2eestatic.com/uploads/ncarmodel/12293/big-up_8e6ca48eaa051a4dc1821b104a12c89e.png",
    },
  },
  {
    id: uuid(),
    title: "Hyundai Tucson",
    descriptipn:
      "Used Hyundai Tucson Turbo GDI 2021 For Sale Sheraton Sell your car faster than ever before",
    imageUrl:
      "https://media.hatla2eestatic.com/uploads/car/2024/07/27/6597029/full_up_358171ef9f6f5223d61535e26da1bb18.jpg",
    price: "1,500,000 EGP",
    colors: ["#A31ACB", "#CB1C8D", "#645CBB", "#1F8A70", "#820000", "#FF0032"],
    category: {
      name: "HYUNDAI ",
      imageUrl:
        "https://media.hatla2eestatic.com/uploads/ncarmodel/12293/big-up_8e6ca48eaa051a4dc1821b104a12c89e.png",
    },
  },
  {
    id: uuid(),
    title: "BMW X5",
    descriptipn:
      "Used BMW X5 M 2023 For Sale Tagamo3 - New Cairo Sell your car faster than ever before",
    imageUrl:
      "https://media.hatla2eestatic.com/uploads/car/2024/07/31/6604125/full_up_a16b853d67dc8549506cc2a568ea58dd.jpg",
    price: "8,100,000 EGP",
    colors: ["#A31ACB", "#FF6E31", "#3C2A21"],
    category: {
      name: "BMW ",
      imageUrl:
        "https://media.hatla2eestatic.com/uploads/car/2024/07/31/6604125/full_up_a16b853d67dc8549506cc2a568ea58dd.jpg",
    },
  },
  {
    id: uuid(),
    title: "Skoda Octavia A8 2024",
    descriptipn:
      "Used Skoda Octavia A8 2024 for sale 6 October faster than ever before and more beauty",
    imageUrl:
      "https://media.hatla2eestatic.com/uploads/car/2024/07/24/6590898/full_up_3de9fc115f73ae36b80cb9b37d4ca4fe.jpg",
    price: "1,800,000 EGP",
    colors: ["#A31ACB", "#1F8A70", "#820000", "#FF0032"],
    category: {
      name: "Skoda ",
      imageUrl:
        "https://media.hatla2eestatic.com/uploads/car/2024/07/24/6590898/full_up_3de9fc115f73ae36b80cb9b37d4ca4fe.jpg",
    },
  },
  {
    id: uuid(),
    title: "Mercedes C 200 2023",
    descriptipn:
      "Imported used Mercedes C 200 2023 for sale Heliopolis BLACK DIAMOND",
    imageUrl:
      "https://media.hatla2eestatic.com/uploads/car/2024/07/31/6604899/full_up_eda3029b1585011ed3a82db7ffe3603b.jpg",
    price: "2,700,000 EGP",
    colors: [
      "#A31ACB",
      "#FF6E31",
      "#3C2A21",
      "#6C4AB6",
      "#CB1C8D",
      "#000000",
      "#645CBB",
      "#1F8A70",
      "#820000",
      "#FF0032",
    ],
    category: {
      name: "Mercedes ",
      imageUrl:
        "https://media.hatla2eestatic.com/uploads/car/2024/07/31/6604899/full_up_eda3029b1585011ed3a82db7ffe3603b.jpg",
    },
  },
  {
    id: uuid(),
    title: "Mercedes C 200 AMG",
    descriptipn:
      "Imported used Mercedes C 200 AMG 2023 for sale Heliopolis Sell your car faster than ever before",
    imageUrl:
      "https://media.hatla2eestatic.com/uploads/car/2024/07/31/6604340/full_up_14546d2b61e4667adc4081677d64f43a.jpg",
    price: "3,150,000 EGP",
    colors: ["#A31ACB", "#FF6E31", "#000000", "#645CBB", "#FF0032"],
    category: {
      name: "Mercedes ",
      imageUrl:
        "https://media.hatla2eestatic.com/uploads/car/2024/07/31/6604340/full_up_14546d2b61e4667adc4081677d64f43a.jpg",
    },
  },
  {
    id: uuid(),
    title: "Mitsubishi Eclipse",
    descriptipn:
      "Used BMW X5 M 2023 For Sale Tagamo3 - New Cairo Sell your car faster than ever before",
    imageUrl:
      "https://media.hatla2eestatic.com/uploads/car/2024/07/28/6597548/full_up_a182491f8be0809db41e9369e42af930.jpg",
    price: "1,730,000 EGP",
    colors: ["#A31ACB", "#645CBB", "#820000", "#FF0032"],
    category: {
      name: "Mitsubishi",
      imageUrl:
        "https://media.hatla2eestatic.com/uploads/car/2024/07/28/6597548/full_up_a182491f8be0809db41e9369e42af930.jpg",
    },
  },
  {
    id: uuid(),
    title: "Kia Carens 2014",
    descriptipn:
      "Used Kia Carens 2014 for sale Nasr city faster than ever before and more beauty",
    imageUrl:
      "https://media.hatla2eestatic.com/uploads/car/2024/07/31/6604511/full_up_c5c8497b6e3be098794c39601d26a658.jpg",
    price: "710,000 EGP",
    colors: ["#1F8A70", "#820000", "#FF0032"],
    category: {
      name: "KIA ",
      imageUrl:
        "https://media.hatla2eestatic.com/uploads/car/2024/07/24/6590898/full_up_3de9fc115f73ae36b80cb9b37d4ca4fe.jpg",
    },
  },
];

export const formInputList: IFormInput[] = [
  {
    id: "title",
    name: "title",
    label: "Product Title",
    type: "text",
  },
  {
    id: "descriptipn",
    name: "descriptipn",
    label: "Description",
    type: "text",
  },
  {
    id: "image",
    name: "imageUrl",
    label: "Product Image",
    type: "text",
  },
  {
    id: "price",
    name: "price",
    label: "Product price",
    type: "text",
  },
];

export const colors: string[] = [
  "#a855f7",
  "#2563eb",
  "#842D2C5",
  "#13005A",
  "#A31ACB",
  "#FF6E31",
  "#3C2A21",
  "#6C4AB6",
  "#CB1C8D",
  "#000000",
  "#645CBB",
  "#1F8A70",
  "#820000",
  "#FF0032",
];

export const categories: ICategory[] = [
  {
    id: uuid(),
    name: "Mitsubishi",
    imageUrl:
      "https://media.hatla2eestatic.com/uploads/car/2024/07/28/6597548/full_up_a182491f8be0809db41e9369e42af930.jpg",
  },
  {
    id: uuid(),
    name: "HYUNDAI ",
    imageUrl:
      "https://media.hatla2eestatic.com/uploads/ncarmodel/12293/big-up_8e6ca48eaa051a4dc1821b104a12c89e.png",
  },
  {
    id: uuid(),
    name: "Skoda ",
    imageUrl:
      "https://media.hatla2eestatic.com/uploads/car/2024/07/24/6590898/full_up_3de9fc115f73ae36b80cb9b37d4ca4fe.jpg",
  },
  {
    id: uuid(),
    name: "Mercedes ",
    imageUrl:
      "https://media.hatla2eestatic.com/uploads/car/2024/07/31/6604899/full_up_eda3029b1585011ed3a82db7ffe3603b.jpg",
  },
  {
    id: uuid(),
    name: "BMW ",
    imageUrl:
      "https://media.hatla2eestatic.com/uploads/car/2024/07/31/6604125/full_up_a16b853d67dc8549506cc2a568ea58dd.jpg",
  },
  {
    id: uuid(),
    name: "KIA ",
    imageUrl:
      "https://media.hatla2eestatic.com/uploads/car/2024/07/24/6590898/full_up_3de9fc115f73ae36b80cb9b37d4ca4fe.jpg",
  },
];
