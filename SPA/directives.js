//DIRECTIVES
weatherApp.directive("weatherReport", function() {
    return {
        restrict: 'E',
        templateUrl: 'directives/weatherReport.html',
        replace: true,
        scope: {
            weatherDay: "=", //because its an object, 2 way binding
            //helps pass object
            convertToStandard: "&", //function
            convertToDate: "&", //function
            dateFormat: "@" //interpolate
                        
        }
    }
});