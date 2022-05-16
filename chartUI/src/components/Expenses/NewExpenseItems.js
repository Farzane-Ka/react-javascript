import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import {useState} from "react";
import ExpensesChart from "./ExpensesChart";
const NewExpenseItems = (props) => {
    const [savedYear, setSavedYear] = useState("2021");
    const yearChangeHandler = (selectedYear) => {
        setSavedYear(selectedYear);
        console.log("in upper " + selectedYear);
    }
    const expenseYear = props.expense.filter(expense => expense.date.getFullYear().toString() === savedYear);
    return (
        <div>
            <Card className={"expenses"}>
            <ExpenseFilter selected={savedYear} onYearSave={yearChangeHandler}/>
            <ExpensesChart items={expenseYear}/>
                {expenseYear.length === 0 ? <p>No expense item available</p> :
                    expenseYear.map(expense => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/>)}
            </Card>
        </div>
    )
}

export default NewExpenseItems;
