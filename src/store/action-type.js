export const GET_STORES_ACTION = "GET_STORES";
export const GET_STOREBYID_ACTION = 'GET_STOREBYID';
export const LOGIN_USER = "LOGIN_USER";
export const GET_USER_INFO = "GET_USER_INFO";
export const ADD_TO_CART = 'ADD_TO_CART';
export const GET_PRODUCTS_HOMEPAGE = 'GET_PRODUCTS_HOMEPAGE';
export const ADD_NEW_PRODUCT = 'ADD_NEW_PRODUCT';

export function createActionType(type){
    return {
        initial : type,
        success : `${type}_SUCCESS`,
        failure : `${type}_FALIURE`
    };
}
