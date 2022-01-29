import React, { useEffect, useState } from "react";
import { initiateCarList } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import { ExternalLinkIcon } from '@heroicons/react/outline';
import Announcement from "./Announcement";
import BrowseCars from "./BrowseCars";
import CompareCars from "./CompareCars";

const App = () => {
  const views = {
    BROWSE: "browse",
    COMPARE: "compare"
  };

  const comparisonCars = useSelector(state => state.comparison);

  const [activeView, setActiveView] = useState(views.BROWSE);
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
    <>
      <Announcement />
      <div className="max-w-screen-2xl m-auto font-Roboto">
        <div className="flex flex-col items-center md:p-2 bg-white min-h-screen">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-4 md:mb-6">ONTO EV Feature Comparison Tool</h1>
          <div className="flex mb-4">
            <button className="bg-blue-500 hover:bg-blue-700 transition duration-500 text-white px-6 py-2 mx-2 rounded-lg" onClick={() => setActiveView(views.BROWSE)}>Browse all cars</button>
            <button className="bg-blue-500 hover:bg-blue-700 transition duration-500 text-white relative px-6 py-2 mx-2 rounded-lg" onClick={() => setActiveView(views.COMPARE)}>
              <span className="absolute -right-2 -top-2 block w-7 h-7 bg-white text-blue-600 border border-blue-600 text-sm leading-7 rounded-2xl">
                {comparisonCars.cars.length}
              </span>
              Compare cars
            </button>
            <a href="https://calc.evtips.co.uk" target="_blank" rel="noreferrer" className="bg-blue-500 hover:bg-blue-700 transition duration-500 text-white px-6 py-2 mx-2 rounded-lg text-center">Charging Calculator<ExternalLinkIcon className="h-5 w-5 inline-block ml-1" /></a>
          </div>
          {activeView === views.BROWSE ? <BrowseCars /> : <CompareCars />}
        </div>
      </div>
    </>
  );
}

export default App;
