import { connect } from "react-redux";
import WeatherList from "../components/weather-list";

const mapStateToProps = ({weather}) => {
    return {weather}
} 
export default connect(mapStateToProps)(WeatherList);