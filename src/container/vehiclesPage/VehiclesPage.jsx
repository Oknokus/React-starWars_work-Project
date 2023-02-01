import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import WithErrorApi from '../../hockHelper/WithErrorApi';

import VehiclesList from '../../components/vehiclesPage/vehiclesList';

import { getSwApiUrlData } from "../../utils/network";
import { getVehicles, getVehiclesImg } from "../../services/getPeopleData";
import { SWAPI_URL_VEHICLES } from "../../constants/constants";


import styles from "./VehiclesPage.module.css";


const Vehicles = ({ setErrorApi }) => {
    const [vehiclesState, setVehiclesState] = useState(null);

    const getDataVehicles = async(url) => {

        const dataVehicles = await getSwApiUrlData(url);      
        
        if(dataVehicles) {
            const  vehiclesList = dataVehicles.results.map(({               
                created,
                edited,
                length,
                manufacturermax_atmosphering_speed,
                model,
                name,
                url
            }) => {
                const id = getVehicles(url);             
                const img = getVehiclesImg(id)

                return {
                created,
                edited,
                length,
                manufacturermax_atmosphering_speed,
                model,
                name,
                id,
                img
             }           
            })       
            setVehiclesState(vehiclesList);  
            setErrorApi(false)   
        } else {
            setErrorApi(true)
        }
        }

    useEffect(() => {
        getDataVehicles(SWAPI_URL_VEHICLES);
    }, [])
    return (
        <>
        { vehiclesState && <VehiclesList vehiclesState={ vehiclesState } /> }
        </>        
    )
}

Vehicles.propTypes = {
    setErrorApi: PropTypes.func
}


export default WithErrorApi(Vehicles);
