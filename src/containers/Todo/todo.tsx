import React, {useState, useEffect} from 'react'

interface todo {
	task: string
	id: number
}

const Todo: React.FunctionComponent = () => {
	const [todos, setTodos] = useState<todo[]>([])
	const [todo, setTodo] = useState('')
	const [counter, setCounter] = useState(localStorage.length)
	useEffect(() => {
		const data = []
		for(let i = 0; i < localStorage.length; ++i) {
			const item= localStorage.getItem(i.toString())
			console.log('item:', item)
			const json = JSON.parse(item!)
			data.push(json)
		}
		setTodos(data)
	}, [])

	const updateCounter = () => {
		setCounter(prev => prev + 1)
	}

	const handleClick = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		const text = todo
		const data = {
			text: text,
			id: counter
		}
		localStorage.setItem(counter.toString(), JSON.stringify(data))
		updateCounter()
		event.currentTarget.reset()
	}

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		event.preventDefault()
		setTodo(event.target.value)
	}

	return (
		<section>
			<form onSubmit={event => handleClick(event)} name='todo-form' id='todo-form'>
				<input onChange={event => handleChange(event)} type='text' name='todo-input' placeholder='TODO' id='todo-input' />
				<button label-for='todo-input' type='submit' name='submit-button' id='submit-button'>SAVE</button>
			</form>
		</section>
	)
}

export default Todo
