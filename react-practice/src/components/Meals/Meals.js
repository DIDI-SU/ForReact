import React from "react";
import MealCard from "../UI/MealCard/MealCard";
import MealsItem from "./MealsItem/MealsItem";
import MealSummary from "../UI/MealSummary/MealSummary";
import classes from "./Meals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const Meals = () => {
  const mealLists = DUMMY_MEALS.map(({ id, name, description, price }) => (
    <MealsItem id={id} name={name} description={description} price={price} />
  ));

  return (
    <>
      <MealSummary />
      <section className={classes.meals}>
        <MealCard>
          <ul>{mealLists}</ul>
        </MealCard>
      </section>
    </>
  );
};

export default Meals;
