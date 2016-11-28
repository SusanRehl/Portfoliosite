var myApp = angular.module("myApp", ["ngRoute"]);

myApp.config(["$routeProvider", function($routeProvider) {   //  , $locationProvider
	console.log("in scripts in config function");
	$routeProvider.
	  when("/home", {
			templateUrl: "/views/routes/home.html",
      controller: "homeController"
		}).
		when("/coding", {
			templateUrl: "/views/routes/coding.html",
      controller: "codingController"
		}).
		when("/design", {
			templateUrl: "/views/routes/design.html",
      controller: "designController"
		}).
    when("/hobbies", {
			templateUrl: "/views/routes/hobbies.html",
      controller: "hobbiesController"
		}).
		when("/contact", {
			templateUrl: "/views/routes/contact.html",
			controller: "contactController"
		}).
    when("/blog", {
			templateUrl: "/views/routes/blog.html",
      controller: "blogController"
		}).
		otherwise({
			redirectTo: "/home"
		});

}]);


myApp.controller("homeController", ["$scope", function($scope){
    console.log("Loaded home");
}]);

myApp.controller("codingController", ["$scope", function($scope){
    console.log("Loaded coding");
}]);

myApp.controller("designController", ["$scope", function($scope){
    console.log("Loaded design");
}]);

myApp.controller("hobbiesController", ["$scope", function($scope){
    console.log("Loaded hobbies");
}]);

myApp.controller("contactController", ["$scope", function($scope){
    console.log("Loaded contact");
}]);

myApp.controller("blogController", ["$scope", function($scope){
    console.log("Loaded blog");
}]);
