import PropTypes from 'prop-types';


import styles from "./StarShipsInfo.module.css";


const StarShipsInfo = ({ starShipStateInfo }) => {
    return (
        <>
        <div className={ styles.wrapper }>
        {starShipStateInfo && (
            <ul className={ styles.list__container }>
                {starShipStateInfo.map(({ title, data }) =>
                data && (
                    <li className={ styles.list__item } key={ title }>
                        <span className={ styles.item__title }>{ title } : { data }</span>
                    </li>
                )
                )
                }
            </ul>
        )}        
       </div> 
        </>
    )
}

StarShipsInfo.propTypes = {
    starShipState:PropTypes.array  
};


export default StarShipsInfo;