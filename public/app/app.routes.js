/**
 * Created by akshay on 12/19/2016.
 */
angular.module('app.routes', ['ngRoute'])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/',{
                templateUrl : 'views/pages/home.html',
                controller : 'MainController',
                controllerAs : 'main'
            })
    });
