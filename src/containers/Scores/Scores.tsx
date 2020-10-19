import React, { useState, useEffect } from "react"
import classes from "./Scores.module.css"
import axios from "axios"

const Scores: React.FC<{}> = () => {
	const [mlb, setMlb] = useState({
		score: -1,
		oppScore: -1,
		inning: -1,
		theTeam: "",
		oppTeam: "",
		theTeamAbv: "",
		oppTeamAbv: "",
		status: "",
	})

	useEffect(() => {
		axios
			.get(
				"http://site.api.espn.com/apis/site/v2/sports/baseball/mlb/teams/lad"
			)
			.then(data => {
				const { nextEvent } = data.data.team
				for (let event of nextEvent) {
					const eventid = event.id
					// get game data
					axios
						.get(
							`http://site.api.espn.com/apis/site/v2/sports/baseball/mlb/scoreboard/${eventid}`
						)
						.then(res => {
							console.log(res)
							const competitors = [
								...res.data.competitions[0].competitors,
							]
							const {
								description,
							} = res.data.competitions[0].status.type
							let tscore, oscore, team, oteam, abv, oabv
							for (let comp of competitors) {
								console.log(comp)
								const { displayName, abbreviation } = comp.team
								const { score } = comp
								if (abbreviation === "LAD") {
									tscore = score
									team = displayName
									abv = abbreviation
								} else {
									oscore = score
									oteam = displayName
									oabv = abbreviation
								}
							}
							setMlb({
								score: tscore,
								oppScore: oscore,
								inning: -1,
								theTeam: team,
								oppTeam: oteam,
								theTeamAbv: abv,
								oppTeamAbv: oabv,
								status: description,
							})
						})
						.catch(err => console.error(err.message))
				}
			})
			.catch(err => console.error(err.message))
	}, [])

	return (
		<div className={classes.BigContainer}>
			<h2 className={classes.Title}>MLB</h2>
			<div className={classes.Container}>
				<div className={classes.Teams}>
					<span className={classes.Dodgers}>{mlb.theTeam}</span>
					<span className={classes.Divider}>vs.</span>
					<span className={classes.Other}>{mlb.oppTeam}</span>
				</div>
				<p className={classes.Scores}>
					<span className={classes.DodgerScore}>{mlb.score}</span> -
					{"  "}
					<span className={classes.OtherScore}>{mlb.oppScore}</span>
				</p>
				<p className={classes.Status}>{mlb.status}</p>
			</div>
		</div>
	)
}

export default Scores
