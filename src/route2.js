var myApp = angular.module("module", ["ngRoute"]);

//chuyen trang
myApp.config(function ($routeProvider, $locationProvider) {

    $locationProvider.hashPrefix("");

    $routeProvider
        .when("/login", {
            templateUrl: "pages/login.html",
            controller: UserController
        })
        .when("/register", {
            templateUrl: "pages/register.html",
            controller: UserController
        })
        .when("/change-pass", {
            templateUrl: "pages/change-pass.html",
            controller: UserController
        })
        .otherwise({
            redirectTo: "/login",
        });
});