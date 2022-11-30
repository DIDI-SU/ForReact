import React from "react";
import classes from "./MealInput.module.css";
const MealInput = (props) => {
  const { id, lable } = props;

  return (
    <div className={classes.input}>
      <lable htmlFor={id}>{lable}</lable>
      <input id={id} {...props.input} />
    </div>
  );
};

export default MealInput;
