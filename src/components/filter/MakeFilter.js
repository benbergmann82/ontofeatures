import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeCarMake } from '../../actions';

const MakeFilter = () => {
    const filter = useSelector(state => state.filter);
    const dispatch = useDispatch();
    const allManufacturers = [...filter.manufacturers];

    //const uniqueMakes = [...new Set(cars.map(car => car.make))];
    const options = allManufacturers.map(make => <option key={make} value={make}>{make}</option>);

    return (
        <div className="text-sm border bg-gray-100 border-gray-400 py-4 px-6 m-2 rounded-lg">
            <select value={filter.make} onChange={(e) => dispatch(changeCarMake(e.target.value))} name="manufacturer" id="manufacturer" className="w-full h-8 rounded-lg px-2 border border-gray-400">
                <option value="All">All</option>
                {options}
            </select>
            <label htmlFor="manufacturer" className="block mt-2 text-center">Manufacturer</label>
        </div>
    );
}

export default MakeFilter;