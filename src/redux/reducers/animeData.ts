import type { Reducer } from "redux";
import type { IAction } from "../interfaces";

import type { AnimeById } from "../../interfaces/AnimeById";

const initialState = null

const animeData: Reducer<AnimeById | null, IAction> = (state = initialState, action): AnimeById | any => {
    switch (action.type) {
    
        default: return state
    }
}

export default animeData;