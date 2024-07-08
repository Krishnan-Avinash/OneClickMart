import { useAuth0 } from "@auth0/auth0-react";
import React, { useState } from "react";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";

const Add = () => {
  const { isAuthenticated } = useAuth0();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [image, setImage] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", Number(price));
    formData.append("category", category);
    formData.append("available", Number(quantity));
    formData.append("mainImg", image);

    const response = await axios.post(
      "http://localhost:8080/api/oneClickMart/admin/addProduct",
      formData
    );
    if (response.data.success) {
      toast.success("Product added");
      setName("");
      setDescription("");
      setPrice("");
      setCategory("");
      setQuantity("");
      setImage(false);
    }
  };

  if (isAuthenticated) {
    return (
      <div className="add-product">
        <h1>Add a New Product</h1>
        <form onSubmit={submitHandler}>
          <table>
            <tr>
              <td>
                <h3>Name</h3>
              </td>
              <td>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <h3>Description</h3>
              </td>
              <td>
                <textarea
                  name="desc"
                  id=""
                  placeholder="Product Description"
                  rows={4}
                  cols={30}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </td>
            </tr>
            <tr>
              <td>
                <h3>Price</h3>
              </td>
              <td>
                <input
                  type="number"
                  name="price"
                  placeholder="Price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <h3>Upload Image</h3>
              </td>
              <td>
                <input
                  type="file"
                  name="mainImg"
                  id=""
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </td>
            </tr>
            <tr>
              <td>
                <h3>Category</h3>
              </td>
              <td>
                <select
                  name="category"
                  id=""
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="Sale">Sale</option>
                  <option value="Men Clothing">Men Clothing</option>
                  <option value="Women Clothing">Women Clothing</option>
                  <option value="Kids Clothing">Kids Clothing</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Home & Lifestyle">Home & Lifestyle</option>
                  <option value="Kids Toys">Kids Toys</option>
                  <option value="Groceries & Pets">Groceries & Pets</option>
                  <option value="Health & Beauty">Health & Beauty</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <h3>Quantity</h3>
              </td>
              <td>
                <input
                  type="number"
                  placeholder="Quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </td>
            </tr>
            <tr style={{ textAlign: "center" }}>
              <td>
                <button type="submit">Submit</button>
              </td>
            </tr>
          </table>
        </form>
        <ToastContainer />
      </div>
    );
  } else {
    return <h1>Loading....</h1>;
  }
};
export default Add;
