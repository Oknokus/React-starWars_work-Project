import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import WithErrorApi from "../../hockHelper/WithErrorApi";

import PersonInfo from "./personInfo";
import PersonImg from "./personImg";
import LinkGoBack from "../../components/linkGoBack";

import { getSwApiUrlData } from "../../utils/network";
import { personPageId, getPeopleImg } from "../../services/getContainerData";

import {  SWAPI_URL_PEOPLE } from "../../constants/constants";


import styles from "./PersonPage.module.css";


const PersonPage = ({ setErrorApi }) => {
    const [personStateName, setPersonStateName] = useState(null);
    const [personStateInfo, setPersonStateInfo] = useState(null);
    const [personStateImg, setPersonStateImg] = useState(null);

    useEffect(() => {
        ( async(url) => {
            const urlPersonPage = document.location.href;   
            const id = personPageId(urlPersonPage);  
          
            
            const dataPerson = await getSwApiUrlData(SWAPI_URL_PEOPLE+id);

            if(dataPerson) {
            
            setPersonStateName(dataPerson.name);
            setPersonStateInfo(
                [               
                { title: "Height", data: dataPerson.height },
                { title: "Mass", data: dataPerson.mass },
                { title: "Skin_color", data: dataPerson.skin_color },
                { title: "Gender", data: dataPerson.gender },
                { title: "Created", data: dataPerson.created },
                { title: "Birth_year", data: dataPerson.birth_year }              
            ]
            );
            setPersonStateImg(getPeopleImg(id))
            setErrorApi(false);
        } else {
            setErrorApi(true);
        };

        })(); 
    }, [])   

    return (
        <>
        <LinkGoBack />
        <div className={ styles.wrapper }>
                <span className={ styles.person__name }>{ personStateName }</span>
            <div className={ styles.container }>
                <PersonImg personStateImg={ personStateImg } personStateName={ personStateName } />    
                { personStateInfo && <PersonInfo personStateInfo={ personStateInfo } /> } 
            </div>
        </div>
        </>
    )
}

PersonPage.propTypes = {
    setErrorApi: PropTypes.func
}


export default WithErrorApi(PersonPage);

   