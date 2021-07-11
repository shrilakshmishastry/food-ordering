import axios from "axios";
import { LOGIN_USER, createActionType, GET_USER_INFO } from '../action-type';

export function loginUser({ email, password }) {

    console.log(email, password);
    return async function (dispatch) {
        const { initial, success, failure } = createActionType(LOGIN_USER);
        dispatch({ type: initial });
        try {
            const response = await axios.post("http://localhost:8080/login", { email, password })
                .then(res => {

                    return res.data;
                })
            console.log(response + "hello");
            window.localStorage.setItem("access-token", response.accessToken);
            dispatch({ type: success, payload: response })
        } catch (e) {
            dispatch({ type: failure });
        }

    }

}

export function getUserInfo() {
    return async function (dispatch) {
        const { initial, success, failure } = createActionType(GET_USER_INFO);
        dispatch({ type: initial });
        try {
            const token = window.localStorage.getItem("access-token");
            if (token) {
                const response = await axios.post("http://localhost:8080/user", {}, {
                    headers: { authorization: token }
                })
                    .then(res => {

                        return res.data;
                    });
                dispatch({ type: success, payload: response })
            }

        } catch (e) {
            dispatch({ type: failure });
        }

    }

}

