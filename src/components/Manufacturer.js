import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeManufacturer, addManufacturer } from '../actions';

const Manufacturer = () => {
    const filter = useSelector(state => state.filter);
    const dispatch = useDispatch();
    const allManufacturers = ["Audi", "Citroen", "Citroen DS3", "Hyundai", "Jaguar", "Peugeot", "Renault", "Tesla", "Volkswagen"];

    const toggleMake = (e) => {
        if(e.target.checked) {
            dispatch(addManufacturer(e.target.name));
        } else {
            dispatch(removeManufacturer(e.target.name));
        }
    }

    const options = allManufacturers.map(make => {
        return (
            <div key={make} className="inline-block mx-2">
                    <input onChange={toggleMake} checked={filter.manufacturers.includes(make)} className="mr-1" type="checkbox" id={make} name={make} />
                    <label htmlFor={make}>{make}</label>
            </div>
        )
    });

    return (
        <div className="shadow p-4 mb-6 md:rounded-lg bg-gray-200 border border-gray-400">
            <span className="block text-center font-bold uppercase text-sm mb-2">Only show cars made by</span>
            {options}
        </div>
    )
}

export default Manufacturer;