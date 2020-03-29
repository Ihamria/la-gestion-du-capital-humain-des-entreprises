const bodyParser = require('body-parser');
const express = require('express');
const fs = require('fs');

const app = express();
const port = 3000;

const readJson = fs.readFileSync('./data/series.json');
const readJson1=fs.readFileSync('./data/names.json')
let data = JSON.parse(readJson);
let data1=JSON.parse(readJson1);

app.set('views', './views'); // specify the views directory
app.set('view engine', 'ejs'); // register the template engine

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/views'));

app.get('/index', (req, res) => {
	const { filter } = req.query;
	let filterData = [];

	if (filter) {
		for (let dt of data) {
			if (
				dt.Title.toLowerCase() === filter.toLowerCase() ||
				dt.Country.toLowerCase() === filter.toLowerCase() ||
				dt.ID === parseFloat(filter)
			) {
				filterData.push(dt);
			}
		}
	}

	if (!filter) {
		filterData = data;
	}

	res.render('index', { data: filterData, filter });
});

// add Name
app.get('/', (req, res) => {
	res.render('login');
});

app.post('/addName', (req, res) => {
	const { name,lname,role,email,password} = req.body;

	data1.push({ ID: data1.length + 1, name: name, lname: lname,role:role,email:email,password:password });
	fs.writeFileSync('./data/names.json', JSON.stringify(data1, null, 4));
	res.redirect('/index');
});
// add company
app.get('/add', (req, res) => {
	res.render('add');
});

app.post('/add', (req, res) => {
	const { title, country,local,desc,departements} = req.body;

	data.push({ ID: data.length + 1, Title: title, Country: country,local:local,desc:desc,departements:departements });
	fs.writeFileSync('./data/series.json', JSON.stringify(data, null, 4));
	res.redirect('/');
});
app.get('/display/:id', (req, res) => {
	const { id } = req.params;
	let dataId;
	console.log(id)

	for (let i = 0; i < data.length; i++) {
		if (Number(id) === data[i].ID) {
			dataId = i;
		}console.log('helo weld nass')
	}
	
	res.render('select', { data: data[dataId] });

	
});

app.get('/edit/:id', (req, res) => {
	const { id } = req.params;
	let dataId;

	for (let i = 0; i < data.length; i++) {
		if (Number(id) === data[i].ID) {
			dataId = i;
		}
	}

	res.render('edit', { data: data[dataId] });
});

app.post('/edit/:id', (req, res) => {
	const { id } = req.params;
	const { title, country,local,desc,departements } = req.body;

	let dataId;
	for (let i = 0; i < data.length; i++) {
		if (Number(id) === data[i].ID) {
			dataId = i;
		}
	}

	data[dataId].Title = title;
	data[dataId].Country = country;
	data[dataId].local = local;
	data[dataId].desc = desc;
	data[dataId].departements= departements;

	fs.writeFileSync('./data/series.json', JSON.stringify(data, null, 4));
	res.redirect('/');
});

app.get('/delete/:id', (req, res) => {
	const { id } = req.params;

	const newData = [];
	for (let i = 0; i < data.length; i++) {
		if (Number(id) !== data[i].ID) {
			newData.push(data[i]);
		}
	}

	data = newData;
	fs.writeFileSync('./data/series.json', JSON.stringify(data, null, 4));
	res.redirect('/index');
});

app.listen(port, () => console.log(`youcode listening on port ${port}!`));
