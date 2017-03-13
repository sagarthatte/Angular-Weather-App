//DIRECTIVES

weatherApp.directive('temperatureReadings', function() {
   return {
       restrict: 'E',
       templateUrl: 'directives/temperaturereadings.htm',
       replace: true,
       scope: {
           weatherDay: "=",
           convertToTemperature: "&",
           convertToDate: "&",
           dateFormat: "@"
       }
   } 
});