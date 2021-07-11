import {createActionType, GET_USER_INFO} from '../action-type';
const initialState = {
    info : {}
};

const {initial,success,failure}  = createActionType(GET_USER_INFO);

const  User = (state = initialState, action) => {
    switch(action.type){
        case success:
            const newState = {...state};
            newState.info = action.payload.user;
            return newState;
        default: return state;
    }

}

export default User;