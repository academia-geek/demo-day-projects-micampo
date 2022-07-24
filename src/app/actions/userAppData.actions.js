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

export const ValidateUserAppDataAction = (userUID) => {
    return async () => {
        const docRef = doc(db, 'usuarios', userUID);
        const consult = await getDoc(docRef);
        const data = consult.data().data;
        if (data.age === '' ||
            data.gender === '' ||
            data.type === '' ||
            data.ubication === '') {
            return false
        } else {
            return true
        }
    }
}