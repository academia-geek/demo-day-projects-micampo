import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { facebook, google } from "../../firebase/firebaseConfig";
import { typesLogin } from "../types/types";

// ------------- Facebook Login Action ------------- //

export const loginWithFacebook = () => {
    return async (dispatch) => {
        const auth = getAuth();
        dispatch({ type: typesLogin.LOGIN });

        signInWithPopup(auth, facebook)
            .then(result => {
                dispatch({ type: typesLogin.LOGIN_SUCCESS, payload: result });
            })
            .catch(error => {
                const code = error.code;
                const message = error.message;
                dispatch({ type: typesLogin.LOGIN_FAILURE, payload: { code: code, message: message } });
            })
    }
}

// ------------- Google Login Action ------------- //

export const loginWithGoogle = () => {
    return (dispatch) => {
        const auth = getAuth();
        dispatch({ type: typesLogin.LOGIN });
        signInWithPopup(auth, google)
            .then(result => {
                dispatch({ type: typesLogin.LOGIN_SUCCESS, payload: result });
            })
            .catch(error => {
                const code = error.code;
                const message = error.message;
                dispatch({ type: typesLogin.LOGIN_FAILURE, payload: { code: code, message: message } });
            })
    }
}

// ------------- Login Action ------------- //

export const loginAction = (email, password) => {
    return async (dispatch) => {
        const auth = getAuth();
        dispatch({ type: typesLogin.LOGIN });
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                dispatch({ type: typesLogin.LOGIN_SUCCESS, payload: result });
            }
            )
            .catch(error => {
                const code = error.code;
                const message = error.message;
                dispatch({ type: typesLogin.LOGIN_FAILURE, payload: { code: code, message: message } });
            })
    }
}

// ------------- Logout Action ------------- //

export const logoutAction = () => {
    return (dispatch) => {
        const auth = getAuth();
        dispatch({ type: typesLogin.LOGOUT });
        signOut(auth)
            .then(result => {
                dispatch({ type: typesLogin.LOGOUT_SUCCESS, payload: result });
            }
            )
            .catch(error => {
                const code = error.code;
                const message = error.message;
                dispatch({ type: typesLogin.LOGOUT_FAILURE, payload: { code: code, message: message } });
            })
    }
}

// ------------- Register Action ------------- //

export const registerAction = (email, password, name) => {
    return async (dispatch) => {
        const auth = getAuth();
        dispatch({ type: typesLogin.REGISTER });
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                updateProfile(auth, { displayName: name })
                    .then(() => {
                        dispatch({ type: typesLogin.REGISTER_SUCCESS, payload: result });
                    }
                    )
                    .catch(error => {
                        const code = error.code;
                        const message = error.message;
                        dispatch({ type: typesLogin.REGISTER_FAILURE, payload: { code: code, message: message } });
                    })
            }).catch(error => {
                const code = error.code;
                const message = error.message;
                dispatch({ type: typesLogin.REGISTER_FAILURE, payload: { code: code, message: message } });
            })
    }
}
