import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { typeGetALlUsers } from "../types/types";

export const getAllUsersAction = () => {
    return async (dispatch) => {
        dispatch({
            type: typeGetALlUsers.GET_ALL_USERS,
        });
        try {
            const collectionRef = collection(db, 'usuarios');
            const docs = await getDocs(collectionRef);
            const users = [];
            docs.forEach((element) => {
                users.push({ ...element.data() });
            })
            dispatch({
                type: typeGetALlUsers.GET_ALL_USERS_SUCCESS,
                payload: users,
            })
        } catch (error) {
            dispatch({
                type: typeGetALlUsers.GET_ALL_USERS_FAILURE,
                payload: error,
            });
        }
    }
}