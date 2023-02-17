import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import PeopleList from "../../components/peoplePage/peopleList";


import styles from "./FavoritesPage.module.css";


const FavoritesPage = () => { 
    const[peopleState, setPeopleState] = useState([]);

    const favoritesState = useSelector(state => state.favoritesReducer);
  

    useEffect(()=> {
        const favoritesArr = Object.entries(favoritesState);
    

        if(favoritesArr.length) {
        const favoritesList = favoritesArr.map(elem => {
            return {
                id: elem[0],   
                name: elem[1].personStateName,
                img: elem[1].personStateImg             
            }           
        });
        setPeopleState(favoritesList);
        }
    },[favoritesState])
   
    return (
        <>
            <h1 className="header__text">FavoritesPage</h1>
            { peopleState ?  <PeopleList peopleState={ peopleState } />
            : <h2 className={styles.comment}>No data</h2>}        
        </>
    )
}

export default FavoritesPage;