import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useRef } from 'react';

import favoriteWhite from "./img/favoriteWhite.png";
import favoriteYellow from "./img/favoriteYellow.png";
import starships from "./img/starships.png";


import { setVehiclesName, deleteVehiclesName } from "../../../../store/action/actionFavorites";


import styles from "./VehiclesImage.module.css";


const VehiclesImage = ({ 
    vehiclesStateImg, 
    vehiclesStateName,
    vehiclesStateId,
    favoritesStateVehicles,
    setFavoritesStateVehicles
   }) => {
    const dispatch = useDispatch();
    const imgRef = useRef(null);

    const handleImgError = () => {
        imgRef.current.src = starships;
    }
    
    const getDispatchVehicles = () => {
        if(favoritesStateVehicles) {
            dispatch(deleteVehiclesName(vehiclesStateId));
            setFavoritesStateVehicles(false);
        }           
        else {
            dispatch(setVehiclesName({
                [vehiclesStateId]: {
                    name: vehiclesStateName,
                    image: vehiclesStateImg
                }
            }))
            setFavoritesStateVehicles(true);
        }        
    }
                 
   
    return (
        <>
        <div className={ styles.container }>        
        <img 
            className={ styles.photo } 
            ref={ imgRef }
            onError={ handleImgError }
            src={ vehiclesStateImg } 
            key={ vehiclesStateId } 
            alt={ vehiclesStateName } />         
        { vehiclesStateImg && 
            <img  
                className={styles.favorite} 
                src={ favoritesStateVehicles ? 
                favoriteYellow 
                : 
                favoriteWhite} onClick={ getDispatchVehicles } alt={ vehiclesStateName } /> }
        </div> 
        </>
    )
}

VehiclesImage.propTypes = {
    vehiclesStateImg:PropTypes.string, 
    vehiclesStateName:PropTypes.string,
    vehiclesStateId:PropTypes.number, 
    favoritesStatevehicles:PropTypes.bool,
    setFavoritesStateVehicles:PropTypes.func    
}


export default VehiclesImage;


