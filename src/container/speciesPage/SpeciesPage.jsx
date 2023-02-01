import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';


import { UseQueryParam } from "../../hooks/UseQueryParam";
import WithErrorApi from "../../hockHelper";

import SpeciesList from "../../components/speciesPage/speciesList";
import SpeciesNavigation from "../../components/speciesPage/speciesNavigation"

import { getSwApiUrlData } from "../../utils/network";
import { getSpeiesId, getSpeciesImg, getPageId } from "../../services/getContainerData";
 
import { SWAPI_URL_SPECIES, SWAPI_URL_PATH_PAGE } from "../../constants/constants";


import styles from './SpeciesPage.module.css';


const SpeciesPage = ({ setErrorApi }) => {
    const [speciesState, setSpeciesState] = useState(null);
    const [nextPage, setNextPage] = useState(null);
    const [previousPage, setPreviousPage] = useState(null);
    const [nowPage, setNowPage] = useState(null);

    const queryPage = UseQueryParam();
    const query = queryPage.get("page");    

    const getDataSpecies = async(url) => {
        const dataSpecies = await getSwApiUrlData(url);    
        
        if(dataSpecies) {
            const speciesList = dataSpecies.results.map(({ name, language, homeworld, films, url }) => {

                const id = getSpeiesId(url);
                const img = getSpeciesImg(id);
                          
                return {
                    name,
                    language,
                    homeworld,
                    films,
                    img,
                    id
                }
            })
            setSpeciesState(speciesList);
            setNextPage(dataSpecies.next);
            setPreviousPage(dataSpecies.previous);
            setNowPage(getPageId(url));
            setErrorApi(false);
        } else {
            setErrorApi(true);
        }
       
       
    }

    useEffect(() => {
        getDataSpecies(SWAPI_URL_SPECIES+SWAPI_URL_PATH_PAGE+query);
    },[])
    
    return (
        <>
            { speciesState && <SpeciesNavigation nextPage={ nextPage }  previousPage={ previousPage } nowPage={ nowPage } getDataSpecies={ getDataSpecies } /> } 
            { speciesState && <SpeciesList speciesState= { speciesState } /> } 
        </>
    )
}

SpeciesPage.propTypes = {
    setErrorApi: PropTypes.func
}

export default WithErrorApi(SpeciesPage);