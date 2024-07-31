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
