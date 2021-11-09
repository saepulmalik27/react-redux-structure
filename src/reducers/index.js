import { combineReducers } from "redux";
import ActiveBookReducer from "./active-books_reducers";
import BooksReducer from './books_reducer'
import WeatherReducer from "./weather_reducer";

const rootReducer = combineReducers({
    books : BooksReducer,
    activeBook : ActiveBookReducer,
    weather : WeatherReducer
})

export default rootReducer