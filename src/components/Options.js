import React from 'react';
import { useDispatch } from 'react-redux';
import { addOption, removeOption, resetOptions } from '../actions';
import Option from './Option';

const Options = ({ hidden }) => {
    const dispatch = useDispatch();

    const toggleOption = (e) => {
        if(e.target.checked) {
            dispatch(addOption(e.target.name));
        } else {
            dispatch(removeOption(e.target.name));
        }
    }

    return (
        <div className={`text-center mt-6 md:w-2/5 lg:w-1/3 xl:w-1/4 md:mx-4 ${ hidden ? 'hidden' : ''}`}>
            <div>
                <div className="bg-gray-200 border border-gray-400 flex flex-col flex-wrap shadow p-4 mb-4 md:rounded-lg">
                    <span className="text-center font-bold uppercase text-sm mb-4">Driver Convenience</span>
                    <Option title="Heated Steering Wheel" callback={toggleOption} />
                    <Option title="Heated Seats" callback={toggleOption} />
                    <Option title="Isofix" callback={toggleOption} />
                    <Option title="Driver Armrest" callback={toggleOption} />
                    <Option title="Adaptive Cruise Control" callback={toggleOption} />
                    <Option title="Keyless Entry" callback={toggleOption} />
                    <Option title="Seat Height Adjustment Driver" callback={toggleOption} />
                    <Option title="Auto-dimming Rearview Mirror" callback={toggleOption} />
                    <Option title="Lane Follow Assist" callback={toggleOption} />
                    <Option title="Panoramic Glass Roof" callback={toggleOption} />
                    <Option title="Sunroof" callback={toggleOption} />
                    <span className="text-center font-bold uppercase text-sm mb-2 mt-4">Safety</span>
                    <Option title="Automatic Emergency Braking" callback={toggleOption} />
                    <Option title="Lane Keep Assist" callback={toggleOption} />
                    <Option title="Parking Sensors Front" callback={toggleOption} />
                    <Option title="Rearview Camera" callback={toggleOption} />
                    <Option title="Blind Spot Monitoring" callback={toggleOption} />
                    <Option title="Anti-theft Alarm" callback={toggleOption} />
                    <Option title="Emergency Call System" callback={toggleOption} />
                    <span className="text-center font-bold uppercase text-sm mb-2 mt-4">Multimedia</span>
                    <Option title="DAB Radio" callback={toggleOption} />
                    <Option title="Built-in Satnav" callback={toggleOption} />
                    <Option title="Phone App" callback={toggleOption} />
                    <Option title="Wireless Phone Charger" callback={toggleOption} />
                    <Option title="Android Auto" callback={toggleOption} />
                    <Option title="Apple CarPlay" callback={toggleOption} />
                    <span className="text-center font-bold uppercase text-sm mb-2 mt-4">Exterior</span>
                    <Option title="LED Front Lights" callback={toggleOption} />
                    <Option title="LED Rear Lights" callback={toggleOption} />
                    <Option title="LED Daytime Running Lights" callback={toggleOption} />
                    <Option title="Electric Foldable Mirrors" callback={toggleOption} />
                    <Option title="Roof Box Possible" callback={toggleOption} />
                    <button onClick={() => dispatch(resetOptions())} className="mt-2 bg-blue-600 hover:bg-blue-800 transition duration-500 text-white rounded-lg py-2 px-4 m-auto text-sm">Reset Options</button>
                </div>
            </div>
        </div>
    )
}

export default Options;