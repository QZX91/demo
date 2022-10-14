import "./Expenses.css";
import ExpenseItem from "./expenseItem/ExpenseItem";
import ExpensesFilter from "./expensesFilter/ExpensesFilter";
import { v4 as uuid } from "uuid";
import { useState } from "react";

const Expenses = (props) => {
  const [filter, setFilter] = useState("2022");

  const filterExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filter
  );

  const onFilterChange = (filter) => {
    setFilter(filter);
  };

  let expensesResult = <p className="no-expense-found-msg">No expenses found</p>;

  if (filterExpenses.length > 0) {
    expensesResult = filterExpenses.map((expense) => {
      return (
        <ExpenseItem
          key={uuid()}
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
        />
      );
    });
  }

  return (
    <div className="expenses">
      <ExpensesFilter onSelectFilter={onFilterChange} selected={filter}/>
      {expensesResult}
    </div>
  );
};

export default Expenses;
