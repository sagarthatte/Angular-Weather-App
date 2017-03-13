//DIRECTIVES

weatherApp.directive('temperatureReadings', function() {
   return {
       restrict: 'E',
       templateUrl: 'temperaturereadings.htm',
       replace: true,
       scope: {
           weatherDay: "=",
           convertToTemperature: "&",
           convertToDate: "&",
           dateFormat: "@"
       }
   } 
});