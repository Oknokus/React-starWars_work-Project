import PropTypes from 'prop-types';

import styles from "./PeopleList.module.css";


const PeopleList = ({ peopleState }) => {
    return (
        <ul className={ styles.list__container }>
            {peopleState.map(({ id, name, img }) => 
                <li className={ styles.list__item } key={ id }>
                    <a href="#">
                        <img className={ styles.person__photo } src={ img } alt={ name } />
                        <p>Name: {name}</p>
                    </a>
                </li>
            )}
        </ul> 
    )
}


PeopleList.propTypes = {
    peopleState: PropTypes.array
};

export default PeopleList;