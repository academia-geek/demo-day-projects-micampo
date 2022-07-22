import { typeLoginCheck } from "../types/types";

export const loginCheckReducers = (state = {}, action) => {
    switch (action.type) {
        case typeLoginCheck.LOGIN_CHECK_TRUE:
            return {
                ...state,
                loginCheck: true,
            };
        case typeLoginCheck.LOGIN_CHECK_FALSE:
            return {
                ...state,
                loginCheck: false,
            };
        default:
            return state;
    }
}