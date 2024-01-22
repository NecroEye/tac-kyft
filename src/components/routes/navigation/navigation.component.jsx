import {Outlet, Link} from "react-router-dom";
import {Fragment} from "react";
import {ReactComponent as CrownLogo} from "../../../assets/crown.svg";
import "./navigation.styles.scss"

export const Navigation = () => {

    return (
        <Fragment>
            <div className={"navigation"}>
                <Link className={"logo-container"} to={"/"}>
                    <CrownLogo/>
                </Link>
                <div className={"nav-links-container"}>
                    <Link className={"nav-link"} to={"/mağaza"}>
                        Mağaza
                    </Link>
                </div>
            </div>
            <Outlet/>
        </Fragment>
    )
}