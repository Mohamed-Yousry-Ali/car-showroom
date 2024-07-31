import { useState } from "react";
import ProductCard from "./components/ProductCard";
import { ProductList } from "./data";
import Modal from "./components/UI/Modal";
import Button from "./components/UI/Button";

const App = () => {
  /* State */
  const [isOpen, setIsOpen] = useState(false);

  /* Handler */
  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  /* Render */
  const renderProductList = ProductList.map((product) => (
    <ProductCard key={product.id} product={product} />
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
        <div className="flex items-center space-x-3">
          <Button className="bg-indigo-700 hover:bg-indigo-800">Submit</Button>
          <Button className="bg-gray-700 hover:bg-gray-800">Cancel</Button>
        </div>
      </Modal>
    </main>
  );
};

export default App;
