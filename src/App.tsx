import React from "react"
import Gsearch from "./components/gsearch/gsearch"
import { Helmet } from "react-helmet"
import Fox from "./assets/firefox.svg"
import Weather from "./containers/weather/weather"
import classes from "./app.module.css"
import Favorites from "./components/favorites/favorites"
import Docs from "./components/Docs/Docs"
import Media from "./components/Media/Media"
import MoreLinks from "./components/MoreLinks/MoreLinks"
import Mlb from "./containers/Mlb/Mlb"
import NcaaFootball from "./containers/NcaaFootball/NcaaFootball"
import "./App.css"

function App() {
	return (
		<div className={classes.Container}>
			<Helmet>
				<style>{"body { background-color: #263238}"}</style>
				<title>{"Sudacode Startpage"}</title>
			</Helmet>
			<img src={Fox} alt='Firefox' className={classes.Fox} />
			<h1 style={{ color: "#6b2144" }}>Welcome Freud</h1>
			<Gsearch />
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					marginTop: "2%",
					position: "relative",
				}}
			>
				<Favorites />
				<Docs />
				<Media />
				<MoreLinks />
			</div>
			<Weather />
			<Mlb />
			<NcaaFootball />
		</div>
	)
}

export default App
