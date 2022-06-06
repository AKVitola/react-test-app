import { ActionTypes } from './types';

export const getUsers = (users) => {
    return {
        type: ActionTypes.GET_USERS,
        payload: users
    };
};

export const selectedUser = (user) => {
    return {
        type: ActionTypes.SELECTED_USER,
        payload: user
    };
};

export const removeSelectedUser = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_USER
    };
};