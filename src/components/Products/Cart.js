import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increaseQTN, decreaseQTN } from "../../store/productsSlice";
const Cart = () => {
  const { cart } = useSelector((state) => state.productsSlice);
  const dispatch = useDispatch();

  const selectedProducts =
    cart.length > 0 ? (
      cart.map((product) => (
        <div key={Math.random()}>
          <p className="fw-bold">Title: {product.title}</p>
          <p className="fst-italic">
            Price: {Math.ceil(product.price * product.qtn)}$
          </p>
          <p className="fst-italic">Quantity: {product.qtn} </p>
          <div className="btn-group" role="group">
            <button
              type="button"
              className="btn btn-primary pt-0 "
              style={{
                fontSize: "20px",
                lineHeight: "initial",
                fontWeight: "bold",
              }}
              onClick={() => {
                dispatch(increaseQTN(product.id));
              }}
            >
              +
            </button>
            <button
              type="button"
              className="btn btn-danger pt-0"
              style={{
                fontSize: "20px",
                lineHeight: "initial",
                paddingBottom: "14px",
              }}
              onClick={() => {
                dispatch(decreaseQTN(product.id));
              }}
            >
              ـــ
            </button>
          </div>
          <hr />
        </div>
      ))
    ) : (
      <div className="alert alert-secondary" role="alert">
        There is no products selected yet. Please select!
      </div>
    );
  return (
    <Fragment>
      <h2>Selected Products</h2>

      {selectedProducts}
    </Fragment>
  );
};

export default React.memo(Cart);
