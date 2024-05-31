import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const shoe = useLoaderData();

  const { brand, description, image_url, price, title } = shoe;

  return (
    <div className="flex flex-col items-center mx-auto  max-w-5xl">
      <h1 className="text-5xl text-center font-bold mb-8">{title}</h1>
<div>

      <img className="h-[600px] mb-8" src={image_url} alt="product image" />
</div>

      <div className="flex gap-5 items-center mb-4">
        <p className="text-xl font-semibold badge badge-info badge-outline px-4">
          Brand
        </p>
        <h3 className="text-2xl font-semibold ">{brand}</h3>
      </div>
      <div className="flex gap-5 items-center ">
        <p className="text-xl font-semibold badge badge-secondary badge-outline px-4">
          Price
        </p>
        <h3 className="text-2xl font-semibold ">$ {price} </h3>
      </div>

      <p className="text-lg font-light mb-4">{description}</p>
    </div>
  );
};

export default ProductDetails;

