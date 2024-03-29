import {useContext} from "react";
import {ProductsContext} from "../../../contexts/products.context";
import ProductCardComponent from "../../product-card/product-card.component";
import "./shop.styles.css"


const Shop = () => {

    const {products} = useContext(ProductsContext)

    return (
        <div className={"products-container"}>
            {
                products.map((product) => (
                    <ProductCardComponent key={product.id} product={product}/>
                ))
            }

        </div>
    )


}

export default Shop