import React from 'react';
import MakeFilter from './filter/MakeFilter';
import PriceSlider from './filter/PriceSlider';
import RangeSlider from './filter/RangeSlider';
import ChargingSlider from './filter/ChargingSlider';
import BatterySlider from './filter/BatterySlider';

import { useDispatch } from 'react-redux';
import { resetFilters } from '../actions';


const MainFilter = ({hidden}) => {
    const dispatch = useDispatch();

    return (
        <div className={`text-center mt-6 md:w-2/5 lg:w-1/3 xl:w-1/4 md:mx-4 ${ hidden ? 'hidden' : ''}`}>
            <div className="flex flex-col flex-wrap shadow p-4 mb-4 md:rounded-lg bg-white">
                <span className="font-bold uppercase text-sm mb-2">Filter By</span>
                <MakeFilter />
                <PriceSlider />
                <RangeSlider />
                <ChargingSlider />
                <BatterySlider />
                <button className="mt-2 bg-gray-200 rounded-lg py-2 px-4 m-auto text-sm" onClick={() => dispatch(resetFilters())}>Reset Filters</button>
            </div>
        </div>
    )

}

export default MainFilter;