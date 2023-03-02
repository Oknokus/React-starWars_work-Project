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

export const setPeopleName = (name) => {
    return(
        {
    type: SET_NAME_PEOPLE,
    payload: name
    }
    )
};

export const deletePeopleName = (nameId) => {
    return(
        {
    type: DELETE_NAME_PEOPLE,
    payload: nameId
    }
    )
};

export const setSpeciesName = (name) => {
    return(
        {
    type: SET_NAME_SPECIES,
    payload: name
    }
    )
}

export const deleteSpeciesName = (nameId) => {
    return(
        {
    type: DELETE_NAME_SPECIES,
    payload: nameId
    }
    )
};

export const setStarShipsName = (name) => {
    return(
        {
    type: SET_NAME_STARSHIPS,
    payload: name
    }
    )
};

export const deleteStarShipsName = (nameId) => {
    return(
        {
    type: DELETE_NAME_STARSHIPS,
    payload: nameId
    }
    )
};

export const setVehiclesName = (name) => {
    return(
        {
    type: SET_NAME_VEHICLES,
    payload: name
    }
    )
};

export const deleteVehiclesName = (nameId) => {
    return(
        {
    type: DELETE_NAME_VEHICLES,
    payload: nameId
    }
    )
};


