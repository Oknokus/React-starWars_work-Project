import { useLocation } from 'react-router';

import notFoundImg from "./notFoundImg/notFoundImg.png";


import styles from "./NotFoundPage.module.css";


const NotFoundPage = () => {
    const location = useLocation()  ;
    return (
        <>
        <img className={ styles.img } src={ notFoundImg } alt="Not Found" />
        <p className={ styles.text }>No much for <u>{ location.pathname }</u></p>
        </>
    )
}
export default NotFoundPage;