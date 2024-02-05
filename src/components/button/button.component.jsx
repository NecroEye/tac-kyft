import "./button.styles.css"


const ButtonComponent = ({children, buttonType}) => {

    return (
        <button type={buttonType}
                className={"button-container"}>
            {children}
        </button>
    )
}


export default ButtonComponent