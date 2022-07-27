import { typeGetALlUsers } from "../types/types";
import { collection, getDocs } from 'firebase/firestore';
import { db } from "../../firebase/firebaseConfig";

export const getAllUsersAction = async () => {
    return async (dispatch) => {
        console.log('getAllUsersAction');
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
            console.log(users);
            dispatch({
                type: typeGetALlUsers.GET_ALL_USERS_SUCCESS,
                payload: users,
            })
        } catch {
            dispatch({
                type: typeGetALlUsers.GET_ALL_USERS_FAILURE,
                payload: 'Error',
            })
        }
            
    }
}