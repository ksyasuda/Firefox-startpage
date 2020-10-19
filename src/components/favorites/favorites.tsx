import React from "react"
import classes from "./favorites.module.css"
import LinksWrapper from "../LinksWrapper/LinksWrapper"
import Code from "../../assets/icons/code.svg"

const Favorites: React.FC<{}> = () => {
	return (
		<LinksWrapper icon={Code}>
			<p className={classes.LinkWrapper}>
				<a
					className={classes.Link}
					href='https://www.sudacode.com'
					rel='noreferrer'
				>
					Sudacode
				</a>
			</p>
			<p className={classes.LinkWrapper}>
				<a
					className={classes.Link}
					href='https://www.hackerrank.com/dashboard'
					rel='noreferrer'
				>
					Hackerrank
				</a>
			</p>
			<p className={classes.LinkWrapper}>
				<a
					className={classes.Link}
					href='https://stackoverflow.com'
					rel='noreferrer'
				>
					Stackoverflow
				</a>
			</p>
			<p className={classes.LinkWrapper}>
				<a
					className={classes.Link}
					href='https://umich.instructure.com/login?needs_cookies=1'
					rel='noreferrer'
				>
					Canvas
				</a>
			</p>
			<p className={classes.LinkWrapper}>
				<a
					className={classes.Link}
					href='https://dashboard.heroku.com/apps'
					rel='noreferrer'
				>
					Heroku
				</a>
			</p>
		</LinksWrapper>
	)
}

export default Favorites
