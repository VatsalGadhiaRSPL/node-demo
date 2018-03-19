var fs = require('fs');

fs.unlink('demonewfile.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});