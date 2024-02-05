import ButtonComponent from "../button/button.component";
import './product-card.styles.css'
const ProductCard = ({product}) => {

    const { name, price, imageUrl} = product

    return (
        <div className={"product-card-container"}>
            <img src={imageUrl} alt={name}/>
            <div className={"footer"}>

                <span className={"name"}>{name}</span>
                  <span className={"price"}>{price}</span>
                <ButtonComponent buttonType={"inverted"} children={"Sepete Ekle"}/>
            </div>
        </div>
    )


}

export default ProductCard