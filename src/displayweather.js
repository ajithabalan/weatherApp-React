import React from 'react'

export default function Displayweather(props) {
    const{temperature,location,region,wind_speed,pressure,precip,humidity,image,country,description}=props.weatherData
    return (
        <div>
             <div className="user-weather">
            <div className="row">
                <div className="col-md-3 weather-temp">
                    <h1>{temperature}<sup>o</sup>C , {description}</h1>
                    <h4>{location}</h4>
                    <p>{region} , {country}</p>
                </div>

                <div className="col-md-9">
                    <img className="mainImg" src={image} alt="weather-img" />
                </div>
            </div>

            <div className="row">
                <div className="col-md-3 weather-info">
                    <p><b>Wind Speed</b>(km/hr)</p>
                    <h2>{wind_speed}</h2>
                </div>

                <div className="col-md-3 weather-info">
                    <p><b>Pressure</b>(millibar)</p>
                    <h2>{pressure}</h2>
                </div>

                <div className="col-md-3 weather-info">
                    <p><b>Precipitation</b>(mm)</p>
                    <h2>{precip}</h2>
                </div>

                <div className="col-md-3 weather-info">
                    <p><b>Humidity</b>(%)</p>
                    <h2>{humidity}</h2>
                </div>

            </div>
        </div>
        </div>
    )
}
