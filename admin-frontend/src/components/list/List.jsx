import React, { useEffect, useState } from "react";

import axios from "axios";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth0 } from "@auth0/auth0-react";

const List = () => {
  const { isAuthenticated } = useAuth0();
  const [newVal, setNewVal] = useState("");

  const [data, setData] = useState([]);
  const getData = async () => {
    const response = await axios.get(
      "http://localhost:8080/api/oneClickMart/admin/getProduct"
    );
    if (response.data.success) {
      setData(response.data.data);
      toast.success("Good to go");
    } else {
      toast.error("Couldn't fetch data");
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const submitHandler = async (e, item) => {
    e.preventDefault();
    console.log("Data: ", item);
    console.log("Value: ", newVal);
    const response = await axios.patch(
      "http://localhost:8080/api/oneClickMart/admin/updateProduct",
      {
        _id: item._id,
        newAvailable: Number(newVal),
      }
    );
    console.log("Response after updation: ", response);
    if (response.data.success) {
      getData();
      toast.success("Updated");
      setNewVal("");
    } else {
      toast.error("Could not update");
    }
  };

  const deleteItem = async (e, id) => {
    console.log("id: ", id);
    e.preventDefault();
    const response = await axios.delete(
      "http://localhost:8080/api/oneClickMart/admin/deleteProduct",
      {
        data: {
          _id: id,
        },
      }
    );
    if (response.data.success) {
      toast.success("Product deleted");
      getData();
    } else {
      toast.error("Product couldn't be deleted");
    }
  };

  if (isAuthenticated) {
    return (
      <div className="list-container">
        <h1>Products</h1>
        <ul>
          {data.map((item, index) => (
            <li key={index}>
              <div className="item-style">
                <div className="details">
                  <h3>{item.name}</h3>
                  <h5>{item.description}</h5>
                  <button onClick={(e) => deleteItem(e, item._id)}>
                    Delete
                  </button>
                </div>
                <h4>${item.price}</h4>
                <h4>Available: {item.available}</h4>
                <form
                  className="add-items"
                  onSubmit={(e) => submitHandler(e, item)}
                >
                  <h6>Add products</h6>
                  <input
                    type="number"
                    placeholder="Enter new number of elements to add"
                    onChange={(e) => setNewVal(e.target.value)}
                  />
                  <button type="submit">Add</button>
                </form>
                {/* {item.available <= 10 && (
                  <div className="only-few-left">Only Few Left</div>
                )} */}
                <img
                  src={`http://localhost:8080/images/${item.mainImg}`}
                  alt=""
                />
              </div>
            </li>
          ))}
        </ul>
        <ToastContainer />
      </div>
    );
  } else {
    return <h1>Loading....</h1>;
  }
};

export default List;
