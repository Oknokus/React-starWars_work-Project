import PropTypes from 'prop-types';

import StarShipsListItem from "./starShipsListItem";


import styles from "./StarShipsList.module.css";


const StarShipsList = ({ starShipsState }) => {
    return (
       <ul  className={ styles.list__container }>
        {starShipsState.map((starShip ) =>
            <StarShipsListItem starShip={ starShip } key={ starShip.id }/>
            )
        }
       </ul>
    )
}

StarShipsList.propTypes = {
    setErrorApi: PropTypes.array
};

export default StarShipsList;