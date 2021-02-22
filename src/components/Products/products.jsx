// import React, { useContext } from "react";
import React from "react";
import "./products.scss";
// import { ProductContext } from "../Context/productContext";

function Products() {
  // const products = useContext(ProductContext);

  return (
    <main className="App-products container-fluid">
      <h1 style={{ paddingTop: "6rem" }}>Coming soon 🚧</h1>

      {/* <h2 className="font-weight-light text-center text-lg-left mt-4 mb-0">Products</h2>

      <hr className="mt-2 mb-5" />

      <div className="row text-center text-lg-left">

        {products.products.map((products) =>
          <div className="col-lg-3 col-md-4 col-sm-6 col-12" key={products.name}>
            <div href="" className="d-block mb-4 h-100">
              <img className="img-fluid img-thumbnail" src={products.src} alt={products.alt} />
              <div className="product-info">
                <p>{products.name}</p>
                <p className={products.available === "AVAILABLE" ? "greenProduct" : "redProduct"}>{products.available}</p>
              </div>
            </div>
          </div>
        )}
      </div> */}
    </main>
  );
}

export default Products;
