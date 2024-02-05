import {Outlet, Link} from "react-router-dom";
import {Fragment, useContext} from "react";
import CartDropdownComponent from "../../cart-dropdown/cart-dropdown.component";
import CartIconComponent from "../../cart-icon/cart-icon.component";
import {ReactComponent as CrownLogo} from "../../../assets/crown.svg";
import "./navigation.styles.scss"
import {CartContext} from "../../../contexts/cart.context";

export const Navigation = () => {

    const {isCartOpen} = useContext(CartContext)

    return (
        <Fragment>
            <div className={"navigation"}>
                <Link className={"logo-container"} to={"/"}>
                    <CrownLogo/>
                </Link>
                <div className={"nav-links-container"}>
                    <Link className={"nav-link"} to={"/magaza"}>
                        Mağaza
                    </Link>
                    <Link className={"nav-link"} to={"/uye-giris"}>
                        Giriş Yap
                    </Link>
                    <CartIconComponent/>
                </div>
                {isCartOpen && <CartDropdownComponent/>}
            </div>
            <Outlet/>
        </Fragment>
    )
}