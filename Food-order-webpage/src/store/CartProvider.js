import CartContext from "./Cart-context";
import {useReducer} from "react";

const defaultCartState = {
    items: [],
    totalAmount:0
}
const cartReducer = (state,action) => {
    if (action.type == "ADD") {
        const existingItemsIndex = state.items.findIndex(item => item.id === action.item.id)
       const exitingCartItem = state.items[existingItemsIndex];
        let updatedItem;
        let updatedItems;
        if (exitingCartItem) {
            updatedItem = {
                ...exitingCartItem,
                amount: exitingCartItem.amount + action.item.amount
            }
            updatedItems = [...state.items];
            updatedItems[existingItemsIndex] =updatedItem;
        } else {
            updatedItem = action.item;
            updatedItems = state.items.concat(updatedItem);
        }

        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }  ;
    }
    if (action.type === "REMOVE") {
        const existingItemsIndex = state.items.findIndex(item => item.id === action.id)
        const exitingCartItem = state.items[existingItemsIndex];
        const updatedTotalAmount = state.totalAmount - exitingCartItem.price;
        let updatedItems;
        if (exitingCartItem.amount == 1) {
            updatedItems = state.items.filter(item => item.id !== action.id);
        } else {
            const updatedItem = {...exitingCartItem, amount: exitingCartItem.amount - 1};
            updatedItems = [...state.items];
            updatedItems[existingItemsIndex] = updatedItem;
        }
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
    return defaultCartState;
};
const CartProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer,defaultCartState);
    const addItemToCartHandler = (item) => {
        dispatchCartAction({
            type:"ADD",
            item: item
        });
    };

    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({type: "REMOVE", id:id});
    };
    const cartContext = {
        items: cartState.items,
        totalAmount:cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }
    return(
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
};

export default CartProvider;
