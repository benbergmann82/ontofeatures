import carReducer from "./carReducer";
import filterReducer from "./filterReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    cars: carReducer,
    filter: filterReducer
});

export default rootReducer;