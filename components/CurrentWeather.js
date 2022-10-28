import React, { useEffect, useState } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native';
import { format, isSameDay } from 'date-fns';
import { LinearGradient } from "expo-linear-gradient";

const getIcon = (icon) => `https://openweathermap.org/img/wn/${icon}@4x.png`

export default function CurrentWeather({ data }) {
    const [currentWeather, setCurrentWeather] = useState(null)

    useEffect(() => {
        const currentW = data.list.filter(forecast => {
        const today = new Date().getTime() + Math.abs(data.city.timezone * 1000)
        const forecastDate = new Date(forecast.dt * 1000)
        return isSameDay(today, forecastDate)
        })
        setCurrentWeather(currentW[0])
    }, [data])

    const frenchLocale = require('date-fns/locale/fr');
    const date = new Date()
    const dateFormatted = format(date, 'EEEE, dd MMMM',{locale:frenchLocale})


    return (
        <LinearGradient style={{borderRadius:50}}
        colors={["#15c0f6", "#149afa", "#034bbb"]}>
        <View style={styles.container}>
            <Text style={styles.city} >{data?.city?.name}</Text>

            <Image source={{ uri: getIcon(currentWeather?.weather[0].icon) }} 
             style={styles.image}/>
            <Text style={styles.temp}>{Math.round(currentWeather?.main.temp)}°</Text>
            <Text style={styles.description}>{currentWeather?.weather[0].description}</Text>
            <Text style={styles.today}>{dateFormatted}</Text>
            <View style={styles.spacer}/>
            <View style={styles.info}>
            <Text style={styles.infoWind}>Vent : {Math.round(currentWeather?.wind.speed)} km/h</Text>
            <Text style={styles.infoHumi}>Humidité : {currentWeather?.main.humidity}%</Text>
            </View>
        </View>
        </LinearGradient>
    )
}

const COLOR = "white"

const styles = StyleSheet.create({
    city: {
        fontSize: 36,
        fontWeight: "400",
        color:  COLOR,
    },
    today: {
        fontSize: 24,
        fontWeight: "300",
        color: COLOR,
    },
    image: {
        width:300,
        height:300,
        padding:0,
        margin:0,
    },
    temp: {
        textAlign:"center",
        fontSize:150,
        fontWeight:"bold",
        color: COLOR,
    },
    description: {
        fontSize:24,
        fontWeight: 'bold',
        color:COLOR,
    },
    container:{
        margin:0,
        padding:0,
        alignItems:"center",
        height:"75%",
    },
    infoWind:{
        color:"white",
        textAlign:"center",
        marginHorizontal:"20%"
    },
    infoHumi:{
        color:"white",
        textAlign:"center",
        marginHorizontal:"20%"
    },
    info:{
        flexDirection:"row",
        margin:0,
        padding:0
    },
    spacer:{
        marginVertical:5,
        backgroundColor: "#2186F5",
        height:1,
        width:'80%'
    }
})
