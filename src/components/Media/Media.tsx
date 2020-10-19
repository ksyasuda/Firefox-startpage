import React from "react"
import classes from "./Media.module.css"
import LinksWrapper from "../LinksWrapper/LinksWrapper"
import Entertainment from "../../assets/icons/entertainment.svg"

const Media: React.FC<{}> = () => {
	return (
		<LinksWrapper icon={Entertainment}>
			<p className={classes.LinkWrapper}>
				<a
					className={classes.Link}
					href='https://www.youtube.com'
					rel='noreferrer'
				>
					YouTube
				</a>
			</p>
			<p className={classes.LinkWrapper}>
				<a
					className={classes.Link}
					href='https://www.twitter.com/home'
					rel='noreferrer'
				>
					Twitter
				</a>
			</p>
			<p className={classes.LinkWrapper}>
				<a
					className={classes.Link}
					href='https://www.reddit.com/'
					rel='noreferrer'
				>
					Reddit
				</a>
			</p>
			<p className={classes.LinkWrapper}>
				<a
					className={classes.Link}
					href='https://news.google.com/topstories?hl=en-US&gl=US&ceid=US:en'
					rel='noreferrer'
				>
					Google News
				</a>
			</p>
			<p className={classes.LinkWrapper}>
				<a
					className={classes.Link}
					href='https://tv.youtube.com/welcome/?zipcode=48103'
					rel='noreferrer'
				>
					YouTube TV
				</a>
			</p>
		</LinksWrapper>
	)
}

export default Media
