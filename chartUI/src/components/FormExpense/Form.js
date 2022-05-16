import "./Form.css";
import {useState} from "react";

const Form = (props) => {
    const [enteredTitle, setEnteredtitle] = useState("");
    const [enteredDate, setEnteredDate] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: "",
    //     enteredAmount: "",
    //     enteredDate: ""
    // });

    const titleChangeHandler = (event) => {
        setEnteredtitle(event.target.value);
        // setUserInput((prevState) => {return {...prevState, enteredTitle: event.target.value}})
     }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // setUserInput((prevState) => {return{...prevState, enteredDate: event.target.value}})
     }
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        // setUserInput((prevState) => {return{...prevState, enteredAmount: event.target.value}})
    }
    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title : enteredTitle,
            amount : enteredAmount,
            date : new Date(enteredDate)
        };
        props.onExpenseDataSave(expenseData);
        setEnteredAmount("");
        setEnteredtitle("");
        setEnteredDate("");
        props.closeForm();
    }
    return(
        <form onSubmit={submitHandler}>
            <div className={"new-expense__controls"}>
                <div className={"new-expense__control"}>
                    <label> Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className={"new-expense__control"}>
                    <label> Amount</label>
                    <input type="number" min="0.01" value={enteredAmount} step="0.01" onChange={amountChangeHandler}/>
                </div>
                <div className={"new-expense__control"}>
                    <label> Date</label>
                    <input type="date" min="2019-01-01" max="2022-12.30" value={enteredDate} onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className={"new-expense__actions"}>
                <button type={"submit"}>Add expense</button>
            </div>

        </form>
    )
}

export default Form;
