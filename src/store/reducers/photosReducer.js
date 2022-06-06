import { ActionTypes } from "../actions/types";

const initialState = {};

export const photosReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.GET_PHOTOS:
            return {
                ...state,
                ...payload
            };

        default:
            return state;
    }
};