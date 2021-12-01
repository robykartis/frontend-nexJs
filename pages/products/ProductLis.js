/** @format */

import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";

function ProductLis() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getProduct();
  }, []);
  const getProduct = async () => {
    const response = await axios.get("http://localhost:5000/product");
    // Percobaan dengan console,log
    // console.log(response.data);
    setProduct(response.data);
  };
  const deleteProduct = async (id) => {
    await axios.delete(`http://localhost:5000/product/${id}`);
    getProduct();
  };
  return (
    <div>
      <Link href="/add/products">
        <a className="button is-primary mt-2">ADD</a>
      </Link>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th> No</th>
            <th> Title </th>
            <th> Price </th>
            <th> Action </th>
          </tr>
        </thead>
        <tbody>
          {product.map((pro, index) => (
            <tr key={pro.id}>
              <td>{index + 1}</td>
              <td>{pro.title}</td>
              <td>{pro.price}</td>
              <td>
                <Link href={`/edit/${pro.id}`}>
                  <a className="button is-small is-info">Edit</a>
                </Link>
                <button
                  onClick={() => deleteProduct(pro.id)}
                  className="button is-small is-primary">
                  hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductLis;
