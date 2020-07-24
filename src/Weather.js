import React, {useState, useEffect} from 'react';
import SunrisePic from './Sunrisepic.png'
import SunsetPic from './Sunsetpic.png'
import './Weather.css'


function Weather() {
  const [temp, setTemp] = useState("")
  const [city, setCity] = useState("")
  const [sunrise, setSunrise] = useState("")
  const [sunset, setSunset] = useState("")
  const [description, setDescription] = useState("")
  const [wIcon, setWIcon] = useState("")
  
  
  const getTemp = ( ) => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=Paris,FR&appid=${process.env.REACT_APP_WEATHER_KEY}&units=metric`)
    .then(resp => resp.json())
    .then(data => {
      
      setTemp(data.main.temp)
      setCity(data.name)
      setSunrise(new Date(data.sys.sunrise * 1000))
      setSunset(new Date(data.sys.sunset * 1000))
      setDescription(data.weather[0].description)
      setWIcon(data.weather[0].icon)
      
    })
  }
  
  let rise = sunrise.toLocaleString("fr-FR", {timeZone: "Europe/Paris", hour: '2-digit', minute:'2-digit'})
  let down = sunset.toLocaleString("fr-FR", {timeZone: "Europe/Paris", hour: '2-digit', minute:'2-digit'})
  
  
  
  useEffect(getTemp, [])
  
  return (
  
      <div className="wheatherSection">
        <div className="cityName">
          <h3>{city}</h3>
        </div>
        <div className="weatherInfo">
          <img  src={`http://openweathermap.org/img/wn/${wIcon}@2x.png`}/>
          <p>{Math.round(temp)}C°</p>
          <li>"{description}"</li>
          <div className="riseSet">
            <img  className="sunIcon" src={SunrisePic}/>
            <li>{rise}</li>
          </div>
          <div className="riseSet">
            <img  className="sunIcon" src={SunsetPic}/>
            <li>{down}</li> 
          </div>   
        </div>
      </div>
  
  )
  
}

export default Weather
