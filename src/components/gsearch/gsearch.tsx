import React from "react"
import Button from "@material-ui/core/Button"
import classes from "./gsearch.module.css"
import Search from "../../assets/icons/search.svg"
import Icon from "../../assets/icons/google.svg"

const gsearch: React.FC<{}> = () => {
	return (
		<div
			id='gSearch'
			style={{
				display: "flex",
				justifyContent: "center",
				position: "relative",
				width: "40%",
				left: "30%",
			}}
		>
			<form
				id='textField'
				className={classes.Search}
				action='https://google.com/search'
				method='get'
			>
				<Button
					variant='text'
					color='inherit'
					className={classes.GoogleButton}
				>
					<img
						alt='google icon'
						src={Icon}
						className={classes.Icon}
					/>
				</Button>
				<input
					className={classes.InputBox}
					type='Text'
					name='q'
					placeholder='Search with Google'
				/>
				<Button
					variant='text'
					color='inherit'
					className={classes.Button}
				>
					<img
						alt='Google Search'
						src={Search}
						className={classes.SearchIcon}
					/>
				</Button>
			</form>
		</div>
	)
}

export default gsearch
