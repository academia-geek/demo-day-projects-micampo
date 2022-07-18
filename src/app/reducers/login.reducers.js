import { typesLogin } from "../types/types";

export const loginReducers = (state = {}, action) => {
    switch (action.type) {
        case typesLogin.LOGIN:
            return {
                ...state,
                isLoading: true,
                isError: false,
                isSuccess: false,
                message: "",
            };
        case typesLogin.LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                isSuccess: true,
                message: action.payload,
            };
        case typesLogin.LOGIN_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
                isSuccess: false,
                message: action.payload,
            };
        case typesLogin.LOGOUT:
            return {
                ...state,
                isLoading: true,
                isError: false,
                isSuccess: false,
                message: "",
            };
        case typesLogin.LOGOUT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                isSuccess: true,
                message: action.payload,
            };
        case typesLogin.LOGOUT_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
                isSuccess: false,
                message: action.payload,
            };
        case typesLogin.REGISTER:
            return {
                ...state,
                isLoading: true,
                isError: false,
                isSuccess: false,
                message: "",
            };
        case typesLogin.REGISTER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                isSuccess: true,
                message: action.payload,
            };
        case typesLogin.REGISTER_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
                isSuccess: false,
                message: action.payload,
            };
        default:
            return state;
    }
}