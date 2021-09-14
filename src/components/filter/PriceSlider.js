import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeCarMaxPrice } from '../../actions';
import Slider from '../Slider';

const PriceSlider = () => {
    const dispatch = useDispatch();
    const filter = useSelector(state => state.filter);

    const valueChanged = (value) => {
        dispatch(changeCarMaxPrice(value));
    }

    return (
        <Slider name="Max. Monthly Price" onValueChanged={valueChanged} value={filter.max_price} step="10" prefix="£" min="300" max="1500" />
    )
}

export default PriceSlider;