import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
import '../styles/WeatherApp.css'
import { useState } from "react";

export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({})

    function updateWeatherInfo(weatherInfo){
        setWeatherInfo(weatherInfo)
    }

    return(
        <div id="WeatherApp">
            <SearchBox updateWeatherInfo = {updateWeatherInfo} />
            {Object.keys(weatherInfo).length > 0 ? <InfoBox weatherInfo={weatherInfo} /> : <h1>No Information to Display</h1>}
        </div>
    )
}