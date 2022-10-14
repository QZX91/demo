import { useState } from "react";
import "./App.css";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/newExpense/NewExpense";

function App() {
  const initialExpenses = [
    {
      id: "e1",
      date: new Date(2022, 9, 17),
      title: "Car Insurance",
      amount: "$1500"
    },
    {
      id: "e2",
      date: new Date(2022, 9, 16),
      title: "Toilet paper",
      amount: "$1.5"
    },
    {
      id: "e3",
      date: new Date(2022, 9, 15),
      title: "Dinner with friends",
      amount: "$80"
    },
    {
      id: "e4",
      date: new Date(2022, 9, 14),
      title: "Myki",
      amount: "$50"
    }
  ]

  const [expenses, setExpenses] = useState(initialExpenses)

  const onAddNewExpense = (newExpense) =>{
    setExpenses((prevState)=>{
      return [newExpense, ...prevState]
    })
  }

  return(
    <div>
      <NewExpense addNewExpense={onAddNewExpense}/>
      <Expenses expenses={expenses}/>
    </div>
  )
}

export default App;
