import React, { useState, useEffect } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThermometerFull, faSun, faTemperatureHigh, faTemperatureLow, faCloudSunRain, faWind } from '@fortawesome/free-solid-svg-icons'
import classes from "./weather.module.css"
import axios from "axios"

const Weather: React.FC<{}> = () => {
	const [currentWeather, setCurrentWeather] = useState(null)
	const [feelsLike, setFeelsLike] = useState(null)
	const [highTemp, setHighTemp] = useState(null)
	const [lowTemp, setLowTemp] = useState(null)
	const [description, setDescription] = useState(null)
	const [wind, setWind] = useState(null)
	useEffect(() => {
		// const LOCATION = 'Ann+Arbor'
		const LOCATION = 'Los+Angeles'
		const url = `https://api.openweathermap.org/data/2.5/weather?q=${LOCATION}&units=imperial&appid=${process.env.REACT_APP_WEATHER_KEY}`
		const prom1 = axios.get(url)
		//`https://api.openweathermap.org/data/2.5/weather?q=Ann+Arbor&units=imperial&appid=${process.env.REACT_APP_WEATHER_KEY}`
		prom1.then((res: any) => {
			// console.log(res)
			const { main, weather, wind } = res.data
			setCurrentWeather(main.temp)
			setFeelsLike(main.feels_like)
			setHighTemp(main.temp_max)
			setLowTemp(main.temp_min)
			setDescription(weather[0].description)
			setWind(wind.speed)
		})
		prom1.catch(err => console.error(err.message))
	}, [])
	return (
		<>
			<h2 className={classes.Title}>Weather </h2>
			<div className={classes.WeatherContainer}>
				<span className={classes.WeatherInfo}><FontAwesomeIcon icon={faThermometerFull}/>{currentWeather}℉</span>
				<span className={classes.WeatherInfo}>
					<span className={classes.Icon}><FontAwesomeIcon icon={faSun}/></span>{feelsLike}℉
				</span>
				<span className={classes.WeatherInfo}>
					<FontAwesomeIcon icon={faTemperatureHigh}/> {highTemp}℉ <span id={classes.divider}>/</span> <FontAwesomeIcon icon={faTemperatureLow}/> {lowTemp}℉
				</span>
				<span className={classes.WeatherInfo}>
					<span className={classes.Icon}><FontAwesomeIcon icon={faCloudSunRain}/></span>
					{description}
				</span>
				<span className={classes.WeatherInfo}><FontAwesomeIcon icon={faWind}/> {wind} MPH</span>
			</div>
		</>
	)
}

export default Weather
