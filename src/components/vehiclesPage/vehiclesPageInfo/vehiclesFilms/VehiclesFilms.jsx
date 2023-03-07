import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import { fethUrlFilms } from "../../../../services/getContainerData";


import styles from "./VehiclesFilms.module.css";


const VehiclesFilms = ({ vehiclesStateFilms }) => {
    const[vehiclesFilms, setVehiclesFilms] = useState([])
    
    useEffect(()=> {
        ( async() => {

            const filmList = await fethUrlFilms(vehiclesStateFilms);

            if(filmList) {
                setVehiclesFilms(filmList);
            }           
            
        })();
    })

    return (
        <>
        <div className={styles.wrapper}>
            <ul className={styles.list__container}>
                {vehiclesFilms
                    .sort((a, z) => a.episode_id - z.episode_id)
                    .map(({ title, episode_id }) =>
                        <li className={styles.list__item} key={episode_id}>
                            <span className={styles.item__episide}>Episode {episode_id}</span>
                            <span className={styles.item__colon}> : </span>
                            <span className={styles.item__title}>{title}</span>
                        </li>
                    )
                }
            </ul>
            </div>
        </>
    )
}

VehiclesFilms.propTypes = {
    vehiclesStateFilms:PropTypes.array
};

export default VehiclesFilms;