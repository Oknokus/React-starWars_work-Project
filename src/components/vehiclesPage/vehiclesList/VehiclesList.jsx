import PropTypes from 'prop-types';

import VehiclesListItem from "./vehiclesListItem";


import styles from "./VehiclesList.module.css";


const VehiclesList = ({ vehiclesState }) => {
    return (
        <ul className={ styles.list__container }>
           {vehiclesState.map((vehicles) =>
                <VehiclesListItem vehicles={ vehicles } key={ vehicles.id }  />)
            }           
        </ul>        
    )
}

VehiclesList.propTypes = {
    vehiclesState: PropTypes.array
};

export default VehiclesList;


