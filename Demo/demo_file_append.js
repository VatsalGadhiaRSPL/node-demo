var fs = require('fs');
fs.appendFile('demo_html_file.txt', '<br/><br/><hr/>Hello content!!!<hr/>', function (err) {
	if (err) throw err;
	console.log('Saved!');
});