import PropTypes from 'prop-types';
import cn from "classnames";

import cancel from "./inputCancelImg/cancel.svg"


import styles from "./UiInput.module.css";


const UiInput = ({ classes, value, handleInputChange, placeholder }) => {
    return (
        <div className={cn(styles.wrapper__input, classes)}>
            <input
            className={ styles.input }
            value={ value }
            onChange={(event)=> handleInputChange(event.target.value) }           
            placeholder={ placeholder }
            type="text"  />

            <img
            className={cn(styles.clear, !value && styles.clear__disabled)}
            onClick={ () => value && handleInputChange("") } 
            src={ cancel } alt="Clear" />
        </div>
    )
}

UiInput.propTypes = {
    value:PropTypes.string,
    handleInputChange:PropTypes.func,
    placeholder:PropTypes.string,
    classes:PropTypes.string
}
export default UiInput;