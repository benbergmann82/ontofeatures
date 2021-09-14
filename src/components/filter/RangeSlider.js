import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeCarMinRange } from '../../actions';
import Slider from '../Slider';

const RangeSlider = () => {
    const dispatch = useDispatch();
    const filter = useSelector(state => state.filter);

    const valueChanged = (value) => {
        dispatch(changeCarMinRange(value));
    }

    return (
        <Slider name="Min. Range" onValueChanged={valueChanged} value={filter.min_range} step="5" suffix="mi" min="50" max="300" />
    )
}

export default RangeSlider;