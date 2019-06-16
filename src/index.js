const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()
const port = process.env.PORT || 3000

const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
	res.render('index', {
		title: 'Network Designer',
		name1: 'Harsha KY',
		name2: 'Hari' 
	})
})

app.get('/about', (req, res) => {
	res.render('about', {
		title: 'About',
		name1: 'Harsha KY',
		name2: 'Hari'
	})
})

app.get('/help', (req, res) => {
	res.render('help', {
		title: 'Help',
		name1: 'Harsha KY',
		name2: 'Hari'
	})
})

app.get('*', (req, res) => {
	res.render('404', {
		title: '404',
		name1: 'Harsha KY',
		name2: 'Hari',
		errorMessage: 'Page Not Found.'
	})
})

app.listen(port, () => {
	console.log(`Server is up on port ${port}`);
})