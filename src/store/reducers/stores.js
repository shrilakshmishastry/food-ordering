import { GET_STORES_ACTION, createActionType, GET_STOREBYID_ACTION } from "../action-type";

const initialState = {
    list: [],
};

const storesActions = createActionType(GET_STORES_ACTION);
const storeByIdActions = createActionType(GET_STOREBYID_ACTION);

const Stores = (state = initialState, action) => {
    switch (action.type) {
        case storesActions.initial: {
            const newState = { ...state };
            newState.isLoading = true;
            newState.list = [];
            return newState;
        }
        case storesActions.success: {
            const newState = { ...state };
            newState.isLoading = false;
            newState.list = action.payload;
            return newState;
        }
        case storesActions.failure: {
            const newState = { ...state };
            newState.isLoading = false;
            return newState;
        }
        case storeByIdActions.initial: {
            const newState = { ...state };
            newState.isLoading = true;
            return newState;
        }
        case storeByIdActions.success: {
            const newState = { ...state };
            newState.selectedStore = action.payload;
            newState.isLoading = false;
            return newState;
          }
        case storeByIdActions.failure : {
            const newState = { ...state };
            newState.isLoading = false;
            return newState;
        }
        default: {
            return state;
        }
    }

}

export default Stores;