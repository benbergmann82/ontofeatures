import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import ComparisonFeature from './ComparisonFeature';
import SearchBar from './SearchBar';
import { addComparisonCar, removeComparisonCar } from '../actions';

const CompareCars = () => {
    const comparison = useSelector(state => state.comparison);
    const cars = useSelector(state => state.cars);
    const comparisonCars = cars.filter(car => comparison.cars.includes(car.id));
    const dispatch = useDispatch();

    const xImg = `${process.env.PUBLIC_URL}/assets/images/x.svg`;

    const addToComparisonCars = (carId) => {
        if(comparison.cars.length < 3 && !comparison.cars.includes(carId)) {
            dispatch(addComparisonCar(carId));
        } 
    }
    
    useEffect(() => {
        localStorage.setItem('comparisonCars', comparison.cars.join(','));
    }, [comparison])

    if(comparison.cars.length > 0) {
        return (
            <div className="w-full">
                <SearchBar callback={addToComparisonCars} />
                <div className={`bg-white rounded-lg flex py-4`}>
                    
                    {comparisonCars.map(car => {
                        return (
                        <div className="cargrid relative grid px-2">
                            <button onClick={() => dispatch(removeComparisonCar(car.id))} className="absolute w-6 h-6 bg-gray-300 border border-gray-400 rounded-full right-4 top-4 flex items-center align-middle"><img className="h-6 w-6" src={xImg} alt="Remove car" /></button>
                            <div className="text-md font-bold p-2">
                                {car.make}
                            </div>
                            <div className="text-xl font-bold p-2">
                                {car.name}
                            </div>
                            <div className="p-2">
                                <img className="block m-auto" src={`${process.env.PUBLIC_URL}/assets/images/${car.image}`} />
                            </div>
                            <div className="flex flex-col md:flex-row justify-between items-center align-middle p-2">
                                <div>
                                    Price
                                </div>
                                <div>
                                    £{car.price}/month
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row justify-between items-center align-middle p-2">
                                <div>
                                    Range
                                </div>
                                <div>
                                    {car.range} miles
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row justify-between items-center align-middle p-2">
                                <div>
                                    Acceleration
                                </div>
                                <div>
                                    {car.speed}s
                                </div>
                            </div>
                            <h3 className="text-sm font-bold uppercase py-4 flex items-center justify-center bg-gray-600 text-white">Charging</h3>
                            {Object.keys(car.features.charging).map(key => <ComparisonFeature title={key} feature={car.features.charging[key]} />)}
                            <h3 className="text-sm font-bold uppercase py-4 flex items-center justify-center bg-gray-600 text-white">Wheels</h3>
                            {Object.keys(car.features.wheels).map(key => <ComparisonFeature title={key} feature={car.features.wheels[key]} />)}
                            <h3 className="text-sm font-bold uppercase py-4 flex items-center justify-center bg-gray-600 text-white">Lights</h3>
                            {Object.keys(car.features.lights).map(key => <ComparisonFeature title={key} feature={car.features.lights[key]} />)}
                            <h3 className="text-sm font-bold uppercase py-4 flex items-center justify-center bg-gray-600 text-white">Interior</h3>
                            {Object.keys(car.features.interior).map(key => <ComparisonFeature title={key} feature={car.features.interior[key]} />)}
                            <h3 className="text-sm font-bold uppercase py-4 flex items-center justify-center bg-gray-600 text-white">Connectivity</h3>
                            {Object.keys(car.features.connectivity).map(key => <ComparisonFeature title={key} feature={car.features.connectivity[key]} />)}
                            <h3 className="text-sm font-bold uppercase py-4 flex items-center justify-center bg-gray-600 text-white">Driver Assist</h3>
                            {Object.keys(car.features.driver_assist).map(key => <ComparisonFeature title={key} feature={car.features.driver_assist[key]} />)}
                        </div>
                        )
                    })}
                </div>
            </div>
        )
    } else {
        return (
            <div className="w-full flex flex-col items-center">
                <SearchBar callback={addToComparisonCars} />
                <div>Use the search above to start adding cars to the comparison tool</div>
            </div>
        )
    }

}

export default CompareCars;