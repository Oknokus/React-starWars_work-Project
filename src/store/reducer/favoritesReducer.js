import { omit } from 'lodash';
import { SET_NAME_FAVORITES, DELETE_NAME_FAVORITES } from "../constantAction/constatnsAction";

const initialState = {};

export const favoritesReducer = (state=initialState, action) => {
    switch (action.type) {
        case SET_NAME_FAVORITES:
            return {
                ...state,
                ...action.payload
            }  
        case DELETE_NAME_FAVORITES:
            return omit(state, [action.payload])            
        default:
            return state;
    }
}; 