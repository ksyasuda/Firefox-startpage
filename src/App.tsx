import React from "react"
import Gsearch from "./components/gsearch/gsearch"
import { Helmet } from "react-helmet"
import Fox from "./assets/icons/fox.svg"
import Weather from "./containers/weather/weather"
import classes from "./app.module.css"
import Favorites from "./components/favorites/favorites"
import Docs from "./components/Docs/Docs"
import Media from "./components/Media/Media"
import MoreLinks from "./components/MoreLinks/MoreLinks"
import "./App.css"

function App() {
	return (
		<div className='App' style={{ position: "relative", top: "75px" }}>
			<Helmet>
				<style>{"body { background-color: #263238}"}</style>
			</Helmet>
			<img src={Fox} alt='Firefox' className={classes.Fox} />
			<h1 style={{ color: "#6b2144" }}>Welcome Freud</h1>
			<Gsearch />
			<Weather />
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					marginTop: "2%",
				}}
			>
				<Favorites />
				<Docs />
				<Media />
				<MoreLinks />
			</div>
		</div>
	)
}

export default App
