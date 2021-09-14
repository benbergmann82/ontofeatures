import React from 'react';
import Feature from './Feature';

const Features = ({car, hidden}) => {
    if(hidden === true) {
        return null;
    } else {
        return (
            <div className="w-full">
                <Feature name="Charging" features={car.features.charging} />
                <Feature name="Wheels" features={car.features.wheels} />
                <Feature name="Lights" features={car.features.lights} />
                <Feature name="Interior" features={car.features.interior} />
                <Feature name="Connectivity" features={car.features.connectivity} />
                <Feature name="Driver Assist" features={car.features.driver_assist} />
            </div>
        );
    }
}

export default Features;