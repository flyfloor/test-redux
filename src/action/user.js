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
        fetchUserListService(params).then(res => {
            return dispatch({ type: FETCH_USER_LIST, users: res.users })
        })
    }
}
