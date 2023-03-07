import { combineReducers } from "redux";

import { 
    peopleReducer,
    speciesReducer,
    starShipsReducer,
    vehiclesReducer

} from "./favoritesReducer";


export default combineReducers({
    peopleReducer,
    speciesReducer,
    starShipsReducer,
    vehiclesReducer
});
