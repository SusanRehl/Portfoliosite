var myApp=angular.module( 'myApp', ['ngRoute'] );

myApp.config(["$routeProvider", function($routeProvider, $locationProvider) {
	console.log("in scripts in config function");
	$routeProvider
	  .when("#home", {
			templateURL: "views/routes/home.html",
      controller: "viewController"
		})
		.when("#art", {
			templateURL: "views/routes/art.html",
      controller: "viewController"
		})
		.when("/cats", {
			templateURL: "views/routes/cats.html",
      controller: "viewController"
		})
    .when("/blog", {
			templateURL: "views/routes/blog.html",
      controller: "viewController"
		})
    .when("/diy", {
			templateURL: "views/routes/diy.html",
      controller: "viewController"
		})
    .when("/naturephotos", {
			templateURL: "views/routes/naturephotos.html",
      controller: "viewController"
		})
    .when("/travel", {
			templateURL: "views/routes/travel.html",
      controller: "viewController"
		})
		.otherwise({
			redirectTo: "/home"
		});

}]);


myApp.controller("viewController", ["$scope", function($scope){
    console.log("Loaded stuff");
}]);
