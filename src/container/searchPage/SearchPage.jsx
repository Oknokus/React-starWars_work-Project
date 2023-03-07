import PropTypes from 'prop-types';
import { useCallback, useState } from 'react';
import { debounce } from 'lodash';

import WithErrorApi from "../../hockHelper/WithErrorApi";

import SearchPeopleInfo from "../../components/peoplePage/searchPeopleInfo";
import SearchSpeciesInfo from "../../components/speciesPage/searchSpeciesInfo";
import SearchStarShipsInfo from "../../components/starShipsPage/searchStarShipsInfo";
import SearchVehiclesInfo from "../../components/vehiclesPage/searchVehiclesInfo";
import UiInput from "../../components/Ui/uiInput/UiInput";

import {
    SWAPI_URL_SEARHC_PEOPLE,
    SWAPI_URL_SEARHC_SPECIES,
    SWAPI_URL_SEARHC_STARSHIPS,
    SWAPI_URL_SEARHC_VEHICLES
 } from "../../constants/constants";


import { getSwApiUrlData } from "../../utils/network";
import { 
    getPeopleId, getPeopleImg,
    getSpeiesId, getSpeciesImg,
    getStarShipsId, getStarShipsImg,
    getVehiclesId, getVehiclesImg
} from "../../services/getContainerData";


import styles from "./SearchPage.module.css";


const SearchPage = ({ setErrorApi }) => {
    const[eventInputValue, setEventInputValue] = useState("");

    const[statePeopleSearch, setStatePeopleSearch] = useState([]);
    const[stateSpeciesSearch, setStateSpeciesSearch] = useState([]);
    const[stateStarShipsSearch, setStateStarShipsSearch] = useState([]);
    const[stateVehiclesSearch, setStateVehiclesSearch] = useState([]);
   

    const getSearcPeopleApi = async(params) => {
        const resultPeople = await getSwApiUrlData(SWAPI_URL_SEARHC_PEOPLE+params);      

        if(resultPeople) {
            const peopleList = resultPeople.results.map(({name, url})=> {               
                const id = getPeopleId(url);
                const img = getPeopleImg(id);                

                return {
                    name,
                    id,
                    img
                };
            });

            setStatePeopleSearch(peopleList);
            setErrorApi(false);
        } else  {
            setErrorApi(true)
        };      
        
    };

    const getSearcSpeciesApi = async(params) => {
        const resultSpecies = await getSwApiUrlData(SWAPI_URL_SEARHC_SPECIES+params);
      
        if(resultSpecies) {
            const speciesList = resultSpecies.results.map(({name, url})=> {               
                const id = getSpeiesId(url);
                const img = getSpeciesImg(id);                

                return {
                    name,
                    id,
                    img
                };
            });

            setStateSpeciesSearch(speciesList);
            setErrorApi(false);
        } 
        else  {
            setErrorApi(true)
        };    
    };

    const getSearcStarShipsApi = async(params) => {
        const resultStarShips = await getSwApiUrlData(SWAPI_URL_SEARHC_STARSHIPS+params); 
      
        if(resultStarShips) {
            const starShipsList = resultStarShips.results.map(({name, url})=> {               
                const id = getStarShipsId(url);
                const img = getStarShipsImg(id);                

                return {
                    name,
                    id,
                    img
                };
            });

            setStateStarShipsSearch(starShipsList);
            setErrorApi(false);
        } 
        else  {
            setErrorApi(true)
        }; 
    };

    const getSearcVehiclesApi = async(params) => {
        const resultVehicles = await getSwApiUrlData(SWAPI_URL_SEARHC_VEHICLES+params);  
        
        if(resultVehicles) {
        const vehiclesList = resultVehicles.results.map(({name, url})=> {               
            const id = getVehiclesId(url);
            const img = getVehiclesImg(id);                

            return {
                name,
                id,
                img
            };
        });

        setStateVehiclesSearch(vehiclesList);
        setErrorApi(false);
    }
        else {
            setErrorApi(true);
        }
    };           
    


   const deboncegetSearcApiPeople = useCallback( 
    debounce(value => getSearcPeopleApi(value)
    , 600),
    []);

   const deboncegetSearcApiSpecies = useCallback( 
    debounce(value => getSearcSpeciesApi(value)
    , 600),
    [])

    const deboncegetSearcApiStarShips = useCallback(    
    debounce(value => getSearcStarShipsApi(value)
    , 600),
    [])

    const deboncegetSearcApiVehicles = useCallback( 
    debounce(value => getSearcVehiclesApi(value)
    , 600),
    [])


    const handleInputChange = (event) => {                     
        setEventInputValue(event);

        deboncegetSearcApiPeople(event);
        deboncegetSearcApiSpecies(event);
        deboncegetSearcApiStarShips(event);
        deboncegetSearcApiVehicles(event);
    }
   
    return (
        <>
            <h1 className="header__text">SearchPage</h1>
           
            <UiInput 
                classes={ styles.input__search } 
                value={ eventInputValue }  
                handleInputChange={ handleInputChange } 
                placeholder="Input characters's name" />

            
                { statePeopleSearch.length || stateSpeciesSearch.length ? ( 
                <div className={ styles.container }>
                    <SearchPeopleInfo 
                    statePeopleSearch={ statePeopleSearch } 
                    /> 
    
                <SearchSpeciesInfo   
                    stateSpeciesSearch= { stateSpeciesSearch } 
                    /> 

                <SearchStarShipsInfo   
                    stateStarShipsSearch= { stateStarShipsSearch } 
                    /> 

                <SearchVehiclesInfo   
                    stateVehiclesSearch= { stateVehiclesSearch } 
                    /> 
                </div>)
                :  <h2 className={styles.person__comment}>No results</h2> }
            
           
        </>
    )
}

SearchPage.propTypes = {
    setErrorApi:PropTypes.func
}

export default WithErrorApi(SearchPage);