import { typesUser } from "../types/types";

export const userReducers = (state = {}, action) => {
    switch (action.type) {
        case typesUser.GET_USER:
            return {
                ...state,
                isLoading: true,
                isError: false,
                isSuccess: false,
                data: "",
            };
        case typesUser.GET_USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                isSuccess: true,
                data: action.payload,
                name: action.payload.displayName,
                photoURL: action.payload.photoURL,
                email: action.payload.email,
                uid: action.payload.uid,
                phoneNumber: action.payload.phoneNumber,
            };
        case typesUser.GET_USER_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
                isSuccess: false,
                data: action.payload,
            };
        case typesUser.UPDATE_USER:
            return {
                ...state,
                isLoading: true,
                isError: false,
                isSuccess: false,
                data: "",
            };
        case typesUser.UPDATE_USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                isSuccess: true,
                data: action.payload,
                name: action.payload.displayName,
                photoURL: action.payload.photoURL,
                email: action.payload.email,
                uid: action.payload.uid,
                phoneNumber: action.payload.phoneNumber,
            };
        case typesUser.UPDATE_USER_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
                isSuccess: false,
                data: action.payload,
            };
        case typesUser.DELETE_USER:
            return {
                ...state,
                isLoading: true,
                isError: false,
                isSuccess: false,
                data: "",
            };
        case typesUser.DELETE_USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                isSuccess: true,
                data: action.payload,
                name: action.payload.displayName,
                photoURL: action.payload.photoURL,
                email: action.payload.email,
                uid: action.payload.uid,
                phoneNumber: action.payload.phoneNumber,
            };
        case typesUser.DELETE_USER_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
                isSuccess: false,
                data: action.payload,
            };
        case typesUser.UPDATE_PASSWORD:
            return {
                ...state,
                isLoading: true,
                isError: false,
                isSuccess: false,
                data: "",
            };
        case typesUser.UPDATE_PASSWORD_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                isSuccess: true,
                data: action.payload,
                name: action.payload.displayName,
                photoURL: action.payload.photoURL,
                email: action.payload.email,
                uid: action.payload.uid,
                phoneNumber: action.payload.phoneNumber,
            };
        case typesUser.UPDATE_PASSWORD_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
                isSuccess: false,
                data: action.payload,
            };
        case typesUser.UPDATE_PHOTO:
            return {
                ...state,
                isLoading: true,
                isError: false,
                isSuccess: false,
                data: "",
            };
        case typesUser.UPDATE_PHOTO_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                isSuccess: true,
                data: action.payload,
                name: action.payload.displayName,
                photoURL: action.payload.photoURL,
                email: action.payload.email,
                uid: action.payload.uid,
                phoneNumber: action.payload.phoneNumber,
            };
        case typesUser.UPDATE_PHOTO_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
                isSuccess: false,
                data: action.payload,
            };
        case typesUser.UPDATE_EMAIL:
            return {
                ...state,
                isLoading: true,
                isError: false,
                isSuccess: false,
                data: "",
            };
        case typesUser.UPDATE_EMAIL_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                isSuccess: true,
                data: action.payload,
                name: action.payload.displayName,
                photoURL: action.payload.photoURL,
                email: action.payload.email,
                uid: action.payload.uid,
                phoneNumber: action.payload.phoneNumber,
            };
        case typesUser.UPDATE_EMAIL_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
                isSuccess: false,
                data: action.payload,
            };
        case typesUser.SET_UP_RECAPTCHA:
            return {
                ...state,
                isLoading: true,
                isError: false,
                isSuccess: false,
                data: "",
            };
        case typesUser.SET_UP_RECAPTCHA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                isSuccess: true,
                data: action.payload,
                name: action.payload.displayName,
                photoURL: action.payload.photoURL,
                email: action.payload.email,
                uid: action.payload.uid,
                phoneNumber: action.payload.phoneNumber,
            };
        case typesUser.SET_UP_RECAPTCHA_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
                isSuccess: false,
                data: action.payload,
            };
        case typesUser.SIGN_IN_WITH_PHONE:
            return {
                ...state,
                isLoading: true,
                isError: false,
                isSuccess: false,
                data: "",
            };
        case typesUser.SIGN_IN_WITH_PHONE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                isSuccess: true,
                data: action.payload,
                name: action.payload.displayName,
                photoURL: action.payload.photoURL,
                email: action.payload.email,
                uid: action.payload.uid,
                phoneNumber: action.payload.phoneNumber,
            };
        case typesUser.SIGN_IN_WITH_PHONE_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
                isSuccess: false,
                data: action.payload,
            };

        default:
            return state;
    }
}