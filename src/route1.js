var myApp = angular.module("module", ["ngRoute"]);

//chuyen trang
myApp.config(function ($routeProvider, $locationProvider) {

    $locationProvider.hashPrefix("");

    $routeProvider
        .when("/product-management", {
            templateUrl: "pages/product-management.html",
            controller: ProductsController
        })
        .when("/category-management", {
            templateUrl: "pages/category-management.html",
            controller: CategorysController
        })
        .when("/product-management/:id", {
            templateUrl: "pages/product-management.html",
            controller: ProductsController
        })
        .when("/product-management/:id/remove", {
            templateUrl: "pages/product-management.html",
            controller: ProductsController
        })
        .when("/product-management/add", {
            templateUrl: "pages/product-management.html",
            controller: ProductsController
        })
        .when("/product-management/update", {
            templateUrl: "pages/product-management.html",
            controller: ProductsController
        })
        .when("/category-management/:id", {
            templateUrl: "pages/category-management.html",
            controller: CategorysController
        })
        .when("/category-management/:id/remove", {
            templateUrl: "pages/category-management.html",
            controller: CategorysController
        })
        .when("/category-management/add", {
            templateUrl: "pages/category-management.html",
            controller: CategorysController
        })
        .when("/category-management/update", {
            templateUrl: "pages/category-management.html",
            controller: CategorysController
        })
        .otherwise({
            redirectTo: "/product-management",
        });
});