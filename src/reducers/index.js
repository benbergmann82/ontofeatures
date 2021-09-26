import carReducer from "./carReducer";
import filterReducer from "./filterReducer";
import { combineReducers } from "redux";
import comparisonReducer from "./comparisonReducer";

const rootReducer = combineReducers({
    cars: carReducer,
    filter: filterReducer,
    comparison: comparisonReducer
});

export default rootReducer;