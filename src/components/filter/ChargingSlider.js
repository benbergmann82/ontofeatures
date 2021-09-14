import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeCarMinChargeSpeed } from '../../actions';
import Slider from '../Slider';

const ChargingSlider = () => {
    const dispatch = useDispatch();
    const filter = useSelector(state => state.filter);

    const valueChanged = (value) => {
        dispatch(changeCarMinChargeSpeed(value));
    }

    return (
        <Slider name="Min. Charge Speed" onValueChanged={valueChanged} value={filter.min_charging_speed} step="5" suffix="kW" min="10" max="200" />
    )
}

export default ChargingSlider;