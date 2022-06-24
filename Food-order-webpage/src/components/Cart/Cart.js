import classes from './Cart.module.css';
import React, {useContext} from "react";
import mealItem from "../Meals/MealItem/MealItem";
import Modal from "../UI/Modal";
import CartContext from "../../store/Cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
    const cartCtx = useContext(CartContext);

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const addItemToCartHandler = (item) => {
        cartCtx.addItem(item);
    };
    const removeItemFromCartHandler = (id) => {
        cartCtx.removeItem(id)
    }
    const cartItems = (<ul className={classes['cart-items']}>{
        cartCtx.items.map((mealItem) => <CartItem
            key={mealItem.id} name={mealItem.name} amount={mealItem.amount} price={mealItem.price}
            onRemove={removeItemFromCartHandler.bind(null,mealItem.id)}
            onAdd={addItemToCartHandler.bind(null, mealItem)}/>)}</ul>);
    return(
        <Modal >
            {cartItems}
            <div className={classes.total}>
                <span>Total amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onCloseModal}>Close</button>
                {hasItems && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    )
}
export default Cart;
