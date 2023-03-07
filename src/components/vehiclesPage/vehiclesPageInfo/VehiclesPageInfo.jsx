import PropTypes from 'prop-types';
import React, { useEffect, useState, Suspense } from 'react';
import { useSelector } from 'react-redux';

import { WithErrorApi } from "../../../hockHelper/WithErrorApi";

import LinkGoBack from  "../../../components/linkGoBack";
import VehiclesInfo from "../vehiclesPageInfo/vehiclesInfo";
import VehiclesImage from "../vehiclesPageInfo/vehiclesImage";

import UiLoading from '../../ui/uiLoading/UiLoading';

import { getSwApiUrlData } from "../../../utils/network";
import { vehiclesPageId, getVehiclesImg } from "../../../services/getContainerData";

import { SWAPI_URL_VEHICLES } from "../../../constants/constants";


import styles from "./VehiclesPageInfo.module.css";

const VehiclesFilms = React.lazy(() => import("../vehiclesPageInfo/vehiclesFilms"));


const VehiclesPageInfo = ({ setErrorApi }) => {

    const vehiclesState = useSelector(state => state.vehiclesReducer);
    
    const[vehiclesStateName, setVehiclesStateName]= useState(null);
    const[vehiclesStateInfo, setVehiclesStateInfo]= useState(null);
    const[vehiclesStateImg, setVehiclesImg]= useState(null);
    const[vehiclesStateFilms, setVehiclesStateFilms]= useState(null);
    const[vehiclesStateId, setVehiclesStateId]= useState(null);
    const[favoritesStateVehicles, setFavoritesStateVehicles] = useState(false);

    useEffect(()=> {
       ( async() => {
            const urlVehiclesPage = document.location.href; 
                  
            const id = vehiclesPageId(urlVehiclesPage);

            const dataVehicles = await getSwApiUrlData(SWAPI_URL_VEHICLES+id);
           

            if(dataVehicles) {
                setVehiclesStateInfo([
                    { title: "Created", data: dataVehicles.created },
                    { title: "Edited", data: dataVehicles.edited },
                    { title: "Length", data: dataVehicles.length },                   
                    { title: "Manufacturer", data: dataVehicles.manufacturer },                   
                    { title: "Max_atmosphering_speed", data: dataVehicles.max_atmosphering_speed },                   
                    { title: "Model", data: dataVehicles.model },                   
                    { title: "Edited", data: dataVehicles.edited },                   
                ]);
                setVehiclesStateName(dataVehicles.name);
                setVehiclesImg(getVehiclesImg(id));
                setVehiclesStateId(id);
                
                
                if(dataVehicles.films.length) {
                    setVehiclesStateFilms(dataVehicles.films);
                }

                vehiclesState[id]? setFavoritesStateVehicles(true) : setFavoritesStateVehicles(false);              
                setErrorApi(false)
            } else {
                setErrorApi(true)
            };
        })()
    }, [])


    return (
        <>
         <LinkGoBack />

            <div className={ styles.wrapper }>           
                    <span className={ styles.person__name }>{ vehiclesStateName }</span>
                <div className={ styles.container }>

            <VehiclesImage 
                vehiclesStateImg={ vehiclesStateImg }  
                vehiclesStateName={ vehiclesStateName } 
                vehiclesStateId={ vehiclesStateId } 
                favoritesStateVehicles={ favoritesStateVehicles } 
                setFavoritesStateVehicles={ setFavoritesStateVehicles } 
            />  

            { vehiclesStateInfo && <VehiclesInfo vehiclesStateInfo={ vehiclesStateInfo } /> }          
            
            { vehiclesStateFilms && 
            <Suspense fallback={ <UiLoading /> }> (
            <VehiclesFilms vehiclesStateFilms={ vehiclesStateFilms } /> ) 
            </Suspense> }

            </div>
            </div>      
        </>
    )
}

VehiclesPageInfo.propTypes = {
    setErrorApi:PropTypes.func
};

export default WithErrorApi(VehiclesPageInfo);