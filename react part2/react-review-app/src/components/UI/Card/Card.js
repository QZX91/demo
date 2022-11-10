import classes from "./Card.module.css";

const Card = (props) => {
  return <div className={`${classes.card} ${props.extraClass}`}>{props.children}</div>;
};

export default Card;
