import PropTypes from 'prop-types';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';

import favoriteWhite from "./imgStarShips/favoriteWhite.png";
import favoriteYellow from "./imgStarShips/favoriteYellow.png";


import { setStarShipsName, deleteStarShipsName } from "../../../../store/action/actionFavorites";


import starships from "./imgStarShips/starships.png";


import styles from "./StarShipsImage.module.css";


const StarShipsImage = ({ starShipsStateImg, starShipStateName, starShipsStateId, favoritesStateStarShips, setFavoritesStateStarShips }) => {
    
    const dispatch = useDispatch();
    const imageRef = useRef(null);
 
    const handleImgError = () => {
       imageRef.current.src= starships;
    }

    const getDispatchPerson = () => {
        if(favoritesStateStarShips) {
            dispatch(deleteStarShipsName(starShipsStateId));
            setFavoritesStateStarShips(false);
        }           
        else {
            dispatch(setStarShipsName({
                [starShipsStateId]: {
                    name: starShipStateName,
                    image: starShipsStateImg
                }
            }))
            setFavoritesStateStarShips(true);
        }        
    }
                    
    return (
        <>
        <div className={ styles.container }>        
        <img 
            className={ styles.photo } 
            ref={ imageRef } 
            onError={ handleImgError } 
            src={ starShipsStateImg } 
            key={ starShipsStateId } 
            alt={ starShipStateName } />         
        { starShipsStateImg && 
            <img  
                className={styles.favorite} 
                src={favoritesStateStarShips ? 
                favoriteYellow 
                : 
                favoriteWhite} 
                onClick={ getDispatchPerson } 
                alt={ starShipStateName } /> }
        </div> 
        </>
    )
}

StarShipsImage.propTypes = {
    starShipsStateImg:PropTypes.string, 
    starShipStateName:PropTypes.string,
    starShipsStateId:PropTypes.number, 
    favoritesStateStarShips:PropTypes.bool,
    setFavoritesStateStarShips:PropTypes.func    
};


export default StarShipsImage;