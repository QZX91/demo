import "./NewExpense.css"
import ExpenseForm from "./expenseForm/ExpenseForm";

const NewExpense = (props) => {
    const onAddNewExpense = (newExpense) =>{
        props.addNewExpense(newExpense);
    }
    return (
        <div className="new-expense">
            <ExpenseForm addNewExpense={onAddNewExpense}/> 
        </div>
    );
}

export default NewExpense;