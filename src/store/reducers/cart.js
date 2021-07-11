import { ADD_TO_CART,createActionType } from "../action-type";
const initialState = {
    productsInCarts : []
};

const cartAction = createActionType(ADD_TO_CART);

const  Cart = (state = initialState, action) => {
    switch(action.type){
        case cartAction.initial: {
            const newState = {...state};
            const {id} = action.payload;
            newState.productsInCarts.push(id);
            return newState;
        }
        default:{
            return state;
        }
    }


}

export default Cart;