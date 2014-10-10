/**
 * Created by dann6343 on 8/8/14.
 */
/**
 * Main application js
 */
(function() {
    var app = angular.module('mapApp', ["leaflet-directive", "esri-map-module"]);

    // The AppData service works like an application wide model, keeping up with state etc. of the application.
    app.factory('AppData', function() {
        return {state:"map"};
    });

})();