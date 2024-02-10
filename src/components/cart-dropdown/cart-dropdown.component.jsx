import './cart-dropdown.styles.scss'
import ButtonComponent from "../button/button.component";
import CartItemComponent from "../cart-item/cart-item.component";
import {useContext} from "react";
import {useNavigate} from "react-router-dom";
import {CartContext} from "../../contexts/cart.context";


const CartDropdownComponent = () => {

    const {cartItems} = useContext(CartContext)
    const navigate = useNavigate()

    const goToCheckoutHandler = () =>{
        navigate("/odeme")
    }

    return (
        <div className={"cart-dropdown-container"}>
            <div className={"cart-items"}>
                {
                    cartItems.map(item => (
                        <CartItemComponent key={item.id} cartItem={item}/>
                    ))
                }
            </div>
            <ButtonComponent children={"Sepete Git"} buttonType={"inverted"} onClick={goToCheckoutHandler}/>

        </div>
    )


}

export default CartDropdownComponent