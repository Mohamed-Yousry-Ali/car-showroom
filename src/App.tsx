import { ChangeEvent, FormEvent, useState } from "react";
import ProductCard from "./components/ProductCard";
import { formInputList, ProductList } from "./data";
import Modal from "./components/UI/Modal";
import Button from "./components/UI/Button";
import Input from "./components/UI/Input";
import { IProduct } from "./interfaces";
import { productValidations } from "./validations";
import ErrorMsg from "./components/ErrorMsg";

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
  const [product, setProduct] = useState<IProduct>(defaultProductObj);
  const [errors, setErrors] = useState({
    title: "",
    descriptipn: "",
    imageUrl: "",
    price: "",
  });
  const [isOpen, setIsOpen] = useState(false);

  /* Handler */
  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
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
    } else {
      console.log("send data");
    }
  };

  const onCancel = () => {
    setProduct(defaultProductObj);
    close();
  };
  /* Render */
  const renderProductList = ProductList.map((product) => (
    <ProductCard key={product.id} product={product} />
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

  return (
    <main className="container">
      <Button className="bg-indigo-700 hover:bg-indigo-800" onClick={open}>
        Add
      </Button>
      <div className="m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 rounded-md">
        {renderProductList}
      </div>

      <Modal isOpen={isOpen} close={close} title="Add A New Product">
        <form className="space-y-3" onSubmit={submitHandler}>
          {renderInputForm}

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
