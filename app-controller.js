/**
 * Created by dann6343 on 8/8/14.
 */
/**
 *  Application Controllers
 */
(function() {
    var app = angular.module('mapApp');

    app.controller('AppController', ['$scope', function($scope) {

        $scope.baseMapLayers = [
            {name:"Topographic"},
            {name:"Streets"},
            {name:"NationalGeographic"},
            {name:"Oceans"},
            {name:"Gray"},
            {name:"DarkGray"},
            {name:"Imagery"},
            {name:"ShadedRelief"}
        ];

        $scope.recreationalWhereClause = "1=1";

        $scope.selectedBaseMapLayer = $scope.baseMapLayers[0];
    }]);

})();