const args = process.argv.slice(2);
const fs = require('fs');
const request = require('request');

request(args[0], (error, response, body) => {
  if (error) {
    console.error('Error');
  }
  fs.writeFile(args[1], body , {flag: `w+`}, err => {
    if (err) {
      console.log('something went wrong');
    }
    fs.stat(args[1], (err, stats) => {
      if (err) {
        console.log('File does\'t exist.');
      } else {
        console.log(`Downloaded and saved ${stats.size} bytes to ${args[1]}`);
      }
    });
  });
});