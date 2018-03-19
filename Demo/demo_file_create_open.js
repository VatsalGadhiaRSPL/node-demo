var fs = require('fs');
fs.open('demonewfile.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});