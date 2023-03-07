import PropTypes from 'prop-types';
import { useNavigate  } from 'react-router';

import linkGoBack from "../../components/linkGoBack/imgLinkGoBack/linkGoBack.svg";


import styles from "./LinkGoBack.module.css";


const LinkGoBack = () => {
    const navigate = useNavigate();
    
    const handleClickBack = (e) => {
        navigate(-1)
    }
    return (        
         <a
         className={styles.link}
         onClick={ handleClickBack } 
         href="#">
             <img className={styles.link__img} src={ linkGoBack } alt="Go back" />
             <span>Go Back</span></a> 
    )
}
export default LinkGoBack;