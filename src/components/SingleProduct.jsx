import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const SingleProduct = ({ shoe }) => {
  const { id, title, brand, price, description, image_url } = shoe;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
    {/* replace image bg as color */}



      <figure className="bg-blue-500">
        <img className="" src={image_url} alt="Shoes" />
      </figure>
      <div className="card-body py-6">
        <div className="flex justify-between">
          <h2 className="card-title ">{title}</h2>
          <h3 className="text-error font-bold text-xl"> ${price}</h3>
        </div>
        <h6 className="text-md  badge badge-outline badge-accent px-3 font-semibold">{brand}</h6>

        <p className="font-extralight text-gray-500">
          {description.slice(0, 35)}
        </p>
        <div className="flex justify-between mt-2">
          <button className="btn btn-error text-white">Add To Cart</button>
          <button className="btn btn-info text-white">
            <Link to={`/products/${id}`}>See details</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
