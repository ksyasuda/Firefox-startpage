import React from "react"
import classes from "./LinksWrapper.module.css"

interface Props {
	children: any
	icon: any
	color: string
}

const LinksWrapper: React.FC<Props> = (props: Props) => {
	const { icon, color } = props
	return (
		<div className={classes.BigContainer}>
			<img
				src={icon}
				alt='Code'
				className={classes.Icon}
				style={{ backgroundColor: color }}
			/>
			<div className={classes.Container}>{props.children}</div>
		</div>
	)
}

export default LinksWrapper
