const express = require('express');
const fs = require('fs');

const server = express();
server.port = 1234;

server.set('view engine', 'ejs');

// required to serve static css and js assets
server.use(express.static('./'));

// automatically knows to look in the views folder ...renders the index view page
server.get('/', (req, res) => res.render('index.ejs'));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// data endpoints

server.get('/database', (req, res) => {
	fs.readFile('./data/database.json', (err, file) => {
		res.send(file.toString());
	});
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

server.listen(server.port, () => console.log(`> server now listening on port ${server.port}...`));