import { typeGetALlUsers } from "../types/types";

export const getAllUsersReducer = (state = {}, action) => {
    switch (action.type) {
        case typeGetALlUsers.GET_ALL_USERS:
        return {
            ...state,
            isLoading: true,
            error: null,
        };
        case typeGetALlUsers.GET_ALL_USERS_SUCCESS:
        return {
            ...state,
            isLoading: false,
            error: null,
            users: action.payload,
        };
        case typeGetALlUsers.GET_ALL_USERS_FAILURE:
        return {
            ...state,
            isLoading: false,
            error: action.payload,
        };
        default:
        return state;
    }
}