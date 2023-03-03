import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import imgFavorites from "./imgFavorites/imgFavorites.png";


import styles from "./Favorites.module.css";


const Favorites = () => {

      const[favoritesAmount, setFavoritesAmount] = useState(0);     

      const peopleData = useSelector(state => state.peopleReducer);  
      const speciesData = useSelector(state => state.speciesReducer);    
      const starShipsData = useSelector(state => state.starShipsReducer);  
      const vehiclesData = useSelector(state => state.vehiclesReducer);   
    
    useEffect(() => {           
             
        const peopleDataLength = Object.keys(peopleData).length;
        const specieDataLength = Object.keys(speciesData).length;
        const starShipsDataLength = Object.keys(starShipsData).length;
        const vehiclesDataLength = Object.keys(vehiclesData).length;


        const allDataLength = peopleDataLength+specieDataLength+starShipsDataLength+vehiclesDataLength;


        allDataLength.toString().length > 2 ? setFavoritesAmount("...") : setFavoritesAmount(allDataLength);  
       
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