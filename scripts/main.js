console.log('hello from scripts/main.js');

// simple ui for retrieving data from the database ...the magic happens in server.js
document.getElementById('btn-get-data').addEventListener('click', () => {
	fetch('/database')
		.then(resp => resp.json())
		.then(jsonData => {
			console.log(jsonData);
			alert('data retrieved! check the console...');
		});
});