import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

function ExpensesList(props) {

    let expensesContent = <p className="expenses-list__fallback">No expenses found.</p>

    if(props.items.length > 0) {
        expensesContent = props.items.map((item) => (
            <ExpenseItem
                key={item.id}
                title={item.title}
                amount={item.amount}
                date={item.date}
            />
        ))}

    return (
        <ul className="expenses-list">
            {expensesContent}
        </ul>
    );
}

export default ExpensesList;