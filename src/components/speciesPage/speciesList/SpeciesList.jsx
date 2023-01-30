import PropTypes from 'prop-types';

import styles from "./SpeciesList.module.css";


const SpeciesList = ({ speciesState }) => {
    return (
        <ul className={ styles.list__container }>     
        {speciesState &&      
            (
                speciesState.map(({ name, language, img, id }) => 
                    <li className={ styles.list__item } key={ id }>
                        <a href="#">
                        <img className={ styles.person__photo } src= { img } alt={ name } />
                        <p>{ name }</p>
                        <p>{ language }</p>   
                        </a>                                                 
                    </li>
                )
            ) 
            }
        </ul>
    )
}

SpeciesList.propTypes = {
    speciesState: PropTypes.array
};

export default SpeciesList;