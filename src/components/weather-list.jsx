import React, { Component } from 'react'
import Chart from './Chart';


export default class WeatherList extends Component {


    renderWeatherList(cityData, key) {
        
        const city = cityData.city.name;
        const temp  = cityData.list.map(val => val.main.temp);
        const pressure = cityData.list.map(val =>val.main.pressure)
        const humidity = cityData.list.map(val => val.main.humidity)

        return (
            <tr key={key} >
                <td>{city}</td>
                <td><Chart color={"orange"} data={temp} unit={"K"} /></td>
                <td><Chart color={"red"} data={pressure} unit={"hPa"} /></td>
                <td><Chart color={"green"} data={humidity} unit={"%"} /></td>
            </tr>
        )
    }

    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>city</th>
                        <th>Temp</th>
                        <th>pressure</th>
                        <th>humidity</th>
                    </tr>
                </thead>
                <tbody>
                    { this.props.weather.map((weather, key) => this.renderWeatherList(weather, key) )  }
                </tbody>
            </table>
        )
    }
}
