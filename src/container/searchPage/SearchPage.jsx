import PropTypes from 'prop-types';
import { useCallback, useState } from 'react';
import { debounce } from 'lodash';

import WithErrorApi from "../../hockHelper/WithErrorApi";

import SearchPeopleInfo from "../../components/peoplePage/searchPeopleInfo";

import { SWAPI_URL_SEARHC_PEOPLE } from "../../constants/constants";


import { getSwApiUrlData } from "../../utils/network";
import { getPeopleId, getPeopleImg } from "../../services/getContainerData";


import styles from "./SearchPage.module.css";


const SearchPage = ({ setErrorApi }) => {
    const[eventInputValue, setEventInputValue] = useState("");
    const[statePeopleSearch, setStatePeopleSearch] = useState([]);


    const getSearcPeopleApi = async(params) => {
        const result = await getSwApiUrlData(SWAPI_URL_SEARHC_PEOPLE+params);
        console.log(params)  

        if(result) {
            const peopleList = result.results.map(({name, url})=> {
               
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
        }   else {
            setErrorApi(true)
        };     
    };
  
   const deboncegetSearcPeopleApi = useCallback( 
   debounce(eventsInput => getSearcPeopleApi(eventsInput), 600),
   [])

    const handleInputChange = (event) => {
        const eventsInput = event.target.value;
              
        setEventInputValue(eventsInput);
        deboncegetSearcPeopleApi(eventsInput);
       
    }

    return (
        <>
            <h1 className="header__text">SearchPage</h1>
            <input 
                className={ styles.input__search }        
                value={ eventInputValue }
                onChange={ handleInputChange }
                placeholder="Input characters's name"              
                type="text" 
            />
        
        <SearchPeopleInfo statePeopleSearch={ statePeopleSearch } /> 
        </>
    )
}

SearchPage.propTypes = {
    setErrorApi:PropTypes.func
}

export default WithErrorApi(SearchPage);