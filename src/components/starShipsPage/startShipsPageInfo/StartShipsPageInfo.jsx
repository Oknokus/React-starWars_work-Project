import PropTypes from 'prop-types';
import React, { useEffect, useState, Suspense,  } from 'react';
import { useSelector } from 'react-redux';

import WithHockHelper from "../../../hockHelper";

import StarShipsInfo from "./StarShipsInfo";
import StarShipsImage from "./StarShipsImage";

import UiLoading from "../../Ui/uiLoading/UiLoading";

import LinkGoBack from "../../linkGoBack";

import { getSwApiUrlData } from "../../../utils/network";
import { starShipsPageId, getStarShipsImg } from "../../../services/getContainerData";

import { SWAPI_URL_STARSHIPS } from "../../../constants/constants";


import styles from "./StarShipsPageInfo.module.css";

const StarShipsFilms = React.lazy(()=> import("../startShipsPageInfo/StarShipsFilms"));

const StarShipsPageInfo = ({ setErrorApi }) => {    
    
    const starShipsState = useSelector(state => state.starShipsReducer);
    

    const[starShipStateName, setStarShipStateName]= useState(null);
    const[starShipStateInfo, setStarShipStateInfo]= useState(null);
    const[starShipsStateImg, setsStarShipsImg]= useState(null);
    const[starShipsStateFilms, setStarShipsStateFilms]= useState(null);
    const[starShipsStateId, setStarShipsStateId]= useState(null);
    const[favoritesStateStarShips, setFavoritesStateStarShips] = useState(false);
    
    useEffect(() => {       
        ( async() => {  
            const urlStarShipsPage = document.location.href;  
                   
            const id = starShipsPageId(urlStarShipsPage);

            const dataStarShips = await getSwApiUrlData(SWAPI_URL_STARSHIPS+id); 
               
                       
                if(dataStarShips) {                  
                    setStarShipStateInfo([
                        { title:"Model", data: dataStarShips.model },
                        { title: "Length", data: dataStarShips.length },
                        { title: "Edited", data: dataStarShips.edited },
                        { title: "Created", data: dataStarShips.created },
                        { title: "Starship_class", data: dataStarShips.starship_class },
                        { title: "Max_atmosphering_speed", data: dataStarShips.max_atmosphering_speed }
                    ]);      

                    setStarShipStateName(dataStarShips.name); 
                    setsStarShipsImg(getStarShipsImg(id));
                    setStarShipsStateId(id);
                    
                    dataStarShips.films.length && setStarShipsStateFilms(dataStarShips.films);
                    

                    starShipsState[id] ? setFavoritesStateStarShips(true) : setFavoritesStateStarShips(false);

                    setErrorApi(false);
                } 
                else {
                    setErrorApi(true);
                };
        })();
    }, [starShipsState])  

    return (
        <> 
           <LinkGoBack />

           <div className={ styles.wrapper }>           
                    <span className={ styles.person__name }>{ starShipStateName }</span>
                <div className={ styles.container }>
          
            <StarShipsImage 
                starShipsStateImg={ starShipsStateImg }  
                starShipStateName={ starShipStateName } 
                starShipsStateId={ starShipsStateId } 
                favoritesStateStarShips={ favoritesStateStarShips } 
                setFavoritesStateStarShips={ setFavoritesStateStarShips } 
            /> 

            { starShipStateInfo && <StarShipsInfo starShipStateInfo={ starShipStateInfo } /> }          
            
           { starShipsStateFilms && 
                <Suspense fallback={ <UiLoading /> }> (
                 <StarShipsFilms starShipsStateFilms={ starShipsStateFilms } /> ) 
                </Suspense> }

           </div>
           </div> 
        </>
    )
}

StarShipsPageInfo.poropTypes = {
    setErrorApi:PropTypes.func
};


export default WithHockHelper(StarShipsPageInfo);



