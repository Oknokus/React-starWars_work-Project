import PropTypes from 'prop-types';
import React, { useEffect, useState,  Suspense } from 'react';
import { useSelector } from 'react-redux';

import WithErrorApi from "../../../hockHelper/WithErrorApi";

import PersonInfo from "./personInfo";
import PersonImg from "./personImg";
import LinkGoBack from "../../linkGoBack";
import UiLoading from "../../ui/uiLoading";

import { getSwApiUrlData } from "../../../utils/network";
import { personPageId, getPeopleImg } from "../../../services/getContainerData";

import {  SWAPI_URL_PEOPLE } from "../../../constants/constants";


import styles from "./PersonPage.module.css";


const PersonFilms = React.lazy(() => import("./personFilms"));


const PersonPage = ({ setErrorApi }) => {    
    const [personStateName, setPersonStateName] = useState(null);
    const [personStateInfo, setPersonStateInfo] = useState(null);
    const [personStateId, setPersonStateId] = useState(null);
    const [personStateImg, setPersonStateImg] = useState(null);
    const [personStateFilms, setPersonStateFilms] = useState(null);
    const [favoritesStatePerson, setFavoritesStatePerson] = useState(null);
    
    const peopleState = useSelector(state => state.peopleReducer);
    

    useEffect(() => {
        ( async() => {
          
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
            setPersonStateImg(getPeopleImg(id));
            setPersonStateId(id);
            if(dataPerson.films.length) {
                setPersonStateFilms(dataPerson.films);
            };           
            peopleState[id] ? setFavoritesStatePerson(true) : setFavoritesStatePerson(false);  
            setErrorApi(false);
        } else {
            setErrorApi(true);
        };

        })(); 
    }, [peopleState])   

    return (
        <>
        <LinkGoBack />        
        
        <div className={ styles.wrapper }>
                <span className={ styles.person__name }>{ personStateName }</span>
            <div className={ styles.container }>
                <PersonImg personStateImg={ personStateImg } personStateName={ personStateName } personStateId={personStateId} favoritesStatePerson={ favoritesStatePerson }  setFavoritesStatePerson={ setFavoritesStatePerson }   />    
                { personStateInfo && <PersonInfo personStateInfo={ personStateInfo } /> } 
                
                { personStateFilms && (
                <Suspense fallback={ <UiLoading /> }>
                <PersonFilms personStateFilms={ personStateFilms } /> 
                </Suspense>
                )}

            </div>
        </div>
        </>
    )
}

PersonPage.propTypes = {
    setErrorApi: PropTypes.func
};

export default WithErrorApi(PersonPage);

   