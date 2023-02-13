import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import imgFavorites from "./imgFavorites/imgFavorites.png";


import styles from "./Favorites.module.css";


const Favorites = () => {

      const[favoritesAmount, setFavoritesAmount] = useState(0);     

      const favoritesData = useSelector(state => state.favoritesReducer);  
    
    useEffect(() => {           
             
        const favoritesDataLength = Object.keys(favoritesData).length;
        favoritesDataLength.toString().length > 2 ? setFavoritesAmount("...") : setFavoritesAmount(favoritesDataLength);  
       
    })
  
    return (
        <div className={ styles.container }>
        <Link to="/favorites">
            <span className={ styles.counter }>{ favoritesAmount }</span>
            <img className={ styles.icon } src={ imgFavorites } alt="Image favorites" />
        </Link>
        </div>
    )
}   

export default Favorites;