import updateHelper from 'react-addons-update';
import { 
    SHOW_CREATE_USER,
    SHOW_EDIT_USER,
    DELETE_USER,
    HIDE_CREATE_USER, 
    CREATE_OR_UPDATE_USER,
    UPDATE_USER_FORM,
    FETCH_USER_LIST, 
    SHOW_LOADING,
    HIDE_LOADING,
} from '../common/contentType';

import {
    fetchUserListService,
    saveUserService,
    deleteUserService,
} from '../service/user';

export const fetchUserList = (params) => {
    return (dispatch, getState) => {
        dispatch({ type: SHOW_LOADING })
        fetchUserListService(params).then(res => {
            dispatch({ type: HIDE_LOADING })
            return dispatch({ type: FETCH_USER_LIST, users: res.users })
        })
    }
}

// show create user form
export const showCreateUser = () => ({ type: SHOW_CREATE_USER })
// show edit user form
export const showEditUser = user => ({ type: SHOW_EDIT_USER, user })
// hide create user form
export const hideCreateUser = user => ({ type: HIDE_CREATE_USER })
// delete a user
export const deleteUser = user => {
    return (dispatch, getState) => {
        dispatch({ type: SHOW_LOADING })
        deleteUserService(user).then(res => {
            dispatch({ type: HIDE_LOADING })
            dispatch({ type: DELETE_USER, user })
        })
    }
}

// update user field
export const updateUserField = (user, field, value) => (dispatch, getState) => {
    const newUser = updateHelper(user, {
        [field]: { $set: value }
    })
    return dispatch({ type: UPDATE_USER_FORM, user: newUser })
}
// update user field
export const updateUserCitiesField = (user, field, value) => (dispatch, getState) => {
    const newUser = updateHelper(user, {
        city: { [field]: { $set: value } }
    })
    return dispatch({ type: UPDATE_USER_FORM, user: newUser })
}

// create or update user
export const createOrUpdateUser = user => {
    return (dispatch, getState) => {
        dispatch({ type: SHOW_LOADING })
        saveUserService(user).then(res => {
            dispatch({ type: HIDE_LOADING })
            dispatch({ type: CREATE_OR_UPDATE_USER, user })
        })
    }
}