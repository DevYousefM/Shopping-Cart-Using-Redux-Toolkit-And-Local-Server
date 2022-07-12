import React from "react";
import { useDispatch, useSelector } from "react-redux";
const ProductsList = ({ products, addToCart }) => {
  const { cart } = useSelector((state) => state.productsSlice);
  const dispatch = useDispatch();

  const productList =
    products.length > 0 ? (
      products.map((product) => (
        <li
          className="list-group-item d-flex  justify-content-between align-items-center"
          key={product.id}
        >
          <div>{product.title}</div>
          <div className="btn-group" role="group">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                const isFound = cart.some((element) => {
                  if (element.id === product.id) {
                    return true;
                  }
                  return false;
                });
                isFound ? console.log("") : dispatch(addToCart(product.id));
              }}
            >
              Add To Cart
            </button>
          </div>
        </li>
      ))
    ) : (
      <div className="alert alert-secondary" role="alert">
        There is no products Found
      </div>
    );
  return (
    <div>
      <h2>Products List</h2>
      {productList}
    </div>
  );
};

export default ProductsList;
