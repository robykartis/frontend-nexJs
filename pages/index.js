/** @format */

import ProductLis from "./products/ProductLis";

export default function Home() {
  return (
    <div className="container">
      <div className="columns">
        <div className="column is-half is-offset-one-quarter">
          <ProductLis />
        </div>
      </div>
    </div>
  );
}
