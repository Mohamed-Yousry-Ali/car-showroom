import { v4 as uuid } from "uuid";
import { IProduct } from "../interfaces";
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
      name: "MBW ",
      imageUrl:
        "https://media.hatla2eestatic.com/uploads/car/2024/07/31/6604125/full_up_a16b853d67dc8549506cc2a568ea58dd.jpg",
    },
  },
];
