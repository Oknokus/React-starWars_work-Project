import { useEffect, useState } from "react";

import { SWAPI_URL_PEOPLE } from "../../constants/constants"; 

import PeopleList from "../../components/peoplePage/peopleList/index";

import { getSwApiUrlData } from "../../utils/network";
import { getPeopleId, getPeopleImg } from "../../services/getPeopleData.js";
import WithErrorApi from "../../hockHelper/";


import styles from "./PeoplePage.module.css";


const PeoplePage = ({ setErrorApi }) => {
    const[peopleState, setPeopleState] = useState(null);

    const getData = async(url) => {
        const data = await getSwApiUrlData(url);
        

        if(data) {
        const peopleList = data.results.map(({ name, url }) => {  
            
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
        getData(SWAPI_URL_PEOPLE);
    }, []);

    return(
        <>
         { peopleState && <PeopleList peopleState={peopleState} /> }       
        </>
    )
}

export default WithErrorApi(PeoplePage);

