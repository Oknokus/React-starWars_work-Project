import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import { UseQueryParam } from "../../hooks/UseQueryParam";
import WithErrorApi from "../../hockHelper";

import StarShipsList from "../../components/starShipsPage/starShipsList";
import StarShipsNavigation from "../../components/starShipsPage/starShipsNavigation";

import { getSwApiUrlData } from "../../utils/network";
import { getStarShipsId, getStarShipsImg, getPageId } from "../../services/getContainerData";

import { SWAPI_URL_STARSHIPS, SWAPI_URL_PATH_PAGE } from "../../constants/constants";



import styles from "./StartShipsPage.module.css";


const StartShipsPage = ({ setErrorApi }) => {
    const [starShipsState, setStarShipsState] = useState(null);
    const [nextPage, setNextPage] = useState(null);
    const [previousPage, setPreviousPage] = useState(null);
    const [nowPage, setNowPage] = useState(null);
    
    const queryPage = UseQueryParam();
    const query = queryPage.get("page");   

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
        setNextPage(dataStarships.next);
        setPreviousPage(dataStarships.previous);
        setNowPage(getPageId(url));
        setErrorApi(false);
    } else {
        setErrorApi(true);
    }
    }
   

    useEffect(() => {
        getDataStarShips(SWAPI_URL_STARSHIPS+SWAPI_URL_PATH_PAGE+query)
    }, [])
    
    return ( 
        <>
            { starShipsState &&
                <StarShipsNavigation 
                    nextPage={ nextPage }  
                    previousPage={ previousPage } 
                    nowPage={ nowPage } 
                    getDataStarShips={ getDataStarShips } /> }     
            
            { starShipsState && 
                <StarShipsList 
                    starShipsState={starShipsState} /> }
        </> 
    )       
}

StartShipsPage.propTypes = {
    setErrorApi: PropTypes.func
};


export default WithErrorApi(StartShipsPage);