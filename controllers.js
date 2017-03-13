// CONTROLLERS
weatherApp.controller('homeController', ['$scope', '$location', 'cityService', function($scope, $location, cityService) {
    
    $scope.city = cityService.city;
    
    $scope.$watch('city', function() {
       cityService.city = $scope.city; 
    });
    
    $scope.submit = function() {
        $location.path('/forecast');
    }
    
}]);

weatherApp.controller('forecastController', ['$scope', '$routeParams', 'cityService', 'weatherService', function($scope, $routeParams, cityService, weatherService) {
    
    $scope.city = cityService.city;
    $scope.appID = '469ac837dc8b40b60d66a9e465fe8b10';
    
    $scope.days = $routeParams.days || '2';
        
    $scope.weatherResult = weatherService.getWeather($scope.city, $scope.days, $scope.appID);
    
    $scope.convertToCelsius = function(degKelvin) {
        
        return Math.round(degKelvin - 273.15);  
    }
    
    $scope.convertToDate = function(dt) {
        return new Date(dt * 1000);
    }
    
}]);