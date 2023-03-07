import PropTypes from 'prop-types';
import cn from 'classnames';


import "../index.css";
import styles from "./UButton.module.css";


const UButton = ({onClick, text, disabled, theme="dark", classes }) => {
    return (
        <>
        <button
        className={ cn(styles.button, styles[ theme ], classes) }
        onClick={ onClick }
        disabled={ disabled }
        >
        { text }
        </button>
        </>
    )
}

UButton.propTypes = {    
    onClick: PropTypes.func,
    text: PropTypes.string,
    disabled: PropTypes.bool,
    theme: PropTypes.string,
    classes: PropTypes.string  
};

export default UButton;