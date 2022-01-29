import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addConnector, removeConnector } from '../actions';

const Connectors = ({ hidden }) => {
    const dispatch = useDispatch();
    const filter = useSelector(state => state.filter);

    const toggleOption = (e) => {
        if(e.target.checked) {
            dispatch(addConnector(e.target.name));
        } else {
            dispatch(removeConnector(e.target.name));
        }
    }

    return (
        <div className="shadow p-4 mb-4 md:rounded-lg bg-gray-200 border border-gray-400">
            <span className="block text-center font-bold uppercase text-sm mb-2">Connector Type</span>
            <div className="inline-block mx-2">
                <input className="mr-1" checked={filter.connector.includes("Type 2")} onChange={toggleOption} type="checkbox" id="type2" name="Type 2" />
                <label htmlFor="type2">Type 2</label>
            </div>
            <div className="inline-block mx-2">
                <input className="mr-1" checked={filter.connector.includes("CCS")} onChange={toggleOption} type="checkbox" id="ccs" name="CCS" />
                <label htmlFor="ccs">CCS</label>
            </div>
            <div className="inline-block mx-2">
                <input className="mr-1" checked={filter.connector.includes("CHAdeMO")} onChange={toggleOption} type="checkbox" id="chademo" name="CHAdeMO" />
                <label htmlFor="chademo">CHAdeMO</label>
            </div>
        </div>
    )
}

export default Connectors;