import React from "react";
import classes from "./MealsItem.module.css";
import MealsForm from "../MealsForm/MealsForm";
const MealsItem = ({ id, name, description, price }) => {
  const finalPrice = price.toFixed(2);

  return (
    <li key={id} className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>${finalPrice}</div>
      </div>
      <div>
        <MealsForm id={id} />
      </div>
    </li>
  );
};

export default MealsItem;
