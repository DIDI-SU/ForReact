import React from "react";
import classes from "./Headers.module.css";
import HeaderCartBtn from "../HeaderCartBtn/HeaderCartBtn";
import mealsImage from "../../../assets/img/meals.jpg";
const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartBtn />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="meals on desk" />
      </div>
    </>
  );
};

export default Header;
