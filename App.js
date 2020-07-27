import React from "react";
import Loading from "./Loading";
import * as Location from 'expo-location';
import { Alert } from "react-native";
import axios from "axios";
import Weather from './Weather';
import Main from './Main';



const API_KEY = "8f3ad424b5ae76d3486a9fc5587733b5";

export default class extends React.Component {
  state = {
    isLoading: true,
  }

  currGetWeather = async(latitude, longitude) => {
    const { 
      data: {
        main :{ temp, humidity },
        weather,
        sys,
        name
      }
    } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);

    this.setState({
      isLoading: false, 
      condition: weather[0].main,
      temp,
      humidity,
      city: name,
      nation: sys.country ,
    });
  }

  dailyGetWeather = async(latitude, longitude) => {
    const {
      data: {
        daily
      }
    } = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&
    exclude={part}&appid=${API_KEY}&units=metric`);

    this.setState({
      daily: daily
    });
  }

  getLocation = async() => {
    try {
      await Location.requestPermissionsAsync();
      const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync();
      this.currGetWeather(latitude, longitude);
      this.dailyGetWeather(latitude,longitude);
      console.log({latitude, longitude})
    } catch (error) {
      Alert.alert("Can't find you.", "So sad");
    }
  }

  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading, temp, condition, city, nation, humidity, daily } = this.state;
    //return isLoading ? <Loading /> : <Main />
    return isLoading ? <Loading /> : <Weather daily={daily} temp={Math.round(temp)} condition={condition} city={city} nation={nation} humidity={humidity}  />;
  }
}
