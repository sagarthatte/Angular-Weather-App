// ROUTES
weatherApp.config(function ($routeProvider) {
   
    $routeProvider
    
    .when('/', {
        templateUrl: 'home.htm',
        controller: 'homeController'
    })
    
    .when('/forecast', {
        templateUrl: 'forecast.htm',
        controller: 'forecastController'
    })
    
    .when('/forecast/:days', {
        templateUrl: 'forecast.htm',
        controller: 'forecastController'
    })
    
});