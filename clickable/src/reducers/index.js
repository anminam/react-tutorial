import { combineReducers } from "redux";
import color from "./color";
import number from "./number";
import counter from "./counter";


const reducers = combineReducers({
    colorData: color,
    numberData: number,
    counterData: counter
});

export default reducers;