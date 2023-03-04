import ChooseSide from "../../components/homePage/chooseSide";

import styles from "./HomePage.module.css";


const HomePage = () => {
    return (
        <>
        <h1 className="header__text">HOME</h1>  
        <div className={ styles.container }>
                      
            <ChooseSide />                
        </div>
        </>
    )
}
export default HomePage;