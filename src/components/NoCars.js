import React from 'react';
import { useDispatch } from 'react-redux';
import { resetAll } from '../actions';

const NoCars = () => {
    const dispatch = useDispatch();

    return (
        <div className="p-8 bg-white rounded-lg my-4 shadow flex flex-col items-center text-gray-800 md:w-1/2 md:mx-4">
            <h2 className="text-xl mb-4">No cars found :(</h2>
            <p>Please choose different options</p>
            <button className="mt-4 bg-gray-200 rounded-lg py-2 px-4 m-auto text-sm" onClick={() => dispatch(resetAll())}>Reset All Filters & Options</button>
        </div>
    )
}

export default NoCars;