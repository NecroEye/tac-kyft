import "./checkout.styles.css"
import {useContext} from "react";
import {CartContext} from "../../../contexts/cart.context";
import CheckoutItemComponent from "../../checkout-item/checkout-item.component";

const CheckoutComponent = () => {

    const {cartItems, cartTotal} = useContext(CartContext)

    return (
        <div className={"checkout-container"}>
            <div className={"checkout-header"}>
                <div className={"header-block"}>
                   <span>Ürün</span>
                </div>
                <div className={"header-block"}>
                    <span>Açıklama</span>

                </div>
                <div className={"header-block"}>
                    <span>Miktar</span>

                </div>
                <div className={"header-block"}>
                    <span>Fiyat</span>

                </div>
                <div className={"header-block"}>
                    <span>Kaldır</span>

                </div>
            </div>
            {cartItems.map((cartItem) => {
                    return (
                        <CheckoutItemComponent key={cartItem.id} cartItem={cartItem}/>
                    )
                })
                }
                <span className={"total"}>Toplam: {cartTotal}₺</span>
        </div>
    )

}

export default CheckoutComponent