import Card from "../UI/Card";
import classes from './AddUser.module.css';
import Button from "../UI/Button";
import React, {useState} from 'react';
import ErrorModal from "../UI/ErrorModal/ErrorModal";
const AddUser = props => {
    const [inputUserName, setInputUsername] = useState('');
    const [inputAge, setInputAge] = useState('');
    const [error, setError] = useState();
    const addUserHandler = (event) => {
        event.preventDefault();
        if (inputUserName.trim().length === 0 || inputAge.trim().length === 0) {
            setError({title: 'Invalid input', message: 'Please enter a valid name and age (non-empty)!'});
        }
        if (+inputAge < 1){
            setError({title: 'Invalid input', message: 'Please enter a valid age (> 0)!'});
            ;
        }
        props.onAddUser(inputUserName, inputAge);
        setInputUsername('');
        setInputAge('');
    }

    const userNameHandler = (event) => {
        setInputUsername(event.target.value);
    }
    const ageHandler = (event) => {
        setInputAge(event.target.value);
    }
    const errorhandler = () => {
        setError(null);
    }
    return(
        <div>
            { error && <ErrorModal title={error.title} message={error.message} onClose={errorhandler}/>}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username </label>
                    <input id="username" type="text" value={inputUserName} onChange={userNameHandler}/>
                    <label htmlFor="age">Age (Years) </label>
                    <input id="age" type="number" value={inputAge} onChange={ageHandler}/>
                    <Button type="submit">Add user</Button>
                </form>
            </Card>
        </div>
  )
}
export default AddUser;
