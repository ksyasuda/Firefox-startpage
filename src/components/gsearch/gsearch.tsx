import React from "react"
import Button from "@material-ui/core/Button"
import classes from "./gsearch.module.css"
import Search from "../../assets/search.svg"
import Icon from "../../assets/google.svg"

const gsearch: React.FC<{}> = () => {
	const onSubmitHandler = (event: Event) => {
		event.preventDefault()
		const form: any = document.getElementById("textField")
		form.submit()
		form.reset()
	}
	return (
		<div id='gSearch' className={classes.Container}>
			<form
				id='textField'
				className={classes.Search}
				action='https://google.com/search'
				method='get'
				target='__blank'
				autoComplete='on'
				onSubmit={(event: any) => onSubmitHandler(event)}
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
