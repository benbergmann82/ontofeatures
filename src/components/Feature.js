import React from 'react';
import { ReactComponent as Cross } from '../svg/cross.svg';
import { ReactComponent as Check } from '../svg/check.svg';

const Feature = ({name, features}) => {
    const items = Object.keys(features).map(title => {
        if(typeof features[title] === 'boolean') {
            return (
                <div className="flex justify-between py-1 even:bg-gray-200">
                    <div>{title}</div>
                    <div>{features[title] ? <Check /> : <Cross />}</div>
                </div>
            )
        } else {
            return (
                <div className="flex justify-between py-1 even:bg-gray-200">
                    <div>{title}</div>
                    <div className="text-right">{ Array.isArray(features[title]) ? features[title].join(', ') : features[title]}</div>
                </div>
            )
        }
    });

    return (
        <div className="mt-4">
            <h3 className="text-sm font-bold uppercase text-center">{name}</h3>
            <div className="w-full flex flex-col">
                {items}
            </div>
        </div>
    );
}

export default Feature;