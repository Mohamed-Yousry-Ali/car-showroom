import { ChangeEvent, FormEvent, useState } from "react";
import ProductCard from "./components/ProductCard";
import { categories, colors, formInputList, ProductList } from "./data";
import Modal from "./components/UI/Modal";
import Button from "./components/UI/Button";
import Input from "./components/UI/Input";
import { IProduct } from "./interfaces";
import { productValidations } from "./validations";
import ErrorMsg from "./components/ErrorMsg";
import CircleColor from "./components/CircleColor";
import { v4 as uuid } from "uuid";
import SelectM from "./components/UI/SelectM";
import { productName } from "./type";

const App = () => {
  const defaultProductObj = {
    title: "",
    descriptipn: "",
    imageUrl: "",
    price: "",
    colors: [],
    category: {
      name: "",
      imageUrl: "",
    },
  };
  /* State */
  const [products, setProducts] = useState<IProduct[]>(ProductList);
  const [product, setProduct] = useState<IProduct>(defaultProductObj);
  const [productToEdit, setProductToEdit] =
    useState<IProduct>(defaultProductObj);
  const [productToEditidx, setProductToEditidx] = useState<number>(0);
  const [errors, setErrors] = useState({
    title: "",
    descriptipn: "",
    imageUrl: "",
    price: "",
  });
  const [tempColors, setTemoColors] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  /* Handler */
  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }
  function openEdit() {
    setIsOpenEdit(true);
  }

  function closeEdit() {
    setIsOpenEdit(false);
  }
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const onChangeEditHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setProductToEdit({
      ...productToEdit,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const submitHandler = (event: FormEvent<HTMLFormElement>): void => {
    const { title, descriptipn, imageUrl, price } = product;
    event.preventDefault();
    const errors = productValidations({
      title,
      descriptipn,
      imageUrl,
      price,
    });
    console.log(errors);
    const hasErrorMsg =
      Object.values(errors).some((value) => value === "") &&
      Object.values(errors).every((value) => value === "");
    if (!hasErrorMsg) {
      setErrors(errors);
      return;
    }
    setProducts((prev) => [
      {
        ...product,
        id: uuid(),
        colors: tempColors,
        category: selectedCategory,
      },
      ...prev,
    ]);
    setProduct(defaultProductObj);
    setTemoColors([]);
    close();
  };

  const submitEditHandler = (event: FormEvent<HTMLFormElement>): void => {
    const { title, descriptipn, imageUrl, price } = productToEdit;
    event.preventDefault();
    const errors = productValidations({
      title,
      descriptipn,
      imageUrl,
      price,
    });
    console.log(errors);
    const hasErrorMsg =
      Object.values(errors).some((value) => value === "") &&
      Object.values(errors).every((value) => value === "");
    if (!hasErrorMsg) {
      setErrors(errors);
      return;
    }
    const updateProducts = [...products];
    updateProducts[productToEditidx] = {
      ...productToEdit,
      colors: tempColors.concat(productToEdit.colors),
    };

    setProducts(updateProducts);

    setProductToEdit(defaultProductObj);
    setTemoColors([]);
    closeEdit();
  };

  const onCancel = () => {
    setProduct(defaultProductObj);
    close();
  };
  /* Render */
  const renderProductList = products.map((product, idx) => (
    <ProductCard
      key={product.id}
      product={product}
      setProductToEdit={setProductToEdit}
      openEdit={openEdit}
      idx={idx}
      setProductToEditidx={setProductToEditidx}
    />
  ));

  const renderInputForm = formInputList.map((input) => (
    <div className="flex flex-col" key={input.id}>
      <label
        htmlFor={input.id}
        className="mb-[2px] text-sm font-medium text-gray-700"
      >
        {input.label}
      </label>
      <Input
        type="text"
        id={input.id}
        name={input.name}
        value={product[input.name]}
        onChange={onChangeHandler}
      />
      <ErrorMsg msg={errors[input.name]} />
    </div>
  ));

  const renderProductColor = colors.map((color) => (
    <CircleColor
      key={color}
      color={color}
      onClick={() => {
        if (tempColors.includes(color)) {
          setTemoColors((prev) => prev.filter((item) => item !== color));
          return;
        }
        if (productToEdit.colors.includes(color)) {
          setTemoColors((prev) => prev.filter((item) => item !== color));
          return;
        }
        setTemoColors((prev) => [...prev, color]);
      }}
    />
  ));

  const renderProductEditWithErrorMsg = (
    id: string,
    label: string,
    name: productName
  ) => {
    return (
      <div className="flex flex-col">
        <label
          htmlFor={id}
          className="mb-[2px] text-sm font-medium text-gray-700"
        >
          {label}
        </label>
        <Input
          type="text"
          id={id}
          name={name}
          value={productToEdit[name]}
          onChange={onChangeEditHandler}
        />
        <ErrorMsg msg={errors[name]} />
      </div>
    );
  };
  return (
    <main className="container">
      <Button className="bg-indigo-700 hover:bg-indigo-800" onClick={open}>
        Add
      </Button>
      <div className="m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 rounded-md">
        {renderProductList}
      </div>

      {/* ADD Modal */}
      <Modal isOpen={isOpen} close={close} title="Add A New Product">
        <form className="space-y-3" onSubmit={submitHandler}>
          {renderInputForm}
          <SelectM
            selected={selectedCategory}
            setSelected={setSelectedCategory}
          />
          <div className="flex space-x-1 flex-wrap items-center">
            {renderProductColor}
          </div>
          <div className="flex space-x-1 flex-wrap items-center">
            {tempColors.map((color) => (
              <span
                key={color}
                className="p-1 mr-1 mb-1 text-sm rounded-md text-white"
                style={{ backgroundColor: color }}
              >
                {color}
              </span>
            ))}
          </div>

          <div className="flex items-center space-x-3">
            <Button className="bg-indigo-700 hover:bg-indigo-800">
              Submit
            </Button>
            <Button
              className="bg-gray-700 hover:bg-gray-800"
              onClick={onCancel}
            >
              Cancel
            </Button>
          </div>
        </form>
      </Modal>

      {/* Edit Modal */}
      <Modal isOpen={isOpenEdit} close={closeEdit} title="Edit Product">
        <form className="space-y-3" onSubmit={submitEditHandler}>
          {renderProductEditWithErrorMsg("title", "Poduct Title", "title")}

          {renderProductEditWithErrorMsg(
            "descriptipn",
            "Product Description",
            "descriptipn"
          )}

          {renderProductEditWithErrorMsg(
            "imageUrl",
            "Product Image",
            "imageUrl"
          )}

          {renderProductEditWithErrorMsg("price", "Product Price", "price")}
          <SelectM
            selected={productToEdit.category}
            setSelected={(value) =>
              setProductToEdit({ ...productToEdit, category: value })
            }
          />

          <div className="flex space-x-1 flex-wrap items-center">
            {renderProductColor}
          </div>
          <div className="flex space-x-1 flex-wrap items-center">
            {tempColors.concat(productToEdit.colors).map((color) => (
              <span
                key={color}
                className="p-1 mr-1 mb-1 text-sm rounded-md text-white"
                style={{ backgroundColor: color }}
              >
                {color}
              </span>
            ))}
          </div>

          <div className="flex items-center space-x-3">
            <Button className="bg-indigo-700 hover:bg-indigo-800">
              Submit
            </Button>
            <Button
              className="bg-gray-700 hover:bg-gray-800"
              onClick={onCancel}
            >
              Cancel
            </Button>
          </div>
        </form>
      </Modal>
    </main>
  );
};

export default App;
