import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Car from './Car'
import NoCars from './NoCars';

const CarList = ({ callback }) => {
    const cars = useSelector(state => state.cars);
    const filter = useSelector(state => state.filter);

    // filter them by make
    const filteredbyMake = filter.make !== 'All' ? cars.filter(car => car.make === filter.make) : cars;

    const filteredCars = filteredbyMake.filter(car => {
            // filter by the basic filters chosen by user
            return (
                car.max_charging_speed >= filter.min_charging_speed &&
                car.price <= filter.max_price &&
                car.range >= filter.min_range &&
                car.battery >= filter.min_battery &&
                car.features.charging.Connector.some(type => filter.connector.includes(type)) &&
                car.features.interior["Seat Material"].some(material => filter.seat_material.includes(material)) &&
                car.features.interior["Steering Wheel"].some(material => filter.steering_wheel_material.includes(material)) &&
                filter.manufacturers.includes(car.make)
            )
        })
        .filter(car => {
            // create array of all options that car has, then test if car has all of the options currently selected by the user
            const categories = Object.keys(car.features).map(key => car.features[key]);

            const availableFeatures = categories.map(cat => {
                return Object.keys(cat).filter(option => cat[option])
                       .map(option => option);
            })
            .flat();

            return filter.options.every(option => availableFeatures.includes(option));
        })    
        .sort((a, b) => a.price - b.price)
        .map(car => <Car key={car.id} car={car} /> );

    useEffect(() => {
        callback(filteredCars.length);
    }, [filteredCars])

    return filteredCars.length > 0 ? filteredCars : <NoCars />;
}

export default CarList;