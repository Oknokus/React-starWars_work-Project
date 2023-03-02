import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import PeopleList from "../../components/peoplePage/peopleList";
import SpeciesList from "../../components/speciesPage/speciesList";
import StarShipsList from "../../components/starShipsPage/starShipsList";

import styles from "./FavoritesPage.module.css";


const FavoritesPage = () => { 
    const[peopleState, setPeopleState] = useState([]);
    const[speciesState, setSpeciesState] = useState([]);
    const[starShipsState, setStarShipsState] = useState([]);
    // const[vehiclesState, setVehiclesState] = useState([]);



    const peopleStateReducer = useSelector(state => state.peopleReducer);
    const speciesStateReducer = useSelector(state => state.speciesReducer);
    const starShipsStateReducer = useSelector(state => state.starShipsReducer);
    // const vehiclesStateReducer = useSelector(state => state.vehiclesReducer);
    

    useEffect(() => {
        const peopleArr = Object.entries(peopleStateReducer);
        const speciesArr = Object.entries(speciesStateReducer);
        const starShipsArr = Object.entries(starShipsStateReducer);

        // const vehiclesArr = Object.entries(vehiclesStateReducer);
    

        if(peopleArr.length) {
        const peopleStateList = peopleArr.map(elem => {
            return {
                id: elem[0],   
                name: elem[1].personStateName,
                img: elem[1].personStateImg             
            }           
        });

        setPeopleState(peopleStateList);
        };

        if(speciesArr.length) {
            const speciesStateList = speciesArr.map(elem => {
                return {
                    id: elem[0],   
                    name: elem[1].speciesStateName,
                    img: elem[1].speciesStateImg             
                }           
            });
            setSpeciesState(speciesStateList);
            };

            
        if(starShipsArr.length) {
            const starShipsStateList = starShipsArr.map(elem => {
                return {
                    id: elem[0],   
                    name: elem[1].personStateName,
                    img: elem[1].personStateImg             
                }           
            });
            setStarShipsState(starShipsStateList);
            };

        //     if(vehiclesArr.length) {
        //         const vehiclesStateList = vehiclesArr.map(elem => {
        //             return {
        //                 id: elem[0],   
        //                 name: elem[1].personStateName,
        //                 img: elem[1].personStateImg             
        //             }           
        //         });
        //         setVehiclesState(vehiclesStateList);
        //         };
    },[])
   
    return (
        <>
            <h1 className="header__text">Favorites</h1>           
                <div className={ styles.container }>
                { peopleState &&  <PeopleList peopleState={ peopleState } /> }
                { speciesState &&  <SpeciesList speciesState={ speciesState } /> }
                { starShipsState &&  <StarShipsList peopleState={ starShipsState } /> } 
                {/* { vehiclesState &&  <PeopleList peopleState={ vehiclesState } /> }*/}
            </div>
        </>
    )
}

export default FavoritesPage;