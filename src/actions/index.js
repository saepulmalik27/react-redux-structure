import axios from "axios"
import { API_ROOT_WEATHER_API, FETCH_WEATHER, SELECTED_BOOK } from "../constants"

export const selectBook = (book) => {
    return {
        type : SELECTED_BOOK,
        payload : book
    }
}

export const fetchWeather = (city) => {
    const request = axios.get(`${API_ROOT_WEATHER_API}&q=${city}`)
    console.log("test");
    return {
        type : FETCH_WEATHER,
        payload : request
    }
}