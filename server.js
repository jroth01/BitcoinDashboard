/* Dependencies */
var blockchain = require('blockchain.info');
var express = require('express');
var bodyParser = require('body-parser');
var validator = require('validator');
var app = express();

require('./exchange')(app);

/* Configuration */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views'); // views is directory for html pages
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

/* Endpoints */
app.get('/', function(request, response) {
        response.render('index.html');
});

/* Listen on port 3000 */
app.set('port', (process.env.PORT || 3000));
app.listen(app.get('port'), function() {
        console.log('Node app is running on port', app.get('port'));
});
