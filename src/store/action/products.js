import { GET_PRODUCTS_HOMEPAGE, createActionType, ADD_NEW_PRODUCT } from '../action-type';
import axios from 'axios';

export function getProductsForHomePage() {
    const { initial, success, failure } = createActionType(GET_PRODUCTS_HOMEPAGE);
    return async function (dispatch) {
        dispatch({ type: initial });
        try {
            const response = await axios.get('http://localhost:8080/products').then((res) => {
                return res.data;
            })
            dispatch({ type: success, payload: response });
        } catch (err) {
            console.log(err);
            dispatch({ type: failure });
        }
    }
}

export function addNewProduct(product) {
    const { initial, success, failure } = createActionType(ADD_NEW_PRODUCT);
    return async function (dispatch) {
        dispatch({ type: initial });
        try {
            const response = await axios.post('http://localhost:8080/products',product).then((res) => {
                return res.data;
            })
            dispatch({ type: success, payload: response });
        } catch (err) {
            console.log(err);
            dispatch({ type: failure });
        }
    }
}

export function deleteProduct(id) {
    const { initial, success, failure } = createActionType(ADD_NEW_PRODUCT);
    return async function (dispatch) {
        dispatch({ type: initial });
        console.log("hello");
        try {
            const response = await axios.delete(`http://localhost:8080/products/${id}`).then((res) => {
                console.log(res.data);
                return res.data;
            })
            dispatch({ type: success, payload: response });
        } catch (err) {
            console.log(err);
            dispatch({ type: failure });
        }
    }
}