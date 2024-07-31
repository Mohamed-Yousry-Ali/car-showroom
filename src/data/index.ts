import { v4 as uuid } from "uuid";
import { IFormInput, IProduct } from "../interfaces";

export const ProductList: IProduct[] = [
  {
    id: uuid(),
    title: "HYUNDAI ELANTRA CN7",
    descriptipn:
      "HYUNDAI ELANTRA CN7 NEW CASH OR INSTALLMENT Elantra CN7 2024 A/T / BLACK DIAMOND",
    imageUrl:
      "https://media.hatla2eestatic.com/uploads/ncarmodel/12293/big-up_8e6ca48eaa051a4dc1821b104a12c89e.png",
    price: "1,300,000 EGP",
    colors: ["blue", "red"],
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
    colors: ["black", "gray"],
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
    colors: ["Yellow", "red"],
    category: {
      name: "BMW ",
      imageUrl:
        "https://media.hatla2eestatic.com/uploads/car/2024/07/31/6604125/full_up_a16b853d67dc8549506cc2a568ea58dd.jpg",
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
    colors: ["gray", "red"],
    category: {
      name: "KIA ",
      imageUrl:
        "https://media.hatla2eestatic.com/uploads/car/2024/07/31/6604511/full_up_c5c8497b6e3be098794c39601d26a658.jpg",
    },
  },
  {
    id: uuid(),
    title: "HYUNDAI ELANTRA CN7",
    descriptipn:
      "HYUNDAI ELANTRA CN7 NEW CASH OR INSTALLMENT Elantra CN7 2024 A/T / BLACK DIAMOND",
    imageUrl:
      "https://media.hatla2eestatic.com/uploads/ncarmodel/12293/big-up_8e6ca48eaa051a4dc1821b104a12c89e.png",
    price: "1,300,000 EGP",
    colors: ["blue", "red"],
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
    colors: ["black", "gray"],
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
    colors: ["Yellow", "red"],
    category: {
      name: "BMW ",
      imageUrl:
        "https://media.hatla2eestatic.com/uploads/car/2024/07/31/6604125/full_up_a16b853d67dc8549506cc2a568ea58dd.jpg",
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
    colors: ["gray", "red"],
    category: {
      name: "KIA ",
      imageUrl:
        "https://media.hatla2eestatic.com/uploads/car/2024/07/31/6604511/full_up_c5c8497b6e3be098794c39601d26a658.jpg",
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
    id: "description",
    name: "description",
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
