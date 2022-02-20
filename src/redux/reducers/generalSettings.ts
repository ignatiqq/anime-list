import type { Reducer } from "redux";
import type { IAction } from "../interfaces";

interface IGeneralSettings {
    theme: string | null
}

const initialState = {
    theme: localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark"
}

const generalSettings: Reducer<IGeneralSettings, IAction> = (state = initialState, action): IGeneralSettings => {
    switch (action.type) {

        case "SET_THEME": {
            return {
                ...state,
                theme: action.payload
            }
        }
    
        default: return state
    }
}

export default generalSettings;