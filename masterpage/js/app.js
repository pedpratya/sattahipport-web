angular.module("moduleApp", [
  "ngRoute",
  "moduleControllers",
  "moduleServices"
])
  .config(["$routeProvider",
    function($routeProvider) {
      $routeProvider.
        when("/", {
          templateUrl: "partials/module-list.html",
          controller: "ModuleListCtrl"
        }).
        when("/:moduleId", {
          templateUrl: "partials/module-detail.html",
          controller: "ModuleListDetailCtrl"
        }).
        otherwise({
          redirectTo: "/"
        });
    }])
  .constant("baseUrl", "http://localhost/sattahipport-web/masterpage/");