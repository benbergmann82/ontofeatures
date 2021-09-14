import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addSteeringWheelMaterial, removeSteeringWheelMaterial, addSeatMaterial, removeSeatMaterial } from '../actions';

const Materials = ({ hidden }) => {
    const filter = useSelector(state => state.filter);
    const dispatch = useDispatch();

    const toggleSeats = (e) => {
        if(e.target.checked) {
            dispatch(addSeatMaterial(e.target.name));
        } else {
            dispatch(removeSeatMaterial(e.target.name));
        }
    }

    const toggleSteeringWheel = (e) => {
        if(e.target.checked) {
            dispatch(addSteeringWheelMaterial(e.target.name));
        } else {
            dispatch(removeSteeringWheelMaterial(e.target.name));
        }
    }

    return (
        <div className="shadow p-4 mb-4 rounded-lg bg-white">
            <span className="block text-center font-bold uppercase text-sm mb-2">Materials</span>
            <div className="mb-2">
                <span className="block mb-2 font-bold text-sm">Seats:</span>
                <div className="inline-block mx-2">
                    <input onChange={toggleSeats} checked={filter.seat_material.includes("Cloth")} className="mr-1" type="checkbox" id="cloth" name="Cloth" />
                    <label htmlFor="cloth">Cloth</label>
                </div>
                <div className="inline-block mx-2">
                    <input onChange={toggleSeats} checked={filter.seat_material.includes("Leather")} className="mr-1" type="checkbox" id="leather" name="Leather" />
                    <label htmlFor="leather">Leather</label>
                </div>
                <div className="inline-block mx-2">
                    <input onChange={toggleSeats} checked={filter.seat_material.includes("Synthetic Leather")} className="mr-1" type="checkbox" id="synthetic" name="Synthetic Leather" />
                    <label htmlFor="synthetic">Synthetic Leather</label>
                </div>
                <div className="inline-block mx-2">
                    <input onChange={toggleSeats} checked={filter.seat_material.includes("Microfleece")} className="mr-1" type="checkbox" id="microfleece" name="Microfleece" />
                    <label htmlFor="microfleece">Microfleece</label>
                </div>
            </div>
            <div className="mb-2">
                <span className="block mb-2 font-bold text-sm">Steering Wheel:</span>
                <div className="inline-block mx-2">
                    <input onChange={toggleSteeringWheel} checked={filter.steering_wheel_material.includes("Leather")} className="mr-1" type="checkbox" id="sw_leather" name="Leather" />
                    <label htmlFor="sw_leather">Leather</label>
                </div>
                <div className="inline-block mx-2">
                    <input onChange={toggleSteeringWheel} checked={filter.steering_wheel_material.includes("Synthetic Leather")}  className="mr-1" type="checkbox" id="sw_synthetic" name="Synthetic Leather" />
                    <label htmlFor="sw_synthetic">Synthetic Leather</label>
                </div>
            </div>
        </div>
    )
}

export default Materials;