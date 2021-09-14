import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeCarMinBattery } from '../../actions';
import Slider from '../Slider';

const BatterySlider = () => {
    const dispatch = useDispatch();
    const filter = useSelector(state => state.filter);

    const valueChanged = (value) => {
        dispatch(changeCarMinBattery(value));
    }

    return (
        <Slider name="Min. Usable Battery" onValueChanged={valueChanged} value={filter.min_battery} step="1" suffix="kWh" min="25" max="100" />
    )
}

export default BatterySlider;