import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import React, { useEffect, useState,  Suspense } from 'react';

import { WithErrorApi } from "../../../hockHelper/WithErrorApi";

import SpeciesInfo from "../speciesPageInfo/speciesInfo";
import SpeciesImg from "./speciesImg";



import LinkGoBack from "../../linkGoBack";
import UiLoading from "../../ui/uiLoading";

import { getSwApiUrlData } from "../../../utils/network";
import { speciesPageId, getSpeciesImg } from "../../../services/getContainerData";

import { SWAPI_URL_SPECIES } from "../../../constants/constants";

import styles from "./SpeciesPageInfo.module.css";


 const SpeciesFilms = React.lazy(() => import("./speciesFilms"));


const SpeciesPageInfo = ({ setErrorApi }) => {    
    const [speciesStateName, setSpeciesStateName] = useState(null);
    const [speciesStateInfo, setSpeciesStateInfo] = useState(null);
    const [speciesStateId, setSpeciesStateId] = useState(null);
    const [speciesStateImg, setSpeciesStateImg] = useState(null);
    const [speciesStateFilms, setSpeciesStateFilms] = useState(null);
    const [favoritesStateSpecies, setFavoritesStateSpecies] = useState(null);
    
    const speciesState= useSelector(state => state.speciesReducer);  
   

    useEffect(() => {
        ( async() => {
          
            const urlSpeciesPage = document.location.href;              
            const id = speciesPageId(urlSpeciesPage);   
                       
                               
            const dataSpecies = await getSwApiUrlData(SWAPI_URL_SPECIES+id);                   
              
            if(dataSpecies) { 
                setSpeciesStateName(dataSpecies.name);
                setSpeciesStateInfo(
                [                             
                { title: "Language", data: dataSpecies.language },
                { title: "Skin_color", data: dataSpecies.skin_color },
                { title: "Eye_colors", data: dataSpecies.eye_colors }                            
            ]
            );

            setSpeciesStateImg(getSpeciesImg(id));
            setSpeciesStateId(id);
            if(dataSpecies.films.length) {
                setSpeciesStateFilms(dataSpecies.films);
            };        

            speciesState[id] ? setFavoritesStateSpecies(true) : setFavoritesStateSpecies(false);  
           
            setErrorApi(false);
        } else {
            setErrorApi(true);
        };

        })(); 
    }, [speciesState])   

    return (
        <>
        <LinkGoBack />        
        
        <div className={ styles.wrapper }>
                <span className={ styles.person__name }>{ speciesStateName }</span>
            <div className={ styles.container }>
                <SpeciesImg speciesStateImg={ speciesStateImg } speciesStateName={ speciesStateName } speciesStateId={speciesStateId} favoritesStateSpecies={ favoritesStateSpecies }  setFavoritesStateSpecies={ setFavoritesStateSpecies }   />    
                { speciesStateInfo && <SpeciesInfo speciesStateInfo={ speciesStateInfo } speciesStateId={ speciesStateId } /> } 
                
                { speciesStateFilms && (
                <Suspense fallback={ <UiLoading /> }>
                <SpeciesFilms speciesStateFilms={ speciesStateFilms } />  
                </Suspense>
                )}  

            </div>
        </div>
        </>
    )
}

SpeciesPageInfo.propTypes = {
    setErrorApi: PropTypes.func
};

export default WithErrorApi(SpeciesPageInfo);

   