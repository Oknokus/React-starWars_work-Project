import PropTypes from 'prop-types';


import styles from "./StarShipsInfo.module.css";


const StarShipsInfo = ({ starShipStateInfo }) => {
    return (
        <>
        <div className={ styles.wrapper }>
            { starShipStateInfo && (
                <ul className={ styles.list__container }>
                    {starShipStateInfo.map(({ title, data }, index) => (
                        data && (
                        <li  className={ styles.list__item } key={ index }>
                            <span className={ styles.item__title }>{ title }: { data }</span>
                        </li>
                    )))
                    }
                </ul>
            )
            }        
        </div>      
        </>
    )
}

StarShipsInfo.propTypes = {
    starShipStateInfo:PropTypes.array
};


export default StarShipsInfo;