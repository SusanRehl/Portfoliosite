var myApp = angular.module("myApp", ["ngRoute", "ui.bootstrap", "ngAnimate"]);

myApp.controller("homeController", ["$scope", function($scope){
    console.log("Loaded home");
}]);

myApp.controller("codingController", ["$scope", function($scope){
    console.log("Loaded coding");
}]);

myApp.controller("designController", ["$scope", function($scope){
    console.log("Loaded design");
}]);

myApp.controller("hobbiesController", ["$scope", "$http", function($scope, $http){
    console.log("Loaded hobbies");

    // UIB carousel

    $scope.myInterval = 5000;  // interval between slides
    $scope.noWrapSlides = false;  // wraps slides
    $scope.active = 0;  // sets index of first (active) slide to 0
    var slides = $scope.slides = [];  // creates empty array for slides
    var currIndex = 0;  // sets currIndex id to 0

    $scope.count = 0;
    $scope.totalSlides = function() {
      for(var i=0; i<$scope.slides.length; i++) {
        $scope.count++;
      }
    };
        // gets all slides for Italy carousel on Hobbies page
      $scope.getItalySlides = function() {
        event.preventDefault();
        console.log("in getItalySlides function in script.js");
        $http({
          method: 'GET',
          url: '/getItalySlides'
        }).then( function(response){
          slides = response.data;
          $scope.slides = slides;
          $scope.totalSlides();
        }, function myError(response){
          console.log(response.statusText);
        }  // end error function
        );  // end then response
      };

      //end UIB carousel

}]);  // end hobbiesController

myApp.controller("contactController", ["$scope", function($scope){
    console.log("Loaded contact");
}]);

myApp.controller("blogController", ["$scope", function($scope){
    console.log("Loaded blog");
}]);

myApp.controller("navCtrl", ["$scope", "$location", function($scope, $location){ // controller for navigation
		$scope.isActive = function(route) {
			return route === $location.path();
		};
}]);

// UIB MODAL FOR DESIGN PAGE

angular.module('myApp').controller('modalCtrl', function ($uibModal, $log) {
  var $ctrl = this;
  $ctrl.items = ['item1', 'item2', 'item3'];

  $ctrl.animationsEnabled = true;

  $ctrl.unimed = function (size) {
    var modalInstance = $uibModal.open({
      animation: $ctrl.animationsEnabled,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: 'unimed.html',
      controller: 'ModalInstanceCtrl',
      controllerAs: '$ctrl',
      windowClass: 'app-modal-window',
      size: size,
      resolve: {
        items: function () {
          return $ctrl.items;
        }
      }
    });
  };  // end unimed

  $ctrl.ugs = function (size) {
    var modalInstance = $uibModal.open({
      animation: $ctrl.animationsEnabled,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: 'ugs.html',
      controller: 'ModalInstanceCtrl',
      controllerAs: '$ctrl',
      windowClass: 'app-modal-window',
      size: size,
      resolve: {
        items: function () {
          return $ctrl.items;
        }
      }
    });
   };  // end ugs

  $ctrl.rsc = function (size) {
    var modalInstance = $uibModal.open({
      animation: $ctrl.animationsEnabled,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: 'rsc.html',
      controller: 'ModalInstanceCtrl',
      controllerAs: '$ctrl',
      windowClass: 'app-modal-window',
      size: size,
      resolve: {
        items: function () {
          return $ctrl.items;
        }
      }
    });
  };  // end rsc

  $ctrl.unimedspr = function (size) {
    var modalInstance = $uibModal.open({
      animation: $ctrl.animationsEnabled,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: 'unimedspr.html',
      controller: 'ModalInstanceCtrl',
      controllerAs: '$ctrl',
      windowClass: 'app-modal-window',
      size: size,
      resolve: {
        items: function () {
          return $ctrl.items;
        }
      }
    });
  };// end unimed spr

  $ctrl.unimedstaples = function (size) {
    var modalInstance = $uibModal.open({
      animation: $ctrl.animationsEnabled,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: 'unimedstaples.html',
      controller: 'ModalInstanceCtrl',
      controllerAs: '$ctrl',
      windowClass: 'app-modal-window',
      size: size,
      resolve: {
        items: function () {
          return $ctrl.items;
        }
      }
    });
  }; // end unimed staples

  $ctrl.fitin = function (size) {
    var modalInstance = $uibModal.open({
      animation: $ctrl.animationsEnabled,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: 'fitin.html',
      controller: 'ModalInstanceCtrl',
      controllerAs: '$ctrl',
      windowClass: 'app-modal-window',
      size: size,
      resolve: {
        items: function () {
          return $ctrl.items;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $ctrl.selected = selectedItem;
        }, function () {
          $log.info('Modal dismissed at: ' + new Date());
        });

  }; // end fit in

$ctrl.toggleAnimation = function () {
    $ctrl.animationsEnabled = !$ctrl.animationsEnabled;
    };


}); // end modalCtrl

angular.module('myApp').controller('ModalInstanceCtrl', function ($uibModalInstance, items) {
  var $ctrl = this;
  $ctrl.items = items;
  $ctrl.selected = {
    item: $ctrl.items[0]
  };

  $ctrl.ok = function () {
    $uibModalInstance.close($ctrl.selected.item);
  };

  $ctrl.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
}); // end ModalInstanceCtrl

angular.module('myApp').component('modalComponent', {
  templateUrl: 'myModalContent.html',
  bindings: {
    resolve: '<',
    close: '&',
    dismiss: '&'
  },
  controller: function () {
    var $ctrl = this;

    $ctrl.$onInit = function () {
      $ctrl.items = $ctrl.resolve.items;
      $ctrl.selected = {
        item: $ctrl.items[0]
      };
    };

    $ctrl.ok = function () {
      $ctrl.close({$value: $ctrl.selected.item});
    };

    $ctrl.cancel = function () {
      $ctrl.dismiss({$value: 'cancel'});
    };
  }
}); // end modalComponent

// end UIB Modal



myApp.config(["$routeProvider", function($routeProvider) {   //  controller for routes
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
