import { IProduct } from "../interfaces";
import { txtSlicer } from "../utils/functions";
import Image from "./Image";
import Button from "./UI/Button";

interface Iprop {
  product: IProduct;
}
const ProductCard = ({ product }: Iprop) => {
  return (
    <>
      <div className="max-w-sm md:max-w-lg mx-auto border rounded-md flex flex-col p-2">
        <Image
          imageUrl={product.imageUrl}
          alt={product.title}
          className="rounded-md mb-2"
        />
        <h2 className="text-lg font-semibold">{product.title}</h2>
        <p className="text-xs text-gray-500 break-words">
          {txtSlicer(product.descriptipn)}
        </p>
        <div className="flex space-x-2 my-4 items-center">
          <span className="w-5 h-5 bg-indigo-600 rounded-full cursor-pointer" />
          <span className="w-5 h-5 bg-yellow-600 rounded-full cursor-pointer" />
          <span className="w-5 h-5 bg-red-600 rounded-full cursor-pointer" />
        </div>
        <div className="flex items-center justify-between">
          <span className="text-lg text-indigo-600 font-semibold">
            {product.price}
          </span>

          <Image
            imageUrl={product.category.imageUrl}
            alt={product.category.name}
            className="w-10 h-10 rounded-full object-bottom"
          />
        </div>

        <div className="flex items-center justify-between space-x-2 mt-5">
          <Button className="bg-indigo-700 hover:bg-indigo-800" width="w-full">
            Edit
          </Button>
          <Button className="bg-red-700 hover:bg-red-800" width="w-full">
            Delete
          </Button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
