import Image from "./Image";

const ProductCard = () => {
  return (
    <>
      <div className="border rounded-md flex flex-col p-2">
        <Image
          imageUrl="https://media.hatla2eestatic.com/uploads/ncarmodel/9849/thumbnail-up_2b2f6d3671b9cdae627fe1e8656a8e18.png"
          alt="Product Name"
          className="rounded-md mb-2"
        />
        <h3>Hyundai Elantra HD 2023</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid fuga
          inventore quibusdam optio distinctio quo labore ipsum quis? Quidem
          sunt distinctio saepe dolore, sapiente ullam reprehenderit et delectus
          amet aperiam?
        </p>
        <div className="flex space-x-2 my-4 items-center">
          <span className="w-5 h-5 bg-indigo-600 rounded-full cursor-pointer" />
          <span className="w-5 h-5 bg-yellow-600 rounded-full cursor-pointer" />
          <span className="w-5 h-5 bg-red-600 rounded-full cursor-pointer" />
        </div>
        <div className="flex items-center justify-between">
          <span>$710,000</span>

          <Image
            imageUrl="https://media.hatla2eestatic.com/uploads/ncarmodel/9849/thumbnail-up_2b2f6d3671b9cdae627fe1e8656a8e18.png"
            alt="Product Name"
            className="w-10 h-10 rounded-full object-bottom"
          />
        </div>
        <div className="flex items-center justify-between space-x-2 mt-5">
          <button className="bg-indigo-700 rounded-md w-full text-white">
            Edit
          </button>
          <button className="bg-red-700 rounded-md w-full text-white">
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
