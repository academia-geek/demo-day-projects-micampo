import { typeLoginCheck } from "../types/types";

export const loginCheckAction = (boolean) => {
    if (boolean) {
        return {
            type: typeLoginCheck.LOGIN_CHECK_TRUE,
            payload: boolean
        };
    } else {
        return {
            type: typeLoginCheck.LOGIN_CHECK_FALSE,
            payload: boolean
        };
    }
}