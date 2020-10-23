import React, { useState, useEffect } from "react"
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
		const prom1 = axios.get(
			`https://api.openweathermap.org/data/2.5/weather?q=Ann+Arbor&units=imperial&appid=${process.env.REACT_APP_WEATHER_KEY}`,
		)
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
				<span className={classes.WeatherInfo}> {currentWeather}℉</span>
				<span className={classes.WeatherInfo}>
					<span className={classes.Icon}></span> {feelsLike}℉
				</span>
				<span className={classes.WeatherInfo}>
					: {highTemp}℉ / : {lowTemp}℉
				</span>
				<span className={classes.WeatherInfo}>
					<span className={classes.Icon}> </span>
					{description}
				</span>
				<span className={classes.WeatherInfo}>煮 {wind} MPH</span>
			</div>
		</>
	)
}

export default Weather
