console.log('app running')

const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()
const port = 3000

const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
	res.render('index', {
		title: 'Network Diagram App',
		name1: 'Harsha KY',
		name2: 'Hari' 
	})
})

app.listen(port, () => {
	console.log(`Server is up on port ${port}`);
})