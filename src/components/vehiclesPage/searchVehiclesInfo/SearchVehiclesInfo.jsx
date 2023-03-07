import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

import starShipsImg from "./imgStarShips/starShipsImg.png";

import styles from "./SearchVehiclesInfo.module.css";


const SearchVehiclesInfo = ({ stateVehiclesSearch }) => {
    const imgRef = useRef(null);
    
    const handleClickErrorImg = () => {
        imgRef.current.src = starShipsImg; 
    }
    return (
        <>   
            {stateVehiclesSearch.length && ( 
            <ul className={styles.list__container}> 
            {stateVehiclesSearch.map(({ id, name, img }) => 
                    <li className={ styles.list__item } key={ id }>
                        <Link to={ `/vehicles/${ id }` }>
                            <img className={ styles.person__photo } ref={ imgRef } onError={ handleClickErrorImg } src={ img } alt={ name } />
                            <p className={ styles.person__name }>{name}</p>
                        </Link>
                    </li>
            )}         
            </ul>
            )}
        </>
    )
}

SearchVehiclesInfo.propTypes = { 
    stateVehiclesSearch:PropTypes.array   
}

export default SearchVehiclesInfo;