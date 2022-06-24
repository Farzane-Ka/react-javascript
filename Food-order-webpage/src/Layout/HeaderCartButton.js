import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import {useContext} from "react";
import CartContext from "../../store/Cart-context";

const HeaderCartButton = (props) => {
    const cartCtx = useContext(CartContext);
    const numberofCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    },0);
    return(
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <span>Your cart</span>
            <span className={classes.badge}>{numberofCartItems}</span>
        </button>
    )

};
export default HeaderCartButton;