import React, {useState, useEffect} from 'react'
import axios from 'axios';

const NBA = () => {
	useEffect(() => {
		const url = `https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/lak`
		axios.get(url).then(res => {
			console.log(res)
		})		
	}, [])
	return <div>nice</div>
}

export default NBA