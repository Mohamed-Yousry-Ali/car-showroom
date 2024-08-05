import { productName } from "../type";

export interface IProduct {
  id?: string | undefined;
  title: string;
  descriptipn: string;
  imageUrl: string;
  price: string;
  colors: string[];
  category: {
    name: string;
    imageUrl: string;
  };
}

export interface IFormInput {
  id: string;
  name: productName;
  label: string;
  type: string;
}

export interface ICategory {
  id: string;
  name: string;
  imageUrl: string;
}
