import './cart-dropdown.styles.scss'
import ButtonComponent from "../button/button.component";
import CartItemComponent from "../cart-item/cart-item.component";
import {useContext} from "react";
import {CartContext} from "../../contexts/cart.context";


const CartDropdownComponent = () => {

    const {cartItems} = useContext(CartContext)

    return (
        <div className={"cart-dropdown-container"}>
            <div className={"cart-items"}>
                {
                    cartItems.map(item => (
                        <CartItemComponent key={item.id} cartItem={item}/>
                    ))
                }
            </div>
            <ButtonComponent children={"Sepete Git"} buttonType={"inverted"}/>

        </div>
    )


}

export default CartDropdownComponent