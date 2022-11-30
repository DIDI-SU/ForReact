import React from "react";
import CartItem from "./CartItem/CartItem";
import classes from "./Cart.module.css";
import CartModal from "../UI/CartModal/CartModal";

const Cart = () => {
  return (
    <CartModal>
      <ul className={classes["cart-items"]}>
        <CartItem />
      </ul>
      <div>
        <div className={classes.total}>
          <h3>Total Amount</h3>
          <h3>가ㅣ격 들감</h3>
        </div>
        <div className={classes.actions}>
          <button className={classes["button--alt "]}>닫</button>
          <button className={classes.button}>주문</button>
        </div>
      </div>
    </CartModal>
  );
};

export default Cart;
