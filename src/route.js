var myApp = angular.module("module", ["ngRoute"]);

//chuyen trang
myApp.config(function ($routeProvider, $locationProvider) {

    $locationProvider.hashPrefix("");

    $routeProvider
        .when("/home", {
            templateUrl: "pages/home.html",
            controller: ProductsController
        })
        .when("/products", {
            templateUrl: "pages/products.html",
            controller: ProductsController
        })
        .when("/about", {
            templateUrl: "pages/about.html",
        })
        .when("/event", {
            templateUrl: "pages/event.html",
        })
        .when("/detail/:id", {
            templateUrl: "pages/detail.html",
            controller: ProductsController
        })
        .otherwise({
            redirectTo: "/home",
        });
});