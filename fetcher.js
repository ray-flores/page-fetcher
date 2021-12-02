
const request = require('request');
const fs = require('fs');
const args = process.argv.splice(2);

const fetcher = (args) => {
  request(args[0], (error, object) => {
    //download content and save to URL path on machine.
    fs.writeFile(args[1], object.body, err => {
      if (err) {
        console.error(err)
        return
      }
      console.log(`Downloaded and saved ${object.body.length} bytes to ${args[1]}`)
      return //file written successfully
    });
    console.log('error:', error); // Print the error if one occurred
  });
};

fetcher(args); // Don't forget to pass in your arguments!!!

// PATH to folder: './page-fetcher.html'


