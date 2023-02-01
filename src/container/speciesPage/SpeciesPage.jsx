import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import WithErrorApi from "../../hockHelper";

import SpeciesList from "../../components/speciesPage/speciesList";

import { getSwApiUrlData } from "../../utils/network";
import { getSpeiesId, getSpeciesImg } from "../../services/getPeopleData";
 
import { SWAPI_URL_SPECIES } from "../../constants/constants";


import styles from './SpeciesPage.module.css';


const SpeciesPage = ({ setErrorApi }) => {
    const [speciesState, setSpeciesState] = useState(null);

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
            setErrorApi(false);
        } else {
            setErrorApi(true);
        }
       
       
    }

    useEffect(() => {
        getDataSpecies(SWAPI_URL_SPECIES);
    },[])
    
    return (
        <> 
         {speciesState && <SpeciesList speciesState= { speciesState } /> } 
        </>
    )
}

SpeciesPage.propTypes = {
    setErrorApi: PropTypes.func
}

export default WithErrorApi(SpeciesPage);