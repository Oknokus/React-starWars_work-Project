import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import { fethUrlFilms }  from "../../../../services/getContainerData";


import styles from "./SpeciesFilms.module.css";


const SpeciesFilms = ({ speciesStateFilms }) => {
    const[specialFilms, setSpecialFilms] = useState([])

    useEffect(() => {
        (async() => {

            const filmList =  await fethUrlFilms(speciesStateFilms); 
            
            setSpecialFilms(filmList);
        })();
    }, []);

    return (
        <>
            <div className={styles.wrapper}>
            <ul className={styles.list__container}>
                {speciesStateFilms
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


export default SpeciesFilms;