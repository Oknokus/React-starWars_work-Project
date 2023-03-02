import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'; 

import { setLocalStorage } from "../../utils/localStorage";

import combineReducers from "../reducer/index";
 
export const store = createStore(
    combineReducers,
    composeWithDevTools(applyMiddleware(thunk))
    );

    store.subscribe(()=> {       
        setLocalStorage("storePerson", store.getState().peopleReducer);
        setLocalStorage("storeSpecies", store.getState().speciesReducer);
        setLocalStorage("storeStarShips", store.getState().starShipsReducer);
        setLocalStorage("storeVehicles", store.getState().vehiclesReducer);
    });