import { useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";

const EditProducts = () => {
  const shoe = useLoaderData();

  const [title, setTitle] = useState(shoe.title);
  const [price, setPrice] = useState(shoe.price);
  const [brand, setBrand] = useState(shoe.brand);
  const [id, setId] = useState(shoe.id);
  const [description, setDescription] = useState(shoe.description);
  const [image_url, setImageURL] = useState(shoe.image_url);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const form = e.target;
    const id = form.id.value;
    const title = form.title.value;
    const brand = form.brand.value;
    const price = form.price.value;
    const description = form.description.value;
    const image_url = form.image_url.value;

    const data = { id, title, brand, price, description, image_url };

    await fetch(`http://localhost:3000/shoes/${shoe.id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Successfully Edited!");
        navigate("/dashboard/all-products", { replace: true });
      });
  };

  return (
    <div className="bg-white  rounded-lg shadow-lg w-full max-w-xl my-10 p-8 mx-auto">
      <h1 className="text-3xl font-bold text-center mb-4">Edit Product</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="input input-bordered w-full"
          type="text"
          name="title"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="input input-bordered w-full"
          type="text"
          name="brand"
          placeholder="Brand"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        />
        <input
          className="input input-bordered w-full"
          type="number"
          name="price"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          className="input input-bordered w-full"
          type="text"
          name="description"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          className="input input-bordered w-full"
          type="text"
          name="image_url"
          placeholder="Image URL"
          value={image_url}
          onChange={(e) => setImageURL(e.target.value)}
        />
        <input
          className="input input-bordered w-full"
          type="text"
          name="id"
          placeholder="ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <input
          className="btn btn-primary w-full"
          type="submit"
          value="Update Product"
        />
      </form>
    </div>
  );
};

export default EditProducts;
