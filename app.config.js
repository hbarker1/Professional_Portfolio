"use strict";
angular
.module("Portfolio")
.config(["$routeProvider", ($routeProvider) => {
    $routeProvider
    .when("/recipe-list", {
        template: "<recipe-list></recipe-list>"
})
    .when("/favorites-page", {
        template: "<favorites-page></favorites-page>"
    })
    .otherwise({ redirectTo: "/recipe-list" })
    
    }]);