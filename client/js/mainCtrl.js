/* Main controller */
app.controller('mainCtrl', ['$scope','$route', '$routeParams','$http',
                '$location',
        function($scope, $route, $routeParams, $http, $location) {

        /* Get exchange rate data */
        $scope.getExchangeRates = function() {
                $http({
                  method: 'GET',
                  url: '/getTicker.json'
                }).then(function successCallback(response) {
                        console.log(response.data);
                        $scope.toArray(response.data);
                }, function errorCallback(error) {
                        console.log(error);
                });
        };

        /* Convert response data from object to array */
        $scope.toArray = function(data) {
                $scope.exchangeRates = [];
                Object.keys(data).forEach(function(key,index) {
                        data[key]['currency'] = key;
                        console.log(data[key])
                    $scope.exchangeRates.push(data[key]);
                });
        }

        /* Get exchange rates when the controller loads */
        $scope.getExchangeRates();
}]);
