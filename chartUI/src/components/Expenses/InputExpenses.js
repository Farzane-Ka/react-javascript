import "./InputExpenses.css";
import "../FormExpense/Form";
import Form from "../FormExpense/Form";
import {useState} from "react";
const InputExpenses = (props) => {
    const [clicked, setClicked] = useState(false);
    const expenseDataSaveHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onExpenseSave(expenseData);
    }
    const clickHandler = () => {
        setClicked(true);
    }
    const closeForm = () => {
        setClicked(false);
    }

    return(
        <div className={"new-expense"}>
            {clicked && <Form closeForm = {closeForm} onExpenseDataSave={expenseDataSaveHandler}/>}
            {!clicked && <button onClick={clickHandler}>New expense</button>}

        </div>
    )
}

export default InputExpenses;
