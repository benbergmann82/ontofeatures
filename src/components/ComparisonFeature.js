import React from 'react';

const ComparisonFeature = ({ title, feature }) => {
    const cross = `${process.env.PUBLIC_URL}/assets/images/cross.svg`;
    const check = `${process.env.PUBLIC_URL}/assets/images/check.svg`;
        
        return (
            <div className="flex flex-col md:flex-row justify-between items-center align-middle bg-gray-100 even:bg-gray-300 p-2">
                <div className="text-center md:text-left">{title}</div>
                <div className="text-center md:text-right">
                    { typeof feature === 'boolean' ?
                    feature ? <img className="w-5 h-5 m-auto" alt="Checkmark" src={check} /> :
                    <img className="w-5 h-5 m-auto" alt="Cross" src={cross} /> : Array.isArray(feature) ? feature.join(', ') : <div className="text-center md:text-right">{feature}</div> }
                </div>
            </div>

        )
    }

export default ComparisonFeature;