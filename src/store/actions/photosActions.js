import { ActionTypes } from './types';

export const getPhotos = (photos) => {
    return {
        type: ActionTypes.GET_PHOTOS,
        payload: photos,
    };
};