import PropTypes from 'prop-types';


import styles from "./VehiclesListItem.module.css";


const VehiclesListItem = ({ vehicles }) => {
    const {
    created,
    edited,
    length,
    manufacturermax_atmosphering_speed,
    model,
    name,
    id,
    img
    } = vehicles;

    return (
        <li className={ styles.list__item } key={ id }>
        <a href="">
        <img className={ styles.person__photo } src={ img } alt={ name } />
        <p>Name: { name }</p>
        <p>Model: { model }</p>
        <p>Created: { created }</p>
        <p>Edted: { edited }</p>
        <p>Speed: { manufacturermax_atmosphering_speed }</p>
        <p>Length: { length }</p>
    </a>                  
    </li>      
    )
}

VehiclesListItem.propTypes ={
    vehicles:PropTypes.object
}

export default VehiclesListItem;