import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  const year = props.date.getFullYear();
  const month = props.date.toLocaleDateString("en-AU", { month: "long" });
  const day = props.date.toLocaleDateString("en-AU", { day: "2-digit" });

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

export default ExpenseDate;
