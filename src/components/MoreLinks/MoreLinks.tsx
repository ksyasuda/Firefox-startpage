import React from "react"
import LinksWrapper from "../LinksWrapper/LinksWrapper"
import classes from "./MoreLinks.module.css"
import School from "../../assets/school.svg"

const MoreLinks: React.FC<{}> = () => {
	return (
		<LinksWrapper color='#FFCB05' icon={School} id='morelinks'>
			<p className={classes.LinkWrapper}>
				<a
					className={classes.Link}
					href='https://eecs485staff.github.io/eecs485.org/'
					rel='noreferrer'
					target='__blank'
				>
					EECS 485
				</a>
			</p>
			<p className={classes.LinkWrapper}>
				<a
					className={classes.Link}
					href='https://web.eecs.umich.edu/~weimerw/481/'
					rel='noreferrer'
					target='__blank'
				>
					EECS 481
				</a>
			</p>
			<p className={classes.LinkWrapper}>
				<a
					className={classes.Link}
					href='https://eecs285.github.io/eecs285.org/'
					rel='noreferrer'
					target='__blank'
				>
					EECS 285
				</a>
			</p>
			<p className={classes.LinkWrapper}>
				<a
					className={classes.Link}
					href='https://piazza.com/class/k9vihaw2wd07b0'
					rel='noreferrer'
					target='__blank'
				>
					Piazza
				</a>
			</p>
			<p className={classes.LinkWrapper}>
				<a
					className={classes.Link}
					href='https://jisho.org/'
					rel='noreferrer'
				>
					Jisho
				</a>
			</p>
		</LinksWrapper>
	)
}

export default MoreLinks
