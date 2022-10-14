import "./ExpenseItemCard.css"

const ExpenseItemCard = (props) => {
    return (
        <div className="expense-item-card">
            {props.children}
        </div>
    );
}

export default ExpenseItemCard