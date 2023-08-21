import  { useEffect, useState } from 'react'
import { WeatherCard } from './WeatherCard';


export const Weather = () => {
    const [search,setSearch] = useState("pune")
    const [weatherinformation,setWeatherInformation] = useState({});
    const getWeatherInfo = async() => {
        try{    
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=9e50a4f66fe7b60c1d3cab868e3008fe&units=metric`;

            const res = await fetch(url);
            const data = await res.json();
        
            const {temp,pressure,humidity} = data.main;
            const {main:weathermood} = data.weather[0];
            const name = data.name;
            const {speed} = data.wind;
            const {country,sunset} = data.sys;

            const weatherInfo = {
                temp,pressure,humidity,weathermood,name,speed,country,sunset
            }
            setWeatherInformation(weatherInfo);
        }catch(err){
            console.log(err);
        }
    }
    useEffect(() => {
        getWeatherInfo();
    },[]);
    return (
    <>
        <div className='main-container'>
            <div className='search'>
                <input type='text' id='search' name='search' placeholder='Search...' autoFocus value={search} onChange={(e) => setSearch(e.target.value)}/>
                <button className='bn' onClick={getWeatherInfo}>Search</button>
            </div>
            <WeatherCard {...weatherinformation}/>
        </div>
    </>
  )
}
