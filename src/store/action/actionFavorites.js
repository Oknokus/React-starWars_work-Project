import { SET_NAME_FAVORITES, DELETE_NAME_FAVORITES } from "../constantAction/constatnsAction";

export const setFavoritesName = (name) => {
    return(
        {
    type: SET_NAME_FAVORITES,
    payload: name
    }
    )
}

export const deleteFavoritesName = (nameId) => {
    return(
        {
    type: DELETE_NAME_FAVORITES,
    payload: nameId
    }
    )
}