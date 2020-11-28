import React, { useState, useEffect } from "react"
import axios from "axios"
import classes from "./NcaaFootball.module.css"

const NcaaFootball = () => {
    const [mich, setMich] = useState({
        id: "",
        name: "",
        rank: -1,
        logo: "",
    })
    const [other, setOther] = useState({
        id: "",
        name: "",
        rank: -1,
        logo: "",
    })
    const [description, setDescription] = useState({
        description: "",
        detail: "",
        shortDetail: "",
    })

    const [score, setScore] = useState({michScore: -1, oppScore: -1})

    useEffect(() => {
        const url = `https://site.api.espn.com/apis/site/v2/sports/football/college-football/teams/130`
        axios
            .get(url)
            .then(res => {
                const competitors = [
                    ...res.data.team.nextEvent[0].competitions[0].competitors,
                ]
                let rank = 0
                competitors.forEach(comp => {
                    if (comp.id === "130") {
                        rank = comp.curatedRank.current
                        const { id, displayName } = comp.team
                        const { href } = comp.team.logos[0]
                        // console.log(comp)
                        setMich({
                            id: id,
                            name: displayName,
                            rank: rank,
                            logo: href,
                        })
                    } else {
                        const { id, displayName } = comp.team
                        const rank = comp.curatedRank.current
                        const { href } = comp.team.logos[0]
                        setOther({
                            id: id,
                            name: displayName,
                            rank: rank,
                            logo: href,
                        })
                    }
                    return null
                })

                const {
                    description,
                    detail,
                    shortDetail,
                } = res.data.team.nextEvent[0].competitions[0].status.type
                setDescription({
                    description: description,
                    detail: detail,
                    shortDetail: shortDetail,
                })


                const gameId = res.data.team.nextEvent[0].id
                const url2 = `https://site.api.espn.com/apis/site/v2/sports/football/college-football/scoreboard/${gameId}`
                axios.get(url2).then((response) => {
                    const competitors = [...response.data.competitions[0].competitors]
                    for(let i in competitors) {
                        if(competitors[i].id === "130") {
                            const mscore = (competitors[i].linescores[0].value)
                            const oscore = (competitors[i].linescores[1].value)
                            setScore({michScore: mscore, oppScore: oscore})
                        }
                    }
                }).catch(err => {throw new Error(err.message)})
            })
            .catch(err => {
                throw new Error(err.message)
            })
    }, [])
    return (
        <div className={classes.Container}>
            <h2 className={classes.Title}>NCAA Football</h2>
            <div className={classes.SmallContainer}>
                <div className={classes.Teams}>
                    <span className={classes.Michigan}>
                        <span className={classes.Rank}>{mich.rank}</span>
                        <img
                            src={mich.logo}
                            alt='Logo'
                            width='25px'
                            height='25px'
                        />
                        <span className={classes.MichName}>{mich.name}</span>
                    </span>
                    <span className={classes.Divider}>vs.</span>
                    <span className={classes.Other}>
                        <span className={classes.OtherRank}>{other.rank}</span>
                        <img
                            src={other.logo}
                            alt='Logo'
                            width='25px'
                            height='25px'
                        />
                        <span className={classes.OtherName}>{other.name}</span>
                    </span>
                </div>
                <div className={classes.Scores}>
                    <p className={classes.Desc}>{description.description}</p>
                    <p className={classes.Desc}>{description.detail}</p>
                    <p className={classes.Desc}>{score.michScore} - {score.oppScore}</p>
                </div>
            </div>
        </div>
    )
}

export default NcaaFootball
