/** @format */

import React, { useState } from "react";
import axios from "axios";
import Router from "next/router";

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  const saveProduct = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/product", {
      title: title,
      price: price,
    });
    Router.push("/");
  };
  return (
    <div className="mt-3">
      <div className="container">
        <div className="columns">
          <div className="column is-half is-offset-one-quarter">
            <form onSubmit={saveProduct}>
              <div className="field">
                <label className="label">Title</label>
                <input
                  className="input"
                  type="text"
                  placeholder="masukan nama"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="field">
                <label className="label">Price</label>
                <input
                  className="input"
                  type="text"
                  placeholder="masukan harga"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div className="field">
                <button className="button is-primary    ">Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
