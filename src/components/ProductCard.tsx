import { IProduct } from "../interfaces";
import { txtSlicer } from "../utils/functions";
import CircleColor from "./CircleColor";
import Image from "./Image";
import Button from "./UI/Button";

interface Iprop {
  product: IProduct;
  setProductToEdit: (product: IProduct) => void;
  openEdit: () => void;
  idx: number;
  setProductToEditidx: (value: number) => void;
  openConfirm: () => void;
}
const ProductCard = ({
  product,
  setProductToEdit,
  openEdit,
  setProductToEditidx,
  idx,
  openConfirm,
}: Iprop) => {
  const { title, descriptipn, imageUrl, price, colors, category } = product;
  const renderProductColor = colors.map((color) => (
    <CircleColor key={color} color={color} />
  ));

  function onEdit() {
    setProductToEdit(product);
    openEdit();

    setProductToEditidx(idx);
  }

  function onDelete() {
    setProductToEdit(product);
    openConfirm();
  }

  return (
    <>
      <div className="max-w-sm md:max-w-lg mx-auto border rounded-md flex flex-col p-2">
        <Image imageUrl={imageUrl} alt={title} className="rounded-md mb-2" />
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-xs text-gray-500 break-words">
          {txtSlicer(descriptipn)}
        </p>
        <div className="flex space-x-1 flex-wrap items-center">
          {renderProductColor}
        </div>
        <div className="flex items-center justify-between">
          <span className="text-lg text-indigo-600 font-semibold">{price}</span>

          <Image
            imageUrl={category.imageUrl}
            alt={category.name}
            className="w-10 h-10 rounded-full object-bottom"
          />
        </div>

        <div className="flex items-center justify-between space-x-2 mt-5">
          <Button
            className="bg-indigo-700 hover:bg-indigo-800"
            width="w-full"
            onClick={onEdit}
          >
            Edit
          </Button>
          <Button
            className="bg-red-700 hover:bg-red-800"
            width="w-full"
            onClick={onDelete}
          >
            Delete
          </Button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
