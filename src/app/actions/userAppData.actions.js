import { typeUserAppData } from "../types/types";
import { initialStateUserAppData } from "../reducers/userAppData.reducers";

// userAppDataActions

export const getUserAppDataAction = (data) => {
    return {
        type: typeUserAppData.GET_USER_APPDATA_SUCCESS,
        payload: data,
    }
}