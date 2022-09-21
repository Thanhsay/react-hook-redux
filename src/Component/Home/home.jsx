import React from "react";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectProduct, quantity, deleteProduct, amount} from "../../Redux/Reducer/Cart/cart";
import {quantityAction} from "../../Redux/Reducer/Constants/constants";

const HomeComponent = () => {
    const dispatch = useDispatch();
    const cart = useSelector(amount);
    const [detail, setDetail] = useState(false);

    const products = [
        {
            productId: '1',
            productName: 'T-Shirt',
            quantity: 0
        },
        {
            productId: '2',
            productName: 'Jean',
            quantity: 0
        },
        {
            productId: '3',
            productName: 'Glasses',
            quantity: 0
        }
    ]

    const addProduct = (product) => {
        dispatch(selectProduct(product));
    }

    const removeProduct = (product) => {
        dispatch(deleteProduct(product));
    }

    const viewDetail = () => {
        return (
            <div>
                {cart.map((item, index) => {
                    return (
                        <div key={index + 'product'}>
                            {item.productName}:{item.quantity}
                            &ensp;
                            <button onClick={() => {dispatch(quantity({action: quantityAction.INCREMENT, productId: item.productId}))}}>+</button>
                            &nbsp;
                            <button onClick={() => {dispatch(quantity({action: quantityAction.DECREMENT, productId: item.productId}))}}>-</button>
                            &ensp;
                            <button onClick={() => removeProduct(item)}>remove</button>
                        </div>
                    )
                })}
            </div>
        )
    }

    return(
        <div>
            <div>
                {products.map((item, index) => {
                    return (
                        <div key={index}>
                            <div>{item.productName}
                                <button onClick={() => addProduct(item)}>add</button>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div>
                Cart: {cart.length > 0 ? cart.length : 'empty'}
                <br/>
                <a style={detail ? {color: 'grey', cursor: 'context-menu'} : {color: 'blue', textDecoration: 'none', cursor: 'context-menu'}}
                   onClick={() => {setDetail(detail => !detail)}}>
                    {detail ? 'Hide detail' : 'View detail'}
                </a>
                {detail ? viewDetail() : ''}
            </div>
        </div>
    )
}

export default HomeComponent;