/** @format */

import React, { useState, useEffect } from "react";
import axios from "axios";
import Router from "next/router";
import { useRouter } from "next/router";

const EditProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const router = useRouter();
  const { id } = router.query;

  const updateProduct = async (e) => {
    e.preventDefault();
    await axios.patch(`http://localhost:5000/product/${id}`, {
      title: title,
      price: price,
    });
    Router.push("/");
  };
  useEffect(() => {
    getProductById();
  }, []);

  const getProductById = async () => {
    const response = await axios.get(`http://localhost:5000/product/${id}`);
    setTitle(response.data.title);
    setPrice(response.data.price);
  };
  return (
    <div className="mt-3">
      <div className="container">
        <div className="columns">
          <div className="column is-half is-offset-one-quarter">
            <form onSubmit={updateProduct}>
              <div className="field">
                <label className="label">Title</label>
                <input
                  className="input"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="field">
                <label className="label">Price</label>
                <input
                  className="input"
                  type="text"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>

              <div className="field">
                <button className="button is-primary">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
