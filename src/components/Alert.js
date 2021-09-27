import React from 'react';

const Alert = ({ message }) => {
    return (
        <div className="absolute top-0 left-0 w-full bg-red-500">
            <span className="leading-5 text-white flex justify-center text-center pt-2 pb-3">{message}</span>
        </div>
    )
}

export default Alert;