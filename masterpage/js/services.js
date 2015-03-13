
angular.module('moduleServices', ['ngResource'])

.factory('Module', function($resource, baseUrl){
    return $resource(baseUrl + "modules.json" + ":id", { id: "@id" });
    // return {
    //     query : function() {
    //         return $http.get(baseUrl + "modules.json");
    //     },
    //     get : function(id) {
    //         return $http.get(baseUrl + "modulesLeft.json");
    //     },
    //     save : function(data) {
    //         return $http({
    //             method: 'POST',
    //             url: baseUrl,
    //             headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
    //             data: $.param(data)
    //         });
    //     },
    //     destroy : function(id) {
    //         return $http.delete(baseUrl + id);
    //     }
    // }
});