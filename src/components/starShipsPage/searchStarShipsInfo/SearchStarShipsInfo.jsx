import PropTypes from 'prop-types';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

import starShipsImg from "./imgStarShips/starShipsImg.png";


import styles from "./SearchStarShipsInfo.module.css";


const SearchStarShipsInfo = ({ stateStarShipsSearch }) => {
    const imgRef = useRef(null);
    
    const handleClickErrorImg = () => {
        imgRef.current.src = starShipsImg; 
    }

    return (
        <>  
            {stateStarShipsSearch.length && ( 
            <ul className={styles.list__container}> 
            {stateStarShipsSearch.map(({ id, name, img }) => 
                    <li className={ styles.list__item } key={ id }>
                        <Link to={ `/starships/${ id }` }>
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

SearchStarShipsInfo.propTypes = {
    stateStarShipsSearch:PropTypes.array
};

export default SearchStarShipsInfo;