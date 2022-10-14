import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    const formData = {title, amount: "$"+amount, date: new Date(date), id: Math.random()}
    props.addNewExpense(formData);
  };

  const onInputChange = (event, type) => {
    const value = event.target.value;
    switch (type) {
      case "title":
        setTitle(value);
        break;
      case "amount":
        setAmount(value);
        break;
      case "date":
        setDate(value);
        break;
      default:
        console.error("unknown type");
        break;
    }
  };
  return (
    <form onSubmit={onFormSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={(event) => onInputChange(event, "title")}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={(event) => onInputChange(event, "amount")}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2021-09-21"
            max="2022-09-21"
            onChange={(event) => onInputChange(event, "date")}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
