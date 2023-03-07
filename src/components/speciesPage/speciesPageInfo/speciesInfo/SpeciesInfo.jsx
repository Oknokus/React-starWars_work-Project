import PropTypes from 'prop-types';


import styles from "./SpeciesInfo.module.css";


const SpeciesInfo = ({ speciesStateInfo }) => {
    return (
        <>
        <div className={ styles.wrapper }>
        { speciesStateInfo && (
            <ul className={ styles.list__container }>
                {speciesStateInfo.map(({ title, data }, index) => (
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
SpeciesInfo.propTypes = { 
    speciesState: PropTypes.array
}

export default SpeciesInfo;


          
  