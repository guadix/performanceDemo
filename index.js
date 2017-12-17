var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(express.static('public'));
app.use(bodyParser.text());

const path = require('path');

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  console.log('requested /');
  res.sendFile(path.join(__dirname, 'public/index.html'));
})

app.post('/collector', function (req, res, next) {
  console.log('=================================================================');
  console.log('=================================================================');
  console.log('  ||||    |||| ||||||| ||||||||| ||||||||| || |||||||| ||||||||  ');
  console.log('  ||  ||||  || ||          ||    ||     || || ||       ||        ');
  console.log('  ||   ||   || ||||        ||    ||||||||  || ||       ||||||||  ');
  console.log('  ||        || ||          ||    ||    ||  || ||             ||  ');
  console.log('  ||        || |||||||     ||    ||     || || |||||||| ||||||||  ');
  console.log('=================================================================');
  console.log('=================================================================');

  console.log(JSON.parse(req.body));
  res.status(200).send({message: 'OK'});
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
