import PropTypes from 'prop-types';


import styles from "./PersonInfo.module.css";


const PersonInfo = ({ personStateInfo }) => {
    return (
        <>
        <div className={ styles.wrapper }>
        { personStateInfo && (
            <ul className={ styles.list__container }>
                {personStateInfo.map(({ title, data }) => (
                    data && (
                    <li  className={ styles.list__item } key={ title }>
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
PersonInfo.propTypes = { 
    personStateInfo: PropTypes.array
}

export default PersonInfo;


          
  