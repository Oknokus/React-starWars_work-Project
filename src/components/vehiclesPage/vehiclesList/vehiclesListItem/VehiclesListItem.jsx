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
    created,
    edited,
    length,
    manufacturer,
    max_atmosphering_speed,
    model,
    name,
    id,
    img
    } = vehicles;
    
    return (
        <li className={ styles.list__item } key={ id }>
        <Link to={`/vehicles/${id}`}>
        <img ref={ imgRef } onError={ handleClickImg } className={ styles.person__photo } src={ img } alt={ name } />
        <p>Name: { name }</p>
        <p>Model: { model }</p>
        <p>Created: { created }</p>
        <p>Edted: { edited }</p>
        <p>Speed: { max_atmosphering_speed }</p>
        <p>Manufacturer: { manufacturer }</p>
        <p>Length: { length }</p>
        </Link>                  
    </li>      
    )
}

VehiclesListItem.propTypes ={
    vehicles:PropTypes.object
}

export default VehiclesListItem;