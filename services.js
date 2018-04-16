// SERVICES
weatherApp.service('cityService', function() {
   
    this.city = "New York, NY";
    
});

weatherApp.service('weatherService', ['$resource', function($resource) {
    this.getWeather = function(city, days, appID) {
        
        var weatherAPI = $resource("https://api.openweathermap.org/data/2.5/forecast/daily", {callback: "JSON_CALLBACK"}, {get: {method: "JSONP"}});

        return weatherAPI.get({q: city, cnt: days, APPID: appID});
    }
}]);
