import React from "react";
import classes from "./CartItem.module.css";

const CartItem = () => {
  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>이름</h2>
        <div className={classes.summary}>
          <span className={classes.price}>가격</span>
          <div className={classes.amount}>수량</div>
        </div>
      </div>
      <div className={classes.actions}>
        <button>+</button>
        <button>-</button>
      </div>
    </li>
  );
};

export default CartItem;
