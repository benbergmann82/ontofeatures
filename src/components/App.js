import React, { useEffect, useState } from "react";
import CarList from "./CarList";
import { initiateCarList } from "../actions";
import { useDispatch } from "react-redux";
import Announcement from "./Announcement";
import MainFilter from "./MainFilter";
import Options from "./Options";
import Connectors from "./Connectors";
import Materials from "./Materials";
import Manufacturer from "./Manufacturer";

const App = () => {
  const [hidden, setHidden] = useState(false);
  const [carsFound, setCarsFound] = useState(0)
  const dispatch = useDispatch();

  // ********************** //
  // Load cars.json
  // ********************** //
  useEffect(() => {
    fetch('./cars_new.json')
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        dispatch(initiateCarList(result));
      })
  }, []);

  return (
    <div>
      <Announcement text="Use code 15cb9 to get £50 off your first month with on.to" />
      <div className="flex flex-col items-center p-4 bg-green-200 min-h-screen">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">ONTO EV Feature Comparison Tool</h1>
        <div className="w-full text-center">
            <span className="block font-bold text-lg mb-4">{carsFound} Cars found</span>
            <button onClick={() => setHidden(!hidden)} className="text-sm uppercase">{hidden ? '▼ Show Filters & Options ▼' : '▲ Hide Filters & Options ▲'}</button>
            <div className="md:flex md:justify-center">
                <MainFilter hidden={hidden} />
                <Options hidden={hidden} />
                <div className={`text-center mt-6 md:w-2/5 lg:w-1/3 xl:w-1/4 md:mx-4 ${ hidden ? 'hidden' : ''}`}>
                    <Connectors hidden={hidden} />
                    <Materials hidden={hidden} />
                    <Manufacturer hidden={hidden} />
                </div>
            </div>
            <div className="md:flex md:flex-wrap md:items-start justify-center mt-2">
            <CarList callback={setCarsFound} />
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
