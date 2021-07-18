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
					href="https://mail.google.com/mail/u/1/#inbox"
					rel="noreferrer"
					target="__blank"
				>
					Gmail
				</a>
			</p>
			<p className={classes.LinkWrapper}>
				<a
					className={classes.Link}
					href="https://outlook.office.com/mail/inbox"
					rel="noreferrer"
					target="__blank"
				>
					Outlook
				</a>
			</p>
			<p className={classes.LinkWrapper}>
				<a
					className={classes.Link}
					href="https://www.coursera.org/programs/university-of-michigan-coursera-learning-program-1egh5?authProvider=umich"
					rel="noreferrer"
					target="__blank"
				>
					UMICH Coursera
				</a>
			</p>
			<p className={classes.LinkWrapper}>
				<a
					className={classes.Link}
					href="https://www.office.com/?auth=2"
					rel="noreferrer"
					target="__blank"
				>
					Office 365
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
