import React from 'react';

const Announcement = ({text}) => {
    return (
        <div className="w-full py-2 flex justify-center items-center bg-green-600 text-white">
            {text}
        </div>
    )
}

export default Announcement;