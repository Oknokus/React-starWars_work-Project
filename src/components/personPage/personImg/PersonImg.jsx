import PropTypes from 'prop-types';


import styles from "./PersonImg.module.css";


const PersonImg = ({ personStateImg, personStateName }) => { 
    return (
        <>
        <div className={ styles.container }>
        <img  className={ styles.photo } key={ personStateName } src={ personStateImg } alt={ personStateName } />       
        </div>
        </>
    )
}

PersonImg.propTypes = {
    personStateImg:PropTypes.string,
    personStateName:PropTypes.string
}

export default PersonImg;

