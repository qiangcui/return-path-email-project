import {
    API_SERVER,
    UPDATE_EMAIL_DATA,
    UPDATE_ERROR_DATA,
    CLEAR_ERROR_DATA,
    CLEAR_EMAIL_DATA,
    SET_LOADING_TRUE,
    SET_LOADING_FALSE,
} from "../../constants";

export const updateEmailData = (new_email_data) => {
    return {
        type: UPDATE_EMAIL_DATA,
        payload: {
            email_data: new_email_data
        }
    }
};

export const clearEmailData = () => {
    return {
        type: CLEAR_EMAIL_DATA,
        payload: null
    }
};

export const updateErrorData = (new_error_message) => {
    return {
        type: UPDATE_ERROR_DATA,
        payload: {
            error: new_error_message
        }
    }
};

export const clearErrorData = () => {
    return {
        type: CLEAR_ERROR_DATA
    }
};

export const setLoadingTrue = () => {
    return {
        type: SET_LOADING_TRUE
    }
};

export const setLoadingFalse = () => {
    return {
        type: SET_LOADING_FALSE
    }
};

export function getEmailDataFromServer(files) {
    return dispatch => {
        let formData = new FormData();

        Object.keys(files).forEach((key) => {
            formData.append('email[]', files[key]);
        });

        dispatch(setLoadingTrue());

        API_SERVER.post('api/file', formData)
        .then(res => {
            dispatch(setLoadingFalse());
            dispatch(clearErrorData());
            dispatch(updateEmailData(res.data));
        }).catch((error) => {
            dispatch(setLoadingFalse());
            dispatch(updateErrorData(error.response));
        });
    }
}


