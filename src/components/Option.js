import React from 'react';
import { useSelector } from 'react-redux';

const Option = ({title, callback}) => {
    const filter = useSelector(state => state.filter);

    return (
        <label className="flex flex-row justify-between mb-2 relative">
            <span className="text-left">{title}</span>
            <input checked={filter.options.includes(title)} onChange={callback} name={title} type="checkbox" className="appearance-none cursor-pointer w-10 h-6 bg-red-400 transition-colors rounded-full " />
            <span className="cursor-pointer w-6 h-6 absolute rounded-full bg-gray-200 right-4 transform transition-transform"></span>
        </label>
    )
}

export default Option;