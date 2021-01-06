import React from "react"
import classes from "./favorites.module.css"
import LinksWrapper from "../LinksWrapper/LinksWrapper"
import Code from "../../assets/code.svg"

const Favorites: React.FC<{}> = () => {
	return (
		<LinksWrapper color='#a8d385' icon={Code} id='favorites'>
			<p className={classes.LinkWrapper}>
				<a
					className={classes.Link}
					href='https://www.sudacode.com'
					rel='noreferrer'
					target='__blank'
				>
					Sudacode
				</a>
			</p>
			<p className={classes.LinkWrapper}>
				<a
					className={classes.Link}
					href='https://www.hackerrank.com/dashboard'
					rel='noreferrer'
					target='__blank'
				>
					Hackerrank
				</a>
			</p>
			<p className={classes.LinkWrapper}>
				<a
					className={classes.Link}
					href='https://stackoverflow.com'
					rel='noreferrer'
					target='__blank'
				>
					Stackoverflow
				</a>
			</p>
			<p className={classes.LinkWrapper}>
				<a
					className={classes.Link}
					href='https://umich.instructure.com/login?needs_cookies=1'
					rel='noreferrer'
					target='__blank'
				>
					Canvas
				</a>
			</p>
			<p className={classes.LinkWrapper}>
				<a
					className={classes.Link}
					href='https://www.udemy.com/home/my-courses/learning/'
					rel='noreferrer'
					target='__blank'
				>
					Udemy
				</a>
			</p>
		</LinksWrapper>
	)
}

export default Favorites
