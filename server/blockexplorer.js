
var blockexplorer = require('blockchain.info/blockexplorer');

/* Endpoints for exchange rates & conversion */
module.exports = function(app){

        /* GET block info for a single block */
        app.get('/getBlock.json', function(request, response) {
                var blockId = request.query.blockId;
                var options = request.query.options;
                if (blockId) {
                        blockexplorer.getBlock(blockId, options).then(function(data) {
                                console.log(data);
                                response.send(data);
                        }, function(error) {
                                console.log(error);
                        });
                }
        });

        /* GET transaction */
        app.get('/getTx.json', function(request, response) {
                var id = request.query.txId;
                var options = request.query.options;
                blockexplorer.getTx(txId, options).then(function(data) {
                        console.log(data);
                        response.send(data);
                }, function(error) {
                        console.log(error);
                });
        });

        /* GET block height */
        app.get('/getBlockHeight.json', function(request, response) {
                var height = request.query.height;
                var options = request.query.options;
                blockexplorer.getBlockHeight(height, options).then(function(data) {
                        console.log(data);
                        response.send(data);
                }, function(error) {
                        console.log(error);
                });
        });

        /* Get a single address and its transactions. Returns an Address object. */
        app.get('/getAddress.json', function(request, response) {
                var address = request.query.address;
                var options = request.query.options;
                blockexplorer.getAddress(address, options).then(function(data) {
                        console.log(data);
                        response.send(data);
                }, function(error) {
                        console.log(error);
                });
        });

        /* Get information on multiple addresses. */
        app.get('/getMultiAddress.json', function(request, response) {
                var addresses = request.query.addresses;
                var options = request.query.options;
                blockexplorer.getMultiAddress(addresses, options).then(function(data) {
                        console.log(data);
                        response.send(data);
                }, function(error) {
                        console.log(error);
                });
        });

        /* Get an array of unspent outputs for an address. Returns an array of UnspentOutput objects. */
        app.get('/getUnspentOutputs.json', function(request, response) {
                var address = request.query.address;
                var options = request.query.options;
                blockexplorer.getUnspentOutputs(address, options).then(function(data) {
                        console.log(data);
                        response.send(data);
                }, function(error) {
                        console.log(error);
                });
        });

        /* Get the latest block on the main chain. Returns a LatestBlock object. */
        app.get('/getLatestBlock.json', function(request, response) {
                var address = request.query.address;
                var options = request.query.options;
                blockexplorer.getLatestBlock(options).then(function(data) {
                        console.log(data);
                        response.send(data);
                }, function(error) {
                        console.log(error);
                });

        });

        /* Get a list of currently unconfirmed transactions. Returns an array of Transaction objects. */
        app.get('/getUncomfirmedTx.json', function(request, response) {
                var options = request.query.options;
                        blockexplorer.getUncomfirmedTx(options).then(function(data) {
                                console.log(data);
                                response.send(data);
                        }, function(error) {
                                console.log(error);
                        });
        });

        /* Get a list of blocks for a specific day. Returns an array of SimpleBlock objects.*/
        app.get('/getBlocks.json', function(request, response) {
                var time = request.query.time;
                var options = request.query.options;
                blockexplorer.getBlocks(time, options).then(function(data) {
                        console.log(data);
                        response.send(data);
                }, function(error) {
                        console.log(error);
                });
        });

        /* Get a list of blocks for a specific day. Returns an array of SimpleBlock objects.*/
        app.get('/getInventoryData.json', function(request, response) {
                var hash = request.query.hash;
                var options = request.query.options;
                blockexplorer.getInventoryData(hash, options).then(function(data) {
                        console.log(data);
                        response.send(data);
                }, function(error) {
                        console.log(error);
                });
        });



}
