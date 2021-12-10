import React, { useState } from 'react';
import Features from './Features';

const Car = ({ car }) => {
    const image = `${process.env.PUBLIC_URL}/assets/images/${car.image}`;
    const [hidden, setHidden] = useState(true);

    return (
        <div className="overflow-hidden relative p-8 text-left bg-white md:rounded-lg my-4 shadow flex flex-col items-center text-gray-800 md:w-1/2 lg:w-2/5 2xl:w-1/4 md:mx-4">
            {!car.can_be_ordered ? <div className="bg-red-200 px-12 py-3 absolute top-2 -left-10 transform -rotate-45 text-sm font-semibold">Retired</div> : null}
            <h1 className="text-center text-md font-bold mb-2">{car.make}</h1>
            <h2 className="text-center text-xl font-bold mb-2">{car.name}</h2>
            <img src={image} alt={car.name} />
            <table className="w-full">
                <tbody>
                    <tr>
                        <td>Price</td>
                        <td className="text-right">£{car.price}/month</td>
                    </tr>
                    <tr>
                        <td>Range</td>
                        <td className="text-right">{car.range} miles</td>
                    </tr>
                    <tr>
                        <td>Acceleration</td>
                        <td className="text-right">{car.speed}s</td>
                    </tr>
                </tbody>
            </table>
            <button type="button" onClick={() => setHidden(!hidden)} className="bg-green-300 px-6 py-2 border border-green-700 mt-4 px-6 py-2 hover:text-white hover:bg-green-600 transition-all rounded-lg">{hidden ? 'Show Features' : 'Hide Features'}</button>
            <Features car={car} hidden={hidden} />
        </div>
    );
}

export default Car;