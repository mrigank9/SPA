//CONTROLLERS
weatherApp.controller('homeController', ["$scope","cityService",function($scope,cityService) {
    $scope.city=cityService.city;
    $scope.$watch('city',function() {
        cityService.city=$scope.city;
    })
}]);

weatherApp.controller('forecastController', 
                      ["$routeParams","$scope","cityService","$resource","$sce",function($routeParams,$scope,cityService,$resource,$sce) {

    $scope.city=cityService.city;
    $scope.weatherAPI=$resource("http://api.openweathermap.org/data/2.5/forecast/daily?APPID=13d3f11d8762030e344998aedb7a9464", {get: {method: "JSONP"}});
    $scope.days = $routeParams.days || '2';
    $scope.weatherResult=$scope.weatherAPI.get({ q: $scope.city, cnt: $scope.days});
    
    $scope.convertToCelsius = function(K) {
        return Math.round(K-273.15);
    }
    $scope.convertToDate = function(dt) {
        return new Date(dt * 1000); //api returns date in millisecond
    }
    
}]);
