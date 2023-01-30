import {  
    SWAPI_URL_PATH_PEOPLE,
    SWAPI_URL_PATH_SPECIES, 
    SWAPI_URL_PATH_STARSHIPS,
    SWAPI_URL,   
    VISIAL_GUIDE_URL,
    VISIAL_GUIDE_URL_PATH_PEOPLE,
    VISIAL_GUIDE_URL_PATH_SPECIES,
    VISIAL_GUIDE_URL_PATH_STARSHIPS,
    VISIAL_GUIDE_EXTENSION
} from "../constants/constants";

export const getId = (url, category) => {
    const id = url
    .replace(SWAPI_URL+category, "")
    .replace(/\//g, "");

    return id;
};

export const getPeopleId = (url) => getId(url, SWAPI_URL_PATH_PEOPLE);
export const getSpeiesId = (url) => getId(url, SWAPI_URL_PATH_SPECIES);
export const getStarShipsId = (url) => getId(url, SWAPI_URL_PATH_STARSHIPS);



export const getPeopleImg = (id) => 
    `${VISIAL_GUIDE_URL}${VISIAL_GUIDE_URL_PATH_PEOPLE}/${id+VISIAL_GUIDE_EXTENSION}`;

export const getSpeciesImg = (id) => 
    `${VISIAL_GUIDE_URL}${VISIAL_GUIDE_URL_PATH_SPECIES}/${id+VISIAL_GUIDE_EXTENSION}`;

    export const getStarShipsImg = (id) => 
    `${VISIAL_GUIDE_URL}${VISIAL_GUIDE_URL_PATH_STARSHIPS}/${id+VISIAL_GUIDE_EXTENSION}`;

