import React from "react"
import classes from "./LinksWrapper.module.css"

interface Props {
	children: any
	icon: any
}

const LinksWrapper: React.FC<Props> = (props: Props) => {
	const { icon } = props
	return (
		<div className={classes.BigContainer}>
			<img src={icon} alt='Code' className={classes.Icon} />
			<div className={classes.Container}>{props.children}</div>
		</div>
	)
}

export default LinksWrapper
