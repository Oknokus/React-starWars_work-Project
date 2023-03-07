import PropTypes from 'prop-types';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

import vehiclesImg from "./vehiclesImg/vehiclesImg.png"

import styles from "./VehiclesListItem.module.css";


const VehiclesListItem = ({ vehicles }) => {
    
    const imgRef = useRef();
    const handleClickImg = () => {
        imgRef.current.src= vehiclesImg;
    }

    const {   
        name,
        id,
        img
    } = vehicles;
    
    return (
        <li className={ styles.list__item } key={ id }>
        <Link to={`/vehicles/${id}`}>
        <img ref={ imgRef } onError={ handleClickImg } className={ styles.person__photo } src={ img } alt={ name } />
        <p>Name: { name }</p>       
        </Link>                  
    </li>      
    )
}

VehiclesListItem.propTypes ={
    vehicles:PropTypes.object
}

export default VehiclesListItem;