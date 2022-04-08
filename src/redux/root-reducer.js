import { combineReducers } from "redux";
import requirementReducers from "./reducer";

const rootReducer = combineReducers({
    data: requirementReducers
});

export default rootReducer;