import PropTypes from 'prop-types';

import StarShipsListItem from "./starShipsListItem";


import styles from "./StarShipsList.module.css";


const StarShipsList = ({ starShipsState }) => {
    return (
        <>
        <ul className={ styles.list__container }>
        {starShipsState.map(( starship ) => 
            <StarShipsListItem starship={ starship } key={ starship.id } />           
        )}
        </ul> 
        </>
    )
}

StarShipsList.propTypes = {
    starShipsState: PropTypes.array
};

export default StarShipsList;