import {createSlice} from "@reduxjs/toolkit";
import {quantityAction} from "../Constants/constants";

export const cartManagement = createSlice({
    name: 'cart',
    initialState: {
        products: []
    },
    reducers: {
        selectProduct: (state, product) => {
            let check = false;
            state.products.forEach((item) => {
                if (item.productId === product.payload.productId) {
                    check = true;
                    item.quantity ++;
                }
            })
            if (!check) {
                state.products.push(product.payload);
                state.products[state.products.length - 1].quantity = 1;
            }
        },

        quantity: (state, detailProduct) => {
            if (detailProduct.payload.action === quantityAction.INCREMENT) {
                state.products.forEach((item) => {
                    if (item.productId === detailProduct.payload.productId) {
                        item.quantity ++;
                    }
                });
            } else if (detailProduct.payload.action === quantityAction.DECREMENT) {
                state.products.forEach((item) => {
                    if (item.productId === detailProduct.payload.productId) {
                        item.quantity --;
                        if (item.quantity < 1) {
                            state.products.forEach((val, num) => {
                                if (val.productId == item.productId) {
                                    state.products.splice(num, 1);
                                }
                            })
                        }
                    }
                });
            }
        },

        deleteProduct: (state, product) => {
            state.products.forEach((item, index) => {
                if (item.productId === product.payload.productId) {
                    state.products.splice(index, 1);
                }
            })
        }
    }
})

export const {selectProduct, quantity, deleteProduct} = cartManagement.actions;
export default cartManagement.reducer;
export const amount = (state) => state.cart.products;