import { ActionTypes } from "../actions/types";

const initialState = {
    users: []
};

export const usersReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.GET_USERS:
            return {
                ...state,
                ...payload
            };
        default:
            return state;
    }
};

export const selectedUserReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case ActionTypes.SELECTED_USER:
            return {
                ...state,
                ...payload
            };
        case ActionTypes.REMOVE_SELECTED_USER:
            return {};
        default:
            return state;
    }
};
