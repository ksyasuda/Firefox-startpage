import express from "express"
import Datastore from 'nedb'
import cors from 'cors'
const app = express()
app.use(cors())
const db = new Datastore("todos.db")
db.loadDatabase()

const PORT = process.env.PORT || 3005

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`)
})

app.get("/all-todos", (req: express.Request, res: express.Response) => {
	console.log('Searching for data')
	db.find({}, (err: any, data: any) => {
		console.log(data)
		if (err) {
			console.error(err)
			res.end()
			return
		}
		res.json(data)
	})
})

app.post("/new-todo", (req: express.Request, res: express.Response) => {
	console.log(req)
	const data = req.body
	console.log('Inserting data into database', data)
	db.insert(data)
	res.json({
		status: "Successfully inserted data",
	})
})

app.get('/remove-todo', (req: express.Request, res: express.Response) => {
	const data = req.body
	db.remove(data, {multi:true}, function(err, numRemoved) {
		if(err) {
			console.error(err)
			res.send('error occured, check logs for more help')
			res.end()
		}
		res.json({status: `${numRemoved} items removed from the database`})
	})
})
