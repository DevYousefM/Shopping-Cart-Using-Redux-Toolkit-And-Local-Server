import React, { Fragment, useEffect } from "react";
import Cart from "./Cart";
import ProductsList from "./ProductsList";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, addToCart } from "../../store/productsSlice";
import "./product.css";

const MainContainer = () => {
  const dispatch = useDispatch();
  const { products, cart } = useSelector((state) => state.productsSlice);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <Fragment>
      <hr className="my-5" />
      <div className="row">
        <div className="col">
          <ProductsList
            products={products}
            addToCart={addToCart}
          />
        </div>
        <div className="col side-line">
          <Cart cart={cart} />
        </div>
      </div>
    </Fragment>
  );
};

export default MainContainer;
