import React from "react";
import LinksWrapper from "../LinksWrapper/LinksWrapper";
import classes from "./MoreLinks.module.css";
import School from "../../assets/school.svg";

const MoreLinks: React.FC<{}> = () => {
	return (
		<LinksWrapper color="#FFCB05" icon={School} id="morelinks">
			<p className={classes.LinkWrapper}>
				<a
					className={classes.Link}
					href="https://piazza.com/class/knq1d0ixyj6u7"
					rel="noreferrer"
					target="__blank"
				>
					EECS 484
				</a>
			</p>
			<p className={classes.LinkWrapper}>
				<a
					className={classes.Link}
					href="https://piazza.com/class/knq1d0ixyj6u7"
					rel="noreferrer"
					target="__blank"
				>
					484 Piazza
				</a>
			</p>
			<p className={classes.LinkWrapper}>
				<a
					className={classes.Link}
					href="http://pages.cs.wisc.edu/~dbbook/"
					rel="noreferrer"
					target="__blank"
				>
					DB Textbook
				</a>
			</p>
			<p className={classes.LinkWrapper}>
				<a
					className={classes.Link}
					href="https://www.gradescope.com/courses/266436"
					rel="noreferrer"
					target="__blank"
				>
					Gradescope
				</a>
			</p>
			<p className={classes.LinkWrapper}>
				<a
					className={classes.Link}
					href="https://jisho.org/"
					rel="noreferrer"
					target="__blank"
				>
					Jisho
				</a>
			</p>
		</LinksWrapper>
	);
};

export default MoreLinks;
