import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import favoriteWhite from "./imgFavorites/favoriteWhite.png";
import favoriteYellow from "./imgFavorites/favoriteYellow.png";

import { setSpeciesName, deleteSpeciesName } from "../../../../store/action/actionFavorites";


import styles from "./SpeciesImg.module.css";


const SpeciesImg = ({ speciesStateImg, speciesStateName, speciesStateId, favoritesStateSpecies, setFavoritesStateSpecies }) => { 
    const dispatch = useDispatch();

    const dispathFavoritesSpecies =() => {
        if(favoritesStateSpecies) {
            dispatch(deleteSpeciesName(speciesStateId));
            setFavoritesStateSpecies(false);            
        } else {
            dispatch(setSpeciesName({           
                [speciesStateId]: {
                    speciesStateName,
                    speciesStateImg
                }            
        }))
        setFavoritesStateSpecies(true);
        }
    };
    
   
    return (
        <>

        <div className={ styles.container }>
        <img  className={ styles.photo } key={ speciesStateName } src={ speciesStateImg } alt={ speciesStateName } />       
        <img  className={styles.favorite}  src={favoritesStateSpecies? favoriteYellow : favoriteWhite } onClick={ dispathFavoritesSpecies } alt="imgSpecies"/>  
        </div>
        
        </>
    )
}

SpeciesImg.propTypes = {
    speciesStateImg:PropTypes.string,
    speciesStateName:PropTypes.string,
    speciesStateId:PropTypes.number,
    favoritesStateSpecies:PropTypes.bool,
    setFavoritesStateSpecies:PropTypes.func    
}

export default SpeciesImg;

