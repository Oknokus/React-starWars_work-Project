import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import WithErrorApi from "../../hockHelper"

import StarShipsList from "../../components/starShipsPage/starShipsList";

import { getSwApiUrlData } from "../../utils/network";
import { getStarShipsId, getStarShipsImg } from "../../services/getPeopleData";

import { SWAPI_URL_STARSHIPS } from "../../constants/constants";



import styles from "./StartShipsPage.module.css";


const StartShipsPage = ({ setErrorApi }) => {
    const [starShipsState, setStarShipsState] = useState(null);

    const getDataStarShips = async(url) => {      

        const dataStarships =  await getSwApiUrlData(url);

        if(dataStarships) {

        const starShipsList = dataStarships.results.map(({ name, url, model, created, length }) => {

            const id = getStarShipsId(url);
            const img = getStarShipsImg(id);
           
            return {
                name,              
                model,
                created,
                length,
                id,
                img
            }
        });
    
        setStarShipsState(starShipsList);
        setErrorApi(false);
    } else {
        setErrorApi(true);
    }
    }
   

    useEffect(() => {
        getDataStarShips(SWAPI_URL_STARSHIPS)
    }, [])
    
    return ( 
        <>    
            { starShipsState && <StarShipsList starShipsState={starShipsState} /> }
        </> 
    )       
}

StartShipsPage.propTypes = {
    setErrorApi: PropTypes.func
};


export default WithErrorApi(StartShipsPage);