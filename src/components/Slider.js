import React, { useRef, useEffect } from 'react';

const Slider = ({name, min, max, step, value, onValueChanged, prefix = "", suffix = ""}) => {   
    const sliderBubbleRef = useRef();

    const calculateBubblePosition = (value) => {
        const bubblePosition = Math.round((value - min) / (max-min) * 100);
        const offset = Math.round(value / (max / 4));

        return bubblePosition - offset;
    }

    useEffect(() => {
        const bubblePosition = calculateBubblePosition(value);
        sliderBubbleRef.current.style.left = `${bubblePosition}%`;
    }, [value])

    return (
        <div className="text-sm border bg-gray-100 border-gray-400 pt-6 pb-4 px-6 m-2 rounded-lg">
            <div className="relative">
                <output ref={sliderBubbleRef} className="transform -translate-x-1/3 bg-blue-600 text-white p-1 w-14 h-8 flex items-center justify-center rounded-lg shadow-lg text-xs absolute -top-3" htmlFor="slider">{prefix}{value}{suffix}</output>
                <input type="range" min={min} step={step} max={max} className="mt-6 w-full cursor-pointer" value={value} onChange={(e) => onValueChanged(e.target.value)} id="slider"></input>
                <label className="block text-center mb-0">{name}</label>
            </div>
        </div>
    )
}

export default Slider;