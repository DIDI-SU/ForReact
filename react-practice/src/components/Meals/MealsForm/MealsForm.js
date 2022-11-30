import React from "react";
import classes from "./MealsForm.module.css";
import MealInput from "../../UI/MealInput/MealInput";

const MealsForm = ({ id }) => {
  return (
    <form className={classes.form}>
      <MealInput
        lable="Amount"
        input={{
          id: "amout_" + id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+Add</button>
    </form>
  );
};

export default MealsForm;
