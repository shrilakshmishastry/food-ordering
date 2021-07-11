import axios from "axios";
import { ADD_TO_CART,createActionType    } from '../action-type';

export function addToCart(id) {
    const { initial, success, failure } = createActionType(ADD_TO_CART);

    return async function (dispatch) {
        console.log(id);
        dispatch({
            type: initial,
            payload: {id}
        }
        );
    }

}

