import React from "react";
import CartIcon from "../../Cart/CartIcon/CartIcon";
import classes from "./HeaderCartBtn.module.css";
const HeaderCartBtn = () => {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>2</span>
    </button>
  );
};

export default HeaderCartBtn;
