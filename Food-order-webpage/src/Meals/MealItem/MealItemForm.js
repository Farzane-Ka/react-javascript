import classes from './MealItemForm.module.css';
import Input from "../../UI/Input";
import {useRef, useState} from "react";
const MealItemForm = (props) => {
    const [amountIsValid, setAmountIsValid] = useState(true);
    const amountInputRef = useRef();
    const onSubmitHandler = event => {
        event.preventDefault();
        const amountInput = amountInputRef.current.value;
        const amountInputNumber = + amountInput;
        if (amountInput.trim().length == 0 || amountInputNumber < 1 ||
        amountInputNumber > 5) {
            setAmountIsValid(false);
            return;
        }
        props.onAddToCart(amountInputNumber);

    }

    return(
        <form className={classes.form} onSubmit={onSubmitHandler}>
            <Input
                ref={amountInputRef}
                label="Amount" input={{
                id: 'amount',
                type: 'number',
                min:'1',
                max:'5',
                step:'1',
                defaultValue:'1'
            }}/>
            <button>Add</button>
            {!amountIsValid && <p>Please enter a valid number (1-5)</p>}
        </form>
    )
}
export default MealItemForm;