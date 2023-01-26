import {  
    SWAPI_URL_PATH_PEOPLE,
    SWAPI_URL,
    VISIAL_GUIDE_URL,
    VISIAL_GUIDE_URL_PATH_PEOPLE,
    VISIAL_GUIDE_EXTENSION
} from "../constants/constants";

export const getId = (url, category) => {
    const id = url
    .replace(SWAPI_URL+category, "")
    .replace(/\//g, "");

    return id;
};

export const getPeopleId = (url) => getId(url, SWAPI_URL_PATH_PEOPLE);
   

export const getPeopleImg = (id) => 
    `${VISIAL_GUIDE_URL}${VISIAL_GUIDE_URL_PATH_PEOPLE}/${id+VISIAL_GUIDE_EXTENSION}`;

