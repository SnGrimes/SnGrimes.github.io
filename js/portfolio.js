


angular.module("viewApp", ['ngAnimate'])

    .directive('viewer', function($timeout) {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      images: '='
    },
    link:function(scope, elem, attrs) {
        scope.currentIndex=0;
        
        scope.next = function() {
          scope.currentIndex < scope.images.length - 1 ? scope.currentIndex++ : scope.currentIndex = 0;
        };
        scope.prev = function() {
          scope.currentIndex > 0 ? scope.currentIndex-- : scope.currentIndex = scope.images.length - 1;
        };
        scope.$watch('currentIndex', function() {
          scope.images.forEach(function(image) {
            image.visible = false;
          });
          scope.images[scope.currentIndex].visible = true;
        });
      },
    templateUrl: 'templates/templateurl.html'
  };
})             
                 
.controller('ViewController', function($scope) {
  $scope.images = [{
    src:'responsive.png',
    title: 'Responsive Page - HTML, CSS',
    link: 'Testbed/Responsive site/main.html'
  }, {
    src: 'tamarah.png',
    title:'Tamarah Esi Page - HTML, CSS, Wordpress template manipulation',
    link: 'http://www.tamarahesi.com'
    
  }];
  
})

.controller('BlogController',['$http', function($http) {
    var blog = this;
    blog.title = "Shantia's Thoughts";
    
    blog.posts = {};
    $http.get('data/posts.json').success(function(data) {
        blog.posts = data;
    });
    
    blog.post = {};
    blog.addPost = function(){
        blog.post.createdOn = Date.now();
        blog.post = {};
    };
    
}]);



angular.module("portfolio",['ngRoute', 'viewApp'])

.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl:'pages/work.html',
                controller: 'homeController',
                controllerAs: 'homeController'
            }).
            when('/blog', {
                templateUrl: 'pages/blog.html',
                contoller: 'pastController'
            }).
            when('/contact', {
                templateUrl: 'pages/contact.html',
                contoller: 'contactController'
            }).
            otherwise ({
                redirectTo: '/'
            });
    }])

.controller('homeController', ['$scope', function($scope){
    var self = this;
    self.message = "The app routing is working!";
    
}])


.controller('pastController', ['$scope', function($scope){
    
    
}])

.controller('contactController', ['$scope', function($scope){
    
    
}]);




