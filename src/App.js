import React from 'react'
import './App.css';
import Axios from 'axios';
import Displayweather from './displayweather'
import Navbar from './navbar'

class App extends React.Component {
  state={
    coords:{
      'latitude':45,
      'longitude':50
    },
    wdata:{

    },
    inputData:""
  }
  
  componentDidMount()
  { 
//get device location
if(navigator.geolocation){
  navigator.geolocation.getCurrentPosition((position)=>{
console.log(position.coords.longitude)
let newcords= {
               latitude:position.coords.latitude,
               longitude:position.coords.longitude
              }
              console.log(newcords)

    this.setState({coords:newcords})        
    console.log(this.state.coords.latitude);
    Axios.get(`
    http://api.weatherstack.com/current?access_key=ffabbb792dd878fe9926e5a3f75fee24&query=${this.state.coords.latitude},${this.state.coords.longitude}`).then((resp)=>{
          console.log(resp);
          let weatherData ={
            location:resp.data.location.name,
            temperature:resp.data.current.temperature,
            description:resp.data.current.weather_descriptions[0],
            region:resp.data.location.region,
            country:resp.data.location.country,
            wind_speed:resp.data.current.wind_speed,
            pressure:resp.data.current.pressure,
            precip:resp.data.current.precip,
            humidity:resp.data.current.humidity,
            image:resp.data.current.weather_icons

          }
          this.setState({wdata:weatherData});
          console.log(weatherData);
        })
  })
}
  else{
    console.log("not")
  }
  
}
change=(value)=>{
  this.setState({inputData:value})

}

changeWeather=(e)=>{
  e.preventDefault();
  Axios.get(`
  http://api.weatherstack.com/current?access_key=ffabbb792dd878fe9926e5a3f75fee24&query=
  ${this.state.inputData}`).then((resp)=>{
        console.log(resp);
        let weatherData ={
          location:resp.data.location.name,
          temperature:resp.data.current.temperature,
          description:resp.data.current.weather_descriptions[0],
          region:resp.data.location.region,
          country:resp.data.location.country,
          wind_speed:resp.data.current.wind_speed,
          pressure:resp.data.current.pressure,
          precip:resp.data.current.precip,
          humidity:resp.data.current.humidity,
          image:resp.data.current.weather_icons

        }
        this.setState({wdata:weatherData});})

}

  
  render(){
  return (
    <div className="App">
      <div className="container">
        <Navbar changeWeather={this.changeWeather} changeRegion={this.change}/>
        <br></br>
      <Displayweather weatherData={this.state.wdata}/>
      </div>
    </div>
  );
}
}
export default App;
