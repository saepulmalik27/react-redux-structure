import {FETCH_WEATHER} from '../constants'
const WeatherReducer = (state = [], action ) => {

    switch (action.type) {
        case  FETCH_WEATHER:
            return [ ...state, action.payload.data]
    
        default:
            return state
    }
}

export default WeatherReducer