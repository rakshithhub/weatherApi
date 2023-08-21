import { useEffect, useState } from 'react'

export const WeatherCard = ({temp,pressure,humidity,weathermood,name,speed,country}) => {
  
    const [weathermd,setWeatherMd] = useState("");

    useEffect(()=>{
        switch(weathermood){
            case "Clouds" : return setWeatherMd("https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-22-64.png");
            case "Haze" : return setWeatherMd("https://cdn1.iconfinder.com/data/icons/carbon-design-system-vol-4/32/haze-64.png");
            case "Clear" : return setWeatherMd("https://cdn1.iconfinder.com/data/icons/carbon-design-system-vol-4/32/haze-64.png");
            case "Rain" : return setWeatherMd("https://cdn3.iconfinder.com/data/icons/tiny-weather-1/512/rain-cloud-64.png");
            case "Mist" : return setWeatherMd("https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_39-64.png")
            default : return 
        }
    },[weathermood])
  
    return (
    <>
        <div className='weather_container'>
                <div className='weather_icon'>
                    <img src={weathermd} alt='random'/>
                </div>
            
                <div className='weather_info'>
                    <div className='temp'>
                        <p className='tem'>{temp}&deg;</p>
                        <p className='clu'>{weathermood} <span>{name}, {country}</span></p>
                    </div>
                    <div className='time'>
                        <p>{new Date().toLocaleString()}</p>
                    </div>
                </div>

                <div className='sub_info'>
                    <div className='weather_sub_info'>
                        <img src='/image/sunset.png' alt=''/>
                        <p>15:26 PM <span>Sunset</span></p>
                    </div>
                    <div className='weather_sub_info'>
                        <img src='/image/humidity.png' alt=''/>
                        <p>{humidity} <span>Humidity</span></p>
                    </div>
                    <div className='weather_sub_info'>
                        <img src='/image/pressure.png' alt=''/>
                        <p>Pressure <span>{pressure}</span></p>
                    </div>
                    <div className='weather_sub_info'>
                        <img src='/image/wind.png' alt=''/>
                        <p>Wind <span>{speed}</span></p>
                    </div>
                </div>
            </div>
    </>
  )
}
