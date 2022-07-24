import { typeUserAppData } from "../types/types";
import { initialStateUserAppData } from "../reducers/userAppData.reducers";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

// userAppDataActions

export const getUserAppDataAction = (data) => {
    return {
        type: typeUserAppData.GET_USER_APPDATA_SUCCESS,
        payload: data,
    }
}

export const updateUserAppDataAction = (data) => {
    return {
        type: typeUserAppData.UPDATE_USER_APPDATA_SUCCESS,
        payload: data,
    }
}