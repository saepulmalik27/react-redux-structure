import React from "react";

import SearchBar from "../containers/search-bar";
import WeatherList from "../containers/weather-list";



const App = () => {
  return (
      <div className="container">
       <SearchBar></SearchBar>
       <WeatherList></WeatherList>
      </div>

  );
};

export default App;
