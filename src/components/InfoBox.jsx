import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import '../styles/InfoBox.css'
import { useEffect, useState } from 'react';

export default function InfoBox({weatherInfo}){
    const images = {
        normal: "https://images.unsplash.com/photo-1579003593419-98f949b9398f?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        hot: "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        cold: "https://images.unsplash.com/photo-1668418321923-becc3ef20077?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rain: "https://images.unsplash.com/photo-1511634829096-045a111727eb?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }

    let weatherImg = ""
    if(weatherInfo?.main?.humidity > 80){
        weatherImg = images.rain
    }
    else if(weatherInfo?.main?.temp < 20){
        weatherImg = images.cold
    }else if(weatherInfo?.main?.temp > 30){
        weatherImg = images.hot
    }else{
        weatherImg = images.normal
    }

    if(weatherInfo?.cod === "404"){
        return (
            <h1>No Data Found</h1>
        )
    }else{
        return(
            <div id="InfoBox">
                <Card className='card'>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={weatherImg}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" id='weather-title'>
                        {weatherInfo?.name}
                        <img src={`https://openweathermap.org/img/wn/${weatherInfo?.weather?.[0]?.icon}@2x.png`} alt="" />
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component="span" id='weather-info'>
                            <div>Temperature : {weatherInfo?.main?.temp}&deg;C</div>
                            <div>Real Feel : {weatherInfo?.main?.feels_like}&deg;C</div>
                            <div>Humidity : {weatherInfo?.main?.humidity}</div>
                            <div>Description : {weatherInfo?.weather[0]?.description}</div>
                        </Typography>
                    </CardContent>
                </CardActionArea>
                </Card>
            </div>
        )
    }
}