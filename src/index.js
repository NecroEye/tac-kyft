import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App.js';
import {BrowserRouter} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import {CartProvider} from "./contexts/cart.context";
import {ProductsContext, ProductsProvider} from "./contexts/products.context";

const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(

    <React.StrictMode>
        <BrowserRouter>
            <ProductsProvider>
                <CartProvider>
                    <App/>
                </CartProvider>
            </ProductsProvider>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
