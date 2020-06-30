import axios from 'axios';

export const VALIDATE_LOGIN = 'VALIDATE_LOGIN';

export const SET_USER_DATA = 'SET_USER_DATA';

export const SEARCH_USER = 'SEARCH_USER';

export const ADD_USER = 'ADD_USER';

export const validateLogin = (loginData) => ({type: VALIDATE_LOGIN, payload: loginData});

export const searchUser = (searchTag) => ({type:SEARCH_USER, payload: searchTag});

export const addUser = (userData) => ({type:ADD_USER, payload: userData});

export function getUserData() {
    return dispatch => {
        return axios.get('https://randomuser.me/api/0.8/?results=20');
    }
} 


export const setUserData = (userData) => ({ type: SET_USER_DATA, payload: userData});

