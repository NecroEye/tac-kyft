import "./button.styles.css"




const ProductCartButtonComponent = ({children, buttonType, onClick}) =>{

    return(

        <button type={buttonType}
         onClick={onClick}
        className={"button-container"}>
            {children}
        </button>

    )
}

export default ProductCartButtonComponent