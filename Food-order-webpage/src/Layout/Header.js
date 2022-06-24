import React from "react";
import mealImage from "../../assets/meals.jpg"
import classes from "./Header.module.css"
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
    return (
        <React.Fragment>
            <header className={classes.header}>
                <h1>React meal</h1>
                <HeaderCartButton onClick={props.onShowModal}/>

            </header>
            <div className={classes['main-image']}>
                <img src={mealImage} alt="food table"/>

            </div>
        </React.Fragment>
    )
}
export default Header;
