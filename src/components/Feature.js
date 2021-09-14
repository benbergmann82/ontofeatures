import React from 'react';

const Feature = ({name, features}) => {
    const cross = `${process.env.PUBLIC_URL}/assets/images/cross.svg`;
    const check = `${process.env.PUBLIC_URL}/assets/images/check.svg`;

    const items = Object.keys(features).map(title => {
        if(typeof features[title] === 'boolean') {
            return (
                <div className="flex justify-between py-1 even:bg-gray-200">
                    <div>{title}</div>
                    <div>{features[title] ? <img className="w-5 h-5" src={check} /> : <img className="w-5 h-5" src={cross} /> }</div>
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