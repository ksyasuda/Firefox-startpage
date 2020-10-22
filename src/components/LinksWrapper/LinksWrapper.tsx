import React from "react"
import classes from "./LinksWrapper.module.css"

interface Props {
	children: any
	icon: any
	color: string
	id: string
}

const LinksWrapper: React.FC<Props> = (props: Props) => {
	const { icon, color, id } = props

	return (
		<div className={classes.BigContainer}>
			<img
				src={icon}
				id={id}
				alt='Code'
				className={classes.Icon}
				style={{ backgroundColor: color }}
			/>
			<div className={classes.Container}>{props.children}</div>
		</div>
	)
}

export default LinksWrapper
