angular.module("moduleControllers", [])

	.controller("ModuleListCtrl", function($scope, $http, $resource, baseUrl, Module) {	  	
	  	$scope.loading = true;
	  	$scope.listModules = function () {
	  		$scope.modules = Module.query();
		}
		$scope.listModules();
	})
	.controller("ModuleListDetailCtrl", function($scope, $http, $routeParams, baseUrl) {
	  	$scope.loading = true;
	  	$scope.listModulesById = function () {
	  		$http.get(baseUrl + "moduleLeft.json").success(function (data) {
	            $scope.modulesLeft = data;
	        });
		}
		$scope.listModulesById();
	  	
	});