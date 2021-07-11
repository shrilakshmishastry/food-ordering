import { GET_PRODUCTS_HOMEPAGE, createActionType, ADD_NEW_PRODUCT } from '../action-type';
const initialState = {
    products : [],
    loading: false
};

const  Products = (state = initialState, action) => {
    const { initial, success, failure } = createActionType(GET_PRODUCTS_HOMEPAGE);
    const addNewProductAction = createActionType(ADD_NEW_PRODUCT);

    switch(action.type){
        case (initial):{
            const newState = {...state};
            newState.loading =true;
            return newState;
        }
        case(success):{
            const newState = {...state};
            newState.loading =false;
            newState.products = action.payload;
            return newState;
        }
        case(failure):{
            const newState = {...state};
            newState.loading =false;
            newState.products = [];
            return newState;
        }
        case(addNewProductAction.success):{
            const newState = {...state};
            newState.products.push(action.payload.inserted);
            return newState;
        }
        default: return state;
    }


}

export default Products;