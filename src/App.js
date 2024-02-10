import {Home} from "./components/routes/home/home.component"
import {Routes, Route} from "react-router-dom";
import {Navigation} from "./components/routes/navigation/navigation.component"
import {SignIn} from "./components/sign-in/sign-in.component";
import Shop from "./components/routes/shop/shop.component";
import CheckoutComponent from "./components/routes/checkout/checkout.component";



const App = () => {

    return (
        <Routes>
            <Route path={"/"} element={<Navigation/>}>

                <Route index element={<Home/>}/>
                <Route path={"magaza"} element={<Shop/>}/>
                <Route path={"uye-giris"} element={<SignIn/>}/>
                <Route path={"odeme"} element={<CheckoutComponent/>}/>


            </Route>

        </Routes>
    );
}

export default App;
