import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { facebook, google } from "../../firebase/firebaseConfig";
import { typesLogin } from "../types/types";

// ------------- Facebook Login Action ------------- //

export const loginWithFacebook = () => {
    return (dispatch) => {
        const auth = getAuth();
        dispatch({ type: typesLogin.LOGIN });
        try {
            const result = signInWithPopup(auth, facebook);
            dispatch({ type: typesLogin.LOGIN_SUCCESS, payload: result.user.uid });
        } catch (error) {
            dispatch({ type: typesLogin.LOGIN_FAILURE, payload: error.message });
        }
    }
}

// ------------- Google Login Action ------------- //

export const loginWithGoogle = () => {
    return (dispatch) => {
        const auth = getAuth();
        dispatch({ type: typesLogin.LOGIN });
        try {
            const result = signInWithPopup(auth, google);
            dispatch({ type: typesLogin.LOGIN_SUCCESS, payload: result.user.uid });
        } catch (error) {
            dispatch({ type: typesLogin.LOGIN_FAILURE, payload: error.message });
        }
    }
}

// ------------- Login Action ------------- //

export const loginAction = (email, password) => {
    return (dispatch) => {
        const auth = getAuth();
        dispatch({ type: typesLogin.LOGIN });
        try {
            const result = signInWithEmailAndPassword(auth, email, password);
            dispatch({ type: typesLogin.LOGIN_SUCCESS, payload: result.user.uid });
        } catch (error) {
            dispatch({ type: typesLogin.LOGIN_FAILURE, payload: error.message });
        }
    }
}

// ------------- Logout Action ------------- //

export const logoutAction = () => {
    return (dispatch) => {
        const auth = getAuth();
        dispatch({ type: typesLogin.LOGOUT });
        try {
            const result = signOut(auth);
            dispatch({ type: typesLogin.LOGOUT_SUCCESS, payload: result });
        } catch (error) {
            dispatch({ type: typesLogin.LOGOUT_FAILURE, payload: error.message });
        }
    }
}

// ------------- Register Action ------------- //

export const registerAction = (email, password, name) => {
    return async (dispatch) => {
        const auth = getAuth();
        dispatch({ type: typesLogin.REGISTER });
        try {
            const result = await createUserWithEmailAndPassword(auth, email, password)
                .then(async () => {
                    await updateProfile(auth.currentUser, { displayName: name });
                })
            dispatch({ type: typesLogin.REGISTER_SUCCESS, payload: result.user.uid });
        } catch (error) {
            dispatch({ type: typesLogin.REGISTER_FAILURE, payload: error.message });
        }
    }
}
