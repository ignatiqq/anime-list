import type { AnimeById } from "../../interfaces/AnimeById";

export const setCurrentAnime = (data: AnimeById) => ({
    type: "SET_CURRENT_ANIME",
    payload: data
})