import "./button.styles.css"


const ButtonComponent = ({children, buttonType, onClick}) => {

    return (
        <button type={buttonType}
                className={"button-container"}
                onClick={onClick}>
            {children}
        </button>
    )
}


export default ButtonComponent