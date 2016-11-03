var myApp = angular.module("myApp", ["ngRoute"]);

myApp.config(["$routeProvider", function($routeProvider) {   //  , $locationProvider
	console.log("in scripts in config function");
	$routeProvider.
	  when("/home", {
			templateUrl: "/views/routes/home.html",
      controller: "homeController"
		}).
		when("/art", {
			templateUrl: "/views/routes/art.html",
      controller: "artController"
		}).
		when("/cats", {
			templateUrl: "/views/routes/cats.html",
      controller: "catsController"
		}).
    when("/blog", {
			templateUrl: "/views/routes/blog.html",
      controller: "blogController"
		}).
    when("/diy", {
			templateUrl: "/views/routes/diy.html",
      controller: "diyController"
		}).
    when("/naturephotos", {
			templateUrl: "/views/routes/naturephotos.html",
      controller: "natureController"
		}).
    when("/travel", {
			templateUrl: "/views/routes/travel.html",
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
