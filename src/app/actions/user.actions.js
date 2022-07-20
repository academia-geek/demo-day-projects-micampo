import { typesUser } from "../types/types";
import { deleteUser, getAuth, onAuthStateChanged, RecaptchaVerifier, signInWithPhoneNumber, updateEmail, updateProfile } from "firebase/auth";

export const getUserAction = () => {
    const auth = getAuth();
    return (dispatch) => {
        dispatch({ type: typesUser.GET_USER });
        onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch({ type: typesUser.GET_USER_SUCCESS, payload: user });
            } else {
                dispatch({ type: typesUser.GET_USER_FAILURE });
            }
        }
        );
    }
}

export const updateUserAction = (user, name) => {
    const auth = getAuth();
    return async (dispatch) => {
        dispatch({ type: typesUser.UPDATE_USER });
        await updateProfile(auth.currentUser, { displayName: name, })
            .then(() => {
                dispatch({ type: typesUser.UPDATE_USER_SUCCESS, payload: user });
            }).catch((error) => {
                dispatch({ type: typesUser.UPDATE_USER_FAILURE, payload: error.message });
            }
            );
    }
}

export const deleteUserAction = () => {
    const auth = getAuth();
    const user = auth.currentUser;
    return (dispatch) => {
        dispatch({ type: typesUser.DELETE_USER });
        deleteUser(user)
            .then(() => {
                dispatch({ type: typesUser.DELETE_USER_SUCCESS });
            })
            .catch((error) => {
                dispatch({ type: typesUser.DELETE_USER_FAILURE, payload: error.message });
            });
    }
}


export const updatePasswordAction = (user, password) => {
    const auth = getAuth();
    return (dispatch) => {
        dispatch({ type: typesUser.UPDATE_PASSWORD });
        auth.currentUser.updatePassword(password).then(() => {
            dispatch({ type: typesUser.UPDATE_PASSWORD_SUCCESS, payload: user });
        }).catch((error) => {
            dispatch({ type: typesUser.UPDATE_PASSWORD_FAILURE, payload: error.message });
        }
        );
    }
}

export const updatePhotoAction = (user, photo) => {
    const auth = getAuth();
    return (dispatch) => {
        dispatch({ type: typesUser.UPDATE_PHOTO });
        updateProfile(auth.currentUser, { photoURL: photo, }).then(() => {
            dispatch({ type: typesUser.UPDATE_PHOTO_SUCCESS, payload: user });
        }).catch((error) => {
            dispatch({ type: typesUser.UPDATE_PHOTO_FAILURE, payload: error.message });
        }
        );
    }
}

export const updateEmailAction = (user, email) => {
    const auth = getAuth();
    return (dispatch) => {
        dispatch({ type: typesUser.UPDATE_EMAIL });
        updateEmail(auth.currentUser, email)
            .then(() => {
                dispatch({ type: typesUser.UPDATE_EMAIL_SUCCESS, payload: user });
            }).catch((error) => {
                dispatch({ type: typesUser.UPDATE_EMAIL_FAILURE, payload: error.message });
            }
            );
    }
}

export const setUpRecaptcha = (user, phoneNumber) => {
    const auth = getAuth();
    return (dispatch) => {
        dispatch({ type: typesUser.SET_UP_RECAPTCHA });
        const recaptchaVerifier = new RecaptchaVerifier(
            'recaptcha-container',
            {},
            auth
        )
        recaptchaVerifier.render()
        signInWithPhoneNumber(auth, phoneNumber, recaptchaVerifier)
            .then(() => {
                dispatch({ type: typesUser.SET_UP_RECAPTCHA_SUCCESS, payload: user });
            }).catch((error) => {
                dispatch({ type: typesUser.SET_UP_RECAPTCHA_FAILURE, payload: error.message });
            });
    }
};