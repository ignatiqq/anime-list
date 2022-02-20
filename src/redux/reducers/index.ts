import { combineReducers } from "redux";

import animeData from "./animeData";
import generalSettings from "./generalSettings";

const rootReducer = combineReducers({
    animeData,
    generalSettings,
})

export default rootReducer;