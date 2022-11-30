import classes from "./MealCard.module.css";

const MealCard = (props) => {
  return <article className={classes.card}>{props.children}</article>;
};

export default MealCard;
