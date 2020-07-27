import React from "react";
import PropTypes from 'prop-types';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { LinearGradient } from 'expo-linear-gradient';


const weatherOptions ={
    Haze: {
        iconName:"weather-hazy",
        gradient: ["#4da0b0", "#d39d38"],
        title: "Haze",
        subtitle: "Don't go outside."
    }, 
    Thunderstorm: {
        iconName:"weather-lightning-rainy",
        gradient: ["#373B44", "#4286f4"],
        title: "Thunderstorm",
        subtitle: "Becareful. It's crazy outside now!"
    },
    Drizzle: {
        iconName:"weather-rainy",
        gradient: ["#4da0b0", "#d39d38"],
        title: "Drizzle",
        subtitle: "I love the raining sound.."
    },
    Rain: {
        iconName:"weather-pouring",
        gradient: ["#4da0b0", "#d39d38"],
        title: "Rain",
        subtitle: "Don't forget to take your umbrella"
    }, 
    Snow: {
        iconName:"weather-snowy",
        gradient: ["#ece9e6", "#ffffff"],
        title: "Snow",
        subtitle: "It's snowing outside. Will you make a snowman today?"
    },
    Clear: {
        iconName:"weather-sunny",
        gradient: ["#fef253", "#ff7300"],
        title: "Clear",
        subtitle: "Why don't you go outside today!"
    },
    Clouds: {
        iconName:"weather-cloudy",
        gradient: ["#d7d2cc", "#304352"],
        title: "Clouds",
        subtitle: "It's cloudy ouside. Isn't it so blue?"
    }, 
    Mist: {
        iconName:"weather-fog",
        gradient: ["#4da0b0", "#d39d38"],
        title: "Mist",
        subtitle: "Watch out! Might a monster is walking next to you."
    }, 
    Fog: {
        iconName:"weather-fog",
        gradient: ["#757f9a", "#d7dde8"],
        title: "Foggy",
        subtitle: "Watch out! Might a monster is walking next to you."
    }, 
    Sand: {
        iconName:"weather-sunset-up",
        gradient: ["#ba8b02", "#ba8b02"],
        title: "Sand",
        subtitle: "Now you know why we have to protect the forest"
    },
    Ash: {
        iconName:"weather-sunset-down",
        gradient: ["#4da0b0", "#d39d38"],
        title: "Ash",
        subtitle: "Don't go outside."
    },
    Squall: {
        iconName:"weather-pouring",
        gradient: ["#373B44", "#4286f4"],
        title: "Squall",
        subtitle: "OMG!"
    }, 
    Tornado: {
        iconName:"weather-tornado",
        gradient: ["#d7d2cc", "#304352"],
        title: "Tornado",
        subtitle: "Be carefule, and plz don't go near the tornado by curiosity!"
    }, 
    Atmosphere: {
        iconName: "weahter-hail",
        gradient: ["#89f7fe", "#66a6ff"],
        title: "Atmosphere",
        subtitle: "ATATAT"
    }
}


export default function Weather({temp, condition, city, nation, humidity, daily}){


    return (
    <LinearGradient 
        colors={weatherOptions[condition].gradient}
        style={styles.container}
    >
        <StatusBar barStyle="light-content" />
        <View style={styles.halfContainer}>
            <MaterialCommunityIcons 
                name={weatherOptions[condition].iconName} 
                size={96} 
                color="white" />
            <Text style={styles.temp}>{temp}° / {humidity}%</Text>
            <Text style={styles.temp}>{city}</Text>
            <Text style={styles.temp}>{nation}</Text>
        </View>

        <View style={{...styles.description, ...styles.textContainer}}>
            <Text style={styles.title}>{weatherOptions[condition].title}</Text>
            <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
        </View>
{/* 
        <View>
            <MaterialCommunityIcons 
                name={weatherOptions[daily[0].weather[0].main].iconName} 
                size={40} 
                color="white" />
        </View> */}

    </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm", 
        "Drizzle", 
        "Rain", 
        "Snow", 
        "Atmosphere", 
        "Clear", 
        "Clouds",
        "Haze",
        "Mist",
        "Smoke",
        "Dust",
        "Fog",
        "Sand",
        "Ash",
        "Squall",
        "Tornado"
    ]).isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    halfContainer: {
        flex:1,
        justifyContent: "center",
        alignItems: "center"
    }, 
    description: {
        flex:1,
        justifyContent: "center",
        alignItems: "center"
    },
    week: {
        flex: 1,
        justifyContent: "space-evenly",
        alignItems: "flex-start"
    },
    temp: {
        fontSize: 40,
        color: "white",
        alignItems: "center",
        justifyContent: "center"
    },
    title: {
        color: "white",
        fontSize: 34,
        fontWeight: "300",
        marginBottom: 10
    },
    subtitle: {
        fontWeight: "600",
        color:"white",
        fontSize: 24
    },
    textContainer: {
        paddingHorizontal:20,
        alignItems: "flex-start"
    }
});