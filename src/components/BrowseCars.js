import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import MainFilter from "./MainFilter";
import Options from "./Options";
import Connectors from "./Connectors";
import Materials from "./Materials";
import Manufacturer from "./Manufacturer";
import CarList from "./CarList";
import { setComparisonCars } from '../actions';

const BrowseCars = () => {
    const [hidden, setHidden] = useState(false);
    const [carsFound, setCarsFound] = useState(0)

    const dispatch = useDispatch();

    useEffect(() => {
        // load comparison cars from local storage and set state, if any
        const storedCars = localStorage.getItem('comparisonCars');
        if(storedCars !== null && storedCars !== "") {
            dispatch(setComparisonCars(storedCars.split(',').map(x => +x)));
        }
    }, [])

    return (
        <div className="w-full text-center">
            <span className="block font-bold text-lg mb-4">{carsFound} Cars found</span>
            <button onClick={() => setHidden(!hidden)} className="text-sm uppercase">{hidden ? '▼ Show Filters & Options ▼' : '▲ Hide Filters & Options ▲'}</button>
            <div className="md:flex md:justify-center">
                <MainFilter hidden={hidden} />
                <Options hidden={hidden} />
                <div className={`text-center mt-6 md:w-2/5 lg:w-1/3 xl:w-1/4 md:mx-4 ${ hidden ? 'hidden' : ''}`}>
                    <Connectors hidden={hidden} />
                    <Materials hidden={hidden} />
                    <Manufacturer hidden={hidden} />
                </div>
            </div>
            <div className="md:flex md:flex-wrap md:items-start justify-center mt-2">
            <CarList callback={setCarsFound} />
            </div>
        </div>
    )
}

export default BrowseCars;