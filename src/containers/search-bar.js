import { connect } from 'react-redux';
import { fetchWeather } from '../actions';
import SearchBar from '../components/search-bar';

export default connect(null, {fetchWeather})(SearchBar)