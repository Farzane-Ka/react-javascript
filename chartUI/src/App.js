import './App.css';
import NewExpenseItems from "./components/Expenses/NewExpenseItems";
import InputExpenses from "./components/Expenses/InputExpenses";
import {useState} from "react";

const initialExpense = [
    {
        id: 'e1',
        title: 'Toilet Paper',
        amount: 94.12,
        date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
        id: 'e3',
        title: 'Car Insurance',
        amount: 294.67,
        date: new Date(2021, 2, 28),
    },
    {
        id: 'e4',
        title: 'New Desk (Wooden)',
        amount: 450,
        date: new Date(2021, 5, 12),
    },
];
function App() {
    const [expense, setExpense] = useState(initialExpense);
    const addExpenseHandler = (expenseData) => {
        setExpense((prevExpense) => {return [expenseData, ...prevExpense];});
    };
  return (
      <div>
          <InputExpenses onExpenseSave={addExpenseHandler}/>
          <NewExpenseItems expense = {expense}/>
      </div>
  );
}

export default App;
