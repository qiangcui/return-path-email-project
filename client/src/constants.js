import axios from 'axios';

export const UPDATE_EMAIL_DATA = "email:updateEmailData";
export const CLEAR_EMAIL_DATA = "email:clearEmailData";
export const SET_LOADING_TRUE = "email:setLoadingTrue";
export const SET_LOADING_FALSE = "email:setLoadingFalse";
export const UPDATE_ERROR_DATA = "error:updateErrorData";
export const CLEAR_ERROR_DATA = "error:clearErrorData";
export const API_SERVER = axios.create();