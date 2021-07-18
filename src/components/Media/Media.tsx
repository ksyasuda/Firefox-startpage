import React from "react"
import classes from "./Media.module.css"
import LinksWrapper from "../LinksWrapper/LinksWrapper"
import Entertainment from "../../assets/video.svg"

const Media: React.FC<{}> = () => {
	return (
		<LinksWrapper color='#56a7b5' icon={Entertainment} id='media'>
			<p className={classes.LinkWrapper}>
				<a
					className={classes.Link}
					href='https://www.youtube.com'
					rel='noreferrer'
					target='__blank'
				>
					YouTube
				</a>
			</p>
			<p className={classes.LinkWrapper}>
				<a
					className={classes.Link}
					href='https://www.twitter.com/home'
					rel='noreferrer'
					target='__blank'
				>
					Twitter
				</a>
			</p>
			<p className={classes.LinkWrapper}>
				<a
					className={classes.Link}
					href='https://www.reddit.com'
					rel='noreferrer'
					target='__blank'
				>
					Reddit
				</a>
			</p>
			<p className={classes.LinkWrapper}>
				<a
					className={classes.Link}
					href='https://news.google.com/topstories?hl=en-US&gl=US&ceid=US:en'
					rel='noreferrer'
					target='__blank'
				>
					GNews
				</a>
			</p>
			<p className={classes.LinkWrapper}>
				<a
					className={classes.Link}
					href='https://tv.youtube.com/welcome/?zipcode=48103'
					rel='noreferrer'
					target='__blank'
				>
					YT TV
				</a>
			</p>
		</LinksWrapper>
	)
}

export default Media
