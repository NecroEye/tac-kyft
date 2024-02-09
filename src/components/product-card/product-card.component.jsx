import ButtonComponent from "../button/button.component";
import './product-card.styles.css'
import {useContext} from "react";
import {CartContext} from "../../contexts/cart.context";
import ProductCartButtonComponent from "../button/product-cart-button.component";


const ProductCard = ({product}) => {

    const { name, price, imageUrl} = product
    const {addItemToCart} = useContext(CartContext)

    const ProductToAddCart = () => addItemToCart(product)

    return (
        <div className={"product-card-container"}>
            <img src={imageUrl} alt={name}/>
            <div className={"footer"}>
                <span className={"name"}>{name}</span>
                  <span className={"price"}>{price}₺</span>
                <ProductCartButtonComponent children={"Sepete Ekle"} buttonTypt={"inverted"} onClick={ProductToAddCart}/>
            </div>
        </div>
    )


}

export default ProductCard