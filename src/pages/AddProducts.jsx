import { useState } from "react";
import toast from "react-hot-toast";

const AddProducts = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState("");
  const [description, setDescription] = useState("");
  const [image_url, setImageURL] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { title, brand, price, description, image_url };

    await fetch("http://localhost:5000/shoes", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast.success("Successfully Added Shoe!");
          setTitle("");
          setBrand("");
          setPrice("");
          setDescription("");
          setImageURL("");
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="bg-white  rounded-lg shadow-lg w-full max-w-xl my-10 p-8 mx-auto">
      <h1 className="text-3xl font-bold text-center mb-4">Add Product</h1>

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
          className="btn btn-primary w-full"
          type="submit"
          value="Add Product"
        />
      </form>
    </div>
  );
};

export default AddProducts;

// import toast from "react-hot-toast";

// const AddProducts = () => {
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const form = e.target;
//     const id = form.id.value;
//     const title = form.title.value;
//     const brand = form.brand.value;
//     const price = form.price.value;
//     const description = form.description.value;
//     const image_url = form.image_url.value;

//     const data = { id, title, brand, price, description, image_url };

//     await fetch("http://localhost:3000/shoes", {
//       method: "POST",
//       headers: {
//         "Content-type": "application/json",
//       },
//       body: JSON.stringify(data),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         toast.success("Successfully Added Shoe!");
//         form.reset();
//       })
//       .catch((error) => {
//         toast.error(error.message);
//       });
//   };

//   return (
//     <div>
//       <h1 className="text-5xl font-bold text-center">Add a Product</h1>

//       <div className="my-16">
//         <form onSubmit={handleSubmit}>
//           <div className="mt-2">
//             <input
//               className="bg-gray-100 p-4 w-full border border-black rounded-lg"
//               type="text"
//               name="title"
//               placeholder="Title"
//             />
//           </div>
//           <div className="mt-2">
//             <input
//               className="bg-gray-100 p-4 w-full border border-black rounded-lg"
//               type="text"
//               name="brand"
//               placeholder="Brand"
//             />
//           </div>
//           <div className="mt-2">
//             <input
//               className="bg-gray-100 p-4 w-full border border-black rounded-lg"
//               type="number"
//               name="price"
//               placeholder="Price"
//             />
//           </div>
//           <div className="mt-2">
//             <input
//               className="bg-gray-100 p-4 w-full border border-black rounded-lg"
//               type="text"
//               name="description"
//               placeholder="Description"
//             />
//           </div>
//           <div className="mt-2">
//             <input
//               className="bg-gray-100 p-4 w-full border border-black rounded-lg"
//               type="text"
//               name="image_url"
//               placeholder="Image URL"
//             />
//           </div>
//           <div className="mt-2">
//             <input
//               className="bg-gray-100 p-4 w-full border border-black rounded-lg"
//               type="text"
//               name="id"
//               placeholder="ID"
//             />
//           </div>
//           <div className="mt-2 flex justify-center items-center">
//             <input
//               className="btn mt-4 w-full bg-red-500 text-white p-4"
//               type="submit"
//               value="Add product"
//             />
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddProducts;
