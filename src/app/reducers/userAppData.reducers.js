import { typeUserAppData } from "../types/types";

export const initialStateUserAppData = {
    userAppData: {},
    isLoading: false,
    error: null,
}

export const userAppDataReducer = (state = initialStateUserAppData, action) => {
    switch (action.type) {
        case typeUserAppData.GET_USER_APPDATA:
            return {
                ...state,
                isLoading: true,
                error: null,
            }
        case typeUserAppData.GET_USER_APPDATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                userAppData: action.payload,
            }
        case typeUserAppData.GET_USER_APPDATA_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            }
        case typeUserAppData.UPDATE_USER_APPDATA:
            return {
                ...state,
                isLoading: true,
                error: null,
            }
        case typeUserAppData.UPDATE_USER_APPDATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                userAppData: action.payload,
            }
        case typeUserAppData.UPDATE_USER_APPDATA_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            }
        default:
            return state;
    }
}