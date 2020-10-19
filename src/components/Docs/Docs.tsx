import React from "react"
import LinksWrapper from "../LinksWrapper/LinksWrapper"
import classes from "./Docs.module.css"
import DocsIcon from "../../assets/icons/docs.svg"

const Docs: React.FC<{}> = () => {
	return (
		<LinksWrapper icon={DocsIcon}>
			<p className={classes.LinkWrapper}>
				<a
					className={classes.Link}
					href='https://en.cppreference.com/w/'
					rel='noreferrer'
				>
					C++
				</a>
			</p>
			<p className={classes.LinkWrapper}>
				<a
					className={classes.Link}
					href='https://docs.python.org/3.7/library/index.html'
					rel='noreferrer'
				>
					Python
				</a>
			</p>
			<p className={classes.LinkWrapper}>
				<a
					className={classes.Link}
					href='https://github.com/ksyasuda'
					rel='noreferrer'
				>
					GitHub
				</a>
			</p>
			<p className={classes.LinkWrapper}>
				<a
					className={classes.Link}
					href='https://www.typescriptlang.org/docs/'
					rel='noreferrer'
				>
					TypeScript
				</a>
			</p>
			<p className={classes.LinkWrapper}>
				<a
					className={classes.Link}
					href='https://www.gnu.org/software/emacs/manual/html_node/emacs/index.html'
					rel='noreferrer'
				>
					EMACS
				</a>
			</p>
		</LinksWrapper>
	)
}

export default Docs
