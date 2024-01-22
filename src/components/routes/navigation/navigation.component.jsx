import {Outlet, Link} from "react-router-dom";
import {Fragment} from "react";
import {ReactComponent as CrownLogo} from "../../../assets/crown.svg";

export const Navigation = () => {

    return (
        <Fragment>
            <div className={"navigation"}>
                <Link className={"nav-logo"} to={"/"}>
                    <CrownLogo/>
                </Link>
                <div className={"nav-links-container"}></div>
                <Link className={"nav-link"} to={"/mağaza"}>
                    Shop
                </Link>
            </div>
            <Outlet/>
        </Fragment>
    )
}