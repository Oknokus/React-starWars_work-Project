import PropTypes from 'prop-types';


import styles from "./VehiclesInfo.module.css";


const VehiclesInfo = ({ vehiclesStateInfo }) => {
    return (
        <>
        <div className={ styles.wrapper }>
        { vehiclesStateInfo && (
            <ul className={ styles.list__container }>
                {vehiclesStateInfo.map(({ title, data }, index) => (
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

VehiclesInfo.propTypes = {
    vehiclesStateInfo:PropTypes.array
};



export default VehiclesInfo;