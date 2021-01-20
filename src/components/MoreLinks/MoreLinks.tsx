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
					href='http://soloway.pbworks.com/w/page/142754205/441%20Winter%202021'
					rel='noreferrer'
					target='__blank'
				>
				EECS 441
				</a>
			</p>
			<p className={classes.LinkWrapper}>
				<a
					className={classes.Link}
					href='https://piazza.com/class/kjsswud2hrj649'
					rel='noreferrer'
					target='__blank'
				>
					EECS 492
				</a>
			</p>
			<p className={classes.LinkWrapper}>
				<a
					className={classes.Link}
					href='https://piazza.com/class/kjumyiqcbaf2po'
					rel='noreferrer'
					target='__blank'
				>
					EECS 493
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
					target='__blank'
				>
					Jisho
				</a>
			</p>
		</LinksWrapper>
	)
}

export default MoreLinks
