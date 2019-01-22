import {
    UPDATE_EMAIL_DATA,
    UPDATE_ERROR_DATA,
    CLEAR_ERROR_DATA,
    CLEAR_EMAIL_DATA,
    SET_LOADING_TRUE,
    SET_LOADING_FALSE,
} from "../../constants";


const initialState = {
    email_data: [],
    isLoading: false,
    error: {}
};

const EmailDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_EMAIL_DATA:
            return {
                ...state,
                email_data: [...state.email_data, ...action.payload.email_data]
            };
        case CLEAR_EMAIL_DATA:
            return {
                ...state,
                email_data: []
            };
        case SET_LOADING_FALSE:
            return {
              ...state,
              isLoading: false
            };
        case SET_LOADING_TRUE:
            return {
                ...state,
                isLoading: true
            };
        case UPDATE_ERROR_DATA:
            return {
                ...state,
                error: action.payload.error
            };
        case CLEAR_ERROR_DATA:
            return {
                ...state,
                error: {}
            };
        default:
            return state;
    }
};

export default EmailDataReducer;