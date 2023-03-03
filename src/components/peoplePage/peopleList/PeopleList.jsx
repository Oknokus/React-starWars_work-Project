import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from "./PeopleList.module.css";


const PeopleList = ({ peopleState }) => {
    
    return (
        <ul className={ styles.list__container }>
            {peopleState.map(({ id, name, img }) => 
                <li className={ styles.list__item } key={ id }>
                    <Link to={ `/people/${ id }` }>
                        <img className={ styles.person__photo } src={ img } alt={ name } />
                        <p>Name: {name}</p>
                    </Link>
                </li>
            )}
        </ul> 
    )
}


PeopleList.propTypes = {
    peopleState: PropTypes.array
};

export default PeopleList;