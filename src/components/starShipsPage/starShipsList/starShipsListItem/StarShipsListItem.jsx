import { useRef } from 'react';
import PropTypes from 'prop-types';

import starShipsImg from "./imgStarShips/starShipsImg.png"

import styles from './StarShipsListItem.module.css';


const StarShipsListItem = ({ starShip }) => {
    const {
        name,       
        model,
        created,
        length,
        id,
        img } = starShip;

    const imgRef = useRef(null);

    const handleClick = () => {
        imgRef.current.src = starShipsImg;
    }

    return (
        <li className={ styles.list__item } key={ id }>
            <a href="#">
            <img ref={ imgRef } onError={ handleClick } className={ styles.person__photo } src={ img } alt={ name } />
            <p>Name: { name }</p>
            <p>Model: { model }</p>
            <p>Length:{ length }</p>
            <p>Creted: { created }</p>
            </a>            
        </li>
       
    )
}

StarShipsListItem.propTypes = {
    starShip: PropTypes.object
};

export default StarShipsListItem;