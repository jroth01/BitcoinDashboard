
var exchange = require('blockchain.info/exchange');

/* Endpoints for exchange rates & conversion */
module.exports = function(app){

        /* GET ticker info */
        app.get('/getTicker.json', function(request, response) {
                exchange.getTicker().then(function(data) {
                        console.log(data);
                        response.send(data);
                }, function(error) {
                        console.log(error);
                });
        });

        /* GET converted value to BTC */
        app.get('/toBTC.json', function(request, response) {
                //var amount = request.query.amount.intValue();
                //var currency = JSON.stringify(request.query.currency);
                //console.log(request.query);
                exchange.toBTC(1000,'USD').then(function(data) {
                        console.log(data);
                        response.send(data);
                }, function(error) {
                        console.log("ERR:" + error);
                });
        });
}
