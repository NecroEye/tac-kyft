import {Home} from "./components/routes/home/home.component"
import {Routes, Route} from "react-router-dom";
import {Navigation} from "./components/routes/navigation/navigation.component"


const Shop = () => {

    return (
        <h1>Selam burası markettir</h1>
    )
}

const App = () => {

    return (
        <Routes>
            <Route path={"/"} element={<Navigation/>}>

                <Route index element={<Home/>}/>
                <Route path={"mağaza"} element={<Shop/>}/>

            </Route>

        </Routes>
    );
}

export default App;
