import React, { useState, useEffect } from "react"
import classes from "./Mlb.module.css"
import axios from "axios"

const Mlb = () => {
    const colors = useState({
        TB: { abbrev: "TB", color: "#092C5C" },
        LAD: { abbrev: "LAD", color: "#0057a5" },
    })
    const [hasRun, setHasRun] = useState(false)
    const [mlb, setMlb] = useState({
        score: -1,
        oppScore: -1,
        inning: -1,
        theTeam: "",
        oppTeam: "",
        theTeamAbv: "",
        oppTeamAbv: "",
        status: "",
        detail: "",
    })

    useEffect(() => {
        // Don't know why I need this but now it doesn't send a million requests
        if (!hasRun) {
            axios
                .get(
                    "https://site.api.espn.com/apis/site/v2/sports/baseball/mlb/teams/lad",
                )
                .then(data => {
                    const { nextEvent } = data.data.team
                    for (let event of nextEvent) {
                        const eventid = event.id
                        // get game data
                        axios
                            .get(
                                `https://site.api.espn.com/apis/site/v2/sports/baseball/mlb/scoreboard/${eventid}`,
                            )
                            .then(res => {
                                //console.log(res)
                                const competitors = [
                                    ...res.data.competitions[0].competitors,
                                ]
                                const {
                                    description,
                                    detail,
                                } = res.data.competitions[0].status.type
                                let tscore, oscore, team, oteam, abv, oabv
                                for (let comp of competitors) {
                                    //console.log(comp)
                                    const {
                                        displayName,
                                        abbreviation,
                                    } = comp.team
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
                                    detail: detail,
                                })
                                setHasRun(true)
                            })
                            .catch(err => console.error(err.message))
                    }
                })
                .catch(err => console.error(err.message))
        }
    }, [hasRun])

    const style1 = {
        color: colors[0].LAD.color,
        backgroundColor: "white",
        marginRight: "3px",
    }

    const style2 = {
        color: colors[0].TB.color,
        backgroundColor: "#9c6263",
    }

    return (
        <div className={classes.BigContainer}>
            <h2 className={classes.Title}>MLB</h2>
            <div className={classes.Container}>
                <div className={classes.Teams}>
                    <span className={classes.Dodgers} style={style1}>
                        {mlb.theTeam}
                    </span>
                    <span className={classes.Divider}>vs.</span>
                    <span className={classes.Other} style={style2}>
                        {mlb.oppTeam}
                    </span>
                </div>
                <p className={classes.Scores}>
                    <span className={classes.DodgerScore}>{mlb.score}</span> -
					{"  "}
                    <span className={classes.OtherScore}>{mlb.oppScore}</span>
                </p>
                <p className={classes.Status}>{mlb.status}</p>
                <p className={classes.Detail}>{mlb.detail}</p>
            </div>
        </div>
    )
}

export default Mlb
