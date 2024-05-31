/* eslint-disable react/prop-types */
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const SingleProductCardDashboard = ({ shoe, onDelete }) => {
  const { _id, title, brand, price, description, image_url } = shoe;

  const handleDelete = async () => {
    await fetch(`http://localhost:5000/shoes/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          toast.success("Successfully Deleted!");
          onDelete(_id);
        }
      });
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image_url} alt="Shoes" />
      </figure>
      <div className="card-body">
        <div className="flex justify-between">
          <h2 className="card-title ">{title}</h2>
          <h3 className="text-error font-bold text-xl"> ${price}</h3>
        </div>
        <h6 className="text-md  badge badge-outline badge-accent px-3 font-semibold">
          {brand}
        </h6>

        <p className="font-extralight text-gray-500">
          {description.slice(0, 35)}
        </p>
        <div className="flex justify-between mt-2">
          <button className="btn btn-sm btn-info ">
            <Link to={`/products/${_id}`}>See details</Link>
          </button>
          <div className="flex gap-2">
            <button className="btn btn-sm btn-outline btn-success">
              <Link to={`edit/${_id}`}>Edit</Link>
            </button>
            <button
              onClick={handleDelete}
              className="btn btn-sm btn-error text-white"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductCardDashboard;
