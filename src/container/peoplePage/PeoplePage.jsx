import { useEffect, useState } from "react";

import WithErrorApi from "../../hockHelper/";

import PeopleList from "../../components/peoplePage/peopleList/index";

import { getSwApiUrlData } from "../../utils/network";
import { getPeopleId, getPeopleImg } from "../../services/getPeopleData.js";

import { SWAPI_URL_PEOPLE } from "../../constants/constants"; 


import styles from "./PeoplePage.module.css";


const PeoplePage = ({ setErrorApi }) => {
    const[peopleState, setPeopleState] = useState(null);

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
        setErrorApi(false);               
    } 
    else {
        setErrorApi(true);
    }  
} 

    useEffect(() => {
        getDataPeople(SWAPI_URL_PEOPLE);
    }, []);

    return(
        <>
         { peopleState && <PeopleList peopleState={ peopleState } /> }       
        </>
    )
}

export default WithErrorApi(PeoplePage);

