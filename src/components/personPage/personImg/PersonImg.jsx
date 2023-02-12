import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import favoriteWhite from "./imgFavorites/favoriteWhite.png";
import favoriteYellow from "./imgFavorites/favoriteYellow.png";

import { setFavoritesName, deleteFavoritesName } from "../../../store/action/actionFavorites";


import styles from "./PersonImg.module.css";


const PersonImg = ({ personStateImg, personStateName, personStateId, favoritesStatePerson, setFaloritesStatePerson }) => { 
    const dispatch = useDispatch();

    const dispathFavoritesPeople =() => {
        if(favoritesStatePerson) {
            dispatch(deleteFavoritesName(personStateId));
            setFaloritesStatePerson(false);            
        } else {
            dispatch(setFavoritesName({           
                [personStateId]: {
                    personStateName,
                    personStateImg
                }            
        }))
        setFaloritesStatePerson(true);
        }
    };
    
   
    return (
        <>
        <div className={ styles.container }>
        <img  className={ styles.photo } key={ personStateName } src={ personStateImg } alt={ personStateName } />       
        <img  className={styles.favorite}  src={favoritesStatePerson? favoriteYellow : favoriteWhite } onClick={ dispathFavoritesPeople } alt="imgFavorites"/>  
        </div>
               
             

        </>
    )
}

PersonImg.propTypes = {
    personStateImg:PropTypes.string,
    personStateName:PropTypes.string,
    // personStateId:PropTypes.number,
    favoritesStatePerson:PropTypes.bool,
    setFavoritesStatePerson:PropTypes.func

    
}

export default PersonImg;

