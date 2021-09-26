import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

const SearchBar = ({ callback }) => {
    const [searchInput, setSearchInput] = useState('');
    const [searchListHidden, setSearchListHidden] = useState(true);
    const [foundItems, setFoundItems] = useState([]);

    const cars = useSelector(state => state.cars.map(car => { return { "manufacturer": car.make.toUpperCase(), "model": car.name.toUpperCase(), "id": car.id } }))

    const searchListRef = useRef();

    const searchChanged = (e) => {
        setSearchInput(e.target.value);
    }

    useEffect(() => {
        if(searchInput.length > 0) {
            setSearchListHidden(false);

            const foundCars = cars.filter(car => car.manufacturer.includes(searchInput.toUpperCase()) || car.model.includes(searchInput.toUpperCase()))
            setFoundItems(foundCars);
        } else {
            setSearchListHidden(true);
        }
    }, [searchInput]);

    const itemClicked = (carId) => {
        setSearchInput('')
        callback(carId)
    }

    return (
        <div className="flex items-center relative w-full">
            <input value={searchInput} onChange={searchChanged} type="text" name="searchbar" placeholder="Add a car to compare" className="p-2 w-full border outline-none border-gray-500 rounded-lg mb-4 h-10" />
            <div ref={searchListRef} className={`z-10 absolute rounded-lg rounded-t-none ${searchListHidden ? 'hidden' : ''} w-full bg-white p-4 border border-t-0 border-gray-500 top-8`}>
                {foundItems.length === 0 ? 'No cars found' : foundItems.map(item => <div onClick={() => itemClicked(item.id)} className="p-2 hover:bg-gray-300">{item.manufacturer} {item.model}</div>)}
            </div>
        </div>
    )
}

export default SearchBar;