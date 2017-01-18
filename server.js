/* Dependencies */
var blockchain = require('blockchain.info');
var express = require('express');
var bodyParser = require('body-parser');
var validator = require('validator');
var app = express();

require('./server/exchange')(app);
require('./server/blockexplorer')(app);

/* Configuration */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/partials", express.static(__dirname + '/client/partials'));
app.set('views', __dirname + '/client'); // views is directory for html pages
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

/* Endpoints */
app.get('/', function(request, response) {
        response.render('partials/index.html');
});

app.get('/app.js', function(request, response) {
        response.sendFile(__dirname + '/client/js/app.js');
});
app.get('/mainCtrl.js', function(request, response) {
        response.sendFile(__dirname + '/client/js/mainCtrl.js');
});

app.get('/style.css', function(request, response) {
        response.sendFile(__dirname + '/client/style/style.css');
});

/* Listen on port 3000 */
app.set('port', (process.env.PORT || 3000));
app.listen(app.get('port'), function() {
        console.log('Node app is running on port', app.get('port'));
});
