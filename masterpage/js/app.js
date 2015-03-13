angular.module("moduleApp", [
  "ngRoute",
  "moduleControllers",
  "moduleServices",
  "ui.router"
])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
 
    $stateProvider
        .state('app', {
            url:'/',
            views: {
                'header': {
                    templateUrl: 'partials/a.html'                    
                },
                'content': {
                    templateUrl: 'partials/module-list.html',
                    controller: 'ModuleListCtrl'
                },
                'sub': {
                    templateUrl: 'partials/a.html'                    
                },
                'footer': {
                    templateUrl: 'partials/b.html'
                }
            }
        })
        .state('app.detail', {
            url:'detail/:id',
            views: {
                'content@': {
                    templateUrl: 'partials/module-detail.html',
                    controller: 'ModuleListDetailCtrl'
                }
            }
        })
        .state('app.detail.sub', {
                url: '/:id/:url',
                views: {
                    'detail@app.detail': {
                        templateUrl: function ($stateParams){
                          
                          return $stateParams.url;
                        },
                        abstract: true  
                    }
                }
         
            });

}])
.constant("baseUrl", "http://localhost/sattahipport-web/masterpage/");