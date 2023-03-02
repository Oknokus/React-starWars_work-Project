import { omit } from 'lodash';

import { getLocalStorage } from "../../utils/localStorage";

import { 
    SET_NAME_PEOPLE,
    DELETE_NAME_PEOPLE,
    SET_NAME_SPECIES,
    DELETE_NAME_SPECIES,
    SET_NAME_STARSHIPS,
    DELETE_NAME_STARSHIPS,
    SET_NAME_VEHICLES,
    DELETE_NAME_VEHICLES    
    } from "../constantAction/constatnsAction";


const initialStatePerson = getLocalStorage("storePerson");
const initialSpeciesShips = getLocalStorage("storeSpecies");
const initialStateStarShips = getLocalStorage("storeStarShips");
const initialStateVehicles = getLocalStorage("storeVehicles");

export const peopleReducer = (state=initialStatePerson, action) => {
    switch (action.type) {
        case SET_NAME_PEOPLE:
            return {
                ...state,
                ...action.payload
            }  
        case DELETE_NAME_PEOPLE:
            return omit(state, [action.payload])            
        default:
            return state;
    }
}; 

export const speciesReducer = (state=initialSpeciesShips, action) => {
    switch (action.type) {
        case SET_NAME_SPECIES:
            return {
                ...state,
                ...action.payload
            }  
        case DELETE_NAME_SPECIES:
            return omit(state, [action.payload])            
        default:
            return state;
    }
}; 

export const starShipsReducer = (state=initialStateStarShips, action) => {
    switch (action.type) {
        case SET_NAME_STARSHIPS:
            return {
                ...state,
                ...action.payload
            }  
        case DELETE_NAME_STARSHIPS:
            return omit(state, [action.payload])            
        default:
            return state;
    }
}; 

export const vehiclesReducer = (state=initialStateVehicles, action) => {
    switch (action.type) {
        case SET_NAME_VEHICLES:
            return {
                ...state,
                ...action.payload
            }  
        case DELETE_NAME_VEHICLES:
            return omit(state, [action.payload])            
        default:
            return state;
    }
}; 


