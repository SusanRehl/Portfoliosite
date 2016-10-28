var myApp = angular.module("myApp", ["ngRoute"]);

myApp.config(["$routeProvider", function($routeProvider) {   //  , $locationProvider
	console.log("in scripts in config function");
	$routeProvider.
	  when("/home", {
			templateURL: "/views/routes/home.html",
      controller: "homeController"
		}).
		when("/art", {
			templateURL: "/views/routes/art.html",
      controller: "artController"
		}).
		when("/cats", {
			templateURL: "/views/routes/cats.html",
      controller: "catsController"
		}).
    when("/blog", {
			templateURL: "/views/routes/blog.html",
      controller: "blogController"
		}).
    when("/diy", {
			templateURL: "/views/routes/diy.html",
      controller: "diyController"
		}).
    when("/naturephotos", {
			templateURL: "/views/routes/naturephotos.html",
      controller: "natureController"
		}).
    when("/travel", {
			templateURL: "/views/routes/travel.html",
      controller: "travelController"
		}).
		otherwise({
			redirectTo: "/home"
		});

}]);


myApp.controller("homeController", ["$scope", function($scope){
    console.log("Loaded home");
}]);

myApp.controller("artController", ["$scope", function($scope){
    console.log("Loaded art");
}]);

myApp.controller("catsController", ["$scope", function($scope){
    console.log("Loaded cats - hello where are the cats?");
}]);

myApp.controller("blogController", ["$scope", function($scope){
    console.log("Loaded blog");
}]);

myApp.controller("diyController", ["$scope", function($scope){
    console.log("Loaded DIY");
}]);

myApp.controller("natureController", ["$scope", function($scope){
    console.log("Loaded nature");
}]);

myApp.controller("travelController", ["$scope", function($scope){
    console.log("Loaded travel");
}]);
