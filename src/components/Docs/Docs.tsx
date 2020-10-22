import React from "react"
import LinksWrapper from "../LinksWrapper/LinksWrapper"
import classes from "./Docs.module.css"
import DocsIcon from "../../assets/note.svg"

const Docs: React.FC<{}> = () => {
	return (
		<LinksWrapper color='#fc855a' icon={DocsIcon} id='docs'>
			<p className={classes.LinkWrapper}>
				<a
					className={classes.Link}
					href='https://en.cppreference.com/w/'
					rel='noreferrer'
					target='__blank'
				>
					C++
				</a>
			</p>
			<p className={classes.LinkWrapper}>
				<a
					className={classes.Link}
					href='https://docs.python.org/3.7/library/index.html'
					rel='noreferrer'
					target='__blank'
				>
					Python
				</a>
			</p>
			<p className={classes.LinkWrapper}>
				<a
					className={classes.Link}
					href='https://github.com/ksyasuda'
					rel='noreferrer'
					target='__blank'
				>
					GitHub
				</a>
			</p>
			<p className={classes.LinkWrapper}>
				<a
					className={classes.Link}
					href='https://www.typescriptlang.org/docs/'
					rel='noreferrer'
					target='__blank'
				>
					TypeScript
				</a>
			</p>
			<p className={classes.LinkWrapper}>
				<a
					className={classes.Link}
					href='https://reactjs.org/docs/getting-started.html'
					rel='noreferrer'
					target='__blank'
				>
					React
				</a>
			</p>
		</LinksWrapper>
	)
}

export default Docs
