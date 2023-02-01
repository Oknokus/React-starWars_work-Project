import PropTypes from 'prop-types';
import { useEffect, useState } from "react";

import { UseQueryParam } from "../../hooks/UseQueryParam";
import WithErrorApi from "../../hockHelper/";

import PeopleList from "../../components/peoplePage/peopleList";
import PeopleNavigation from "../../components/peoplePage/peopleNavigation";

import { getSwApiUrlData } from "../../utils/network";
import { getPeopleId, getPeopleImg, getPeoplePageId } from "../../services/getPeopleData.js";

import { SWAPI_URL_PEOPLE, SWAPI_URL_PATH_PAGE } from "../../constants/constants"; 


import styles from "./PeoplePage.module.css";


const PeoplePage = ({ setErrorApi }) => {
    const[peopleState, setPeopleState] = useState(null);
    const[nextPage, setNextPage] = useState(null);
    const[previousPage, setPreviousPage] = useState(null);
    const[nowPage, setNowPage] = useState(1);
   
    const queryParams = UseQueryParam();
    const query = queryParams.get("page");

    const getDataPeople = async(url) => {   
        const dataPeople = await getSwApiUrlData(url);     
 
        if(dataPeople) {           
           
        const peopleList = dataPeople.results.map(({ name, url }) => {  
            
            const id = getPeopleId(url);
            const img = getPeopleImg(id);

            return {
                name,
                url,
                id,
                img
            }
        })       

        setPeopleState(peopleList);
        setNowPage(getPeoplePageId(url));
        setNextPage(dataPeople.next);
        setPreviousPage(dataPeople.previous);

        setErrorApi(false);               
    } 
    else {
        setErrorApi(true);
    }  
} 

    useEffect(() => {
        getDataPeople(SWAPI_URL_PEOPLE+SWAPI_URL_PATH_PAGE+query);
    }, []);

    return(
        <>
         { peopleState && <PeopleNavigation nowPage={ nowPage } nextPage={ nextPage }  previousPage={ previousPage } getDataPeople={ getDataPeople } /> }     
         { peopleState && <PeopleList peopleState={ peopleState }/> }       
        </>
    )
}

PeoplePage.propTypes = {
    setErrorApi: PropTypes.func
}

export default WithErrorApi(PeoplePage);

