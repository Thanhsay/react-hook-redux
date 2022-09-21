import {configureStore} from "@reduxjs/toolkit";
import cartManagement from "../Reducer/Cart/cart";

export default configureStore({
    reducer: {
        cart: cartManagement,
    }
})