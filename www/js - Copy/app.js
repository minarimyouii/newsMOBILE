angular.module('ionicGoal', ['ionic', 'ionicGoal.controllers'])
.config(function($stateProvider, $urlRouterProvider){
$stateProvider
.state('app', {
  url:'/app',
  abstract:true,
  templateUrl:'templates/menu.html'
})
.state('app.home',{
  url:'/home',
  views:{
    'menuContent':{
      templateUrl:'templates/home.html',
    }
  }
})
.state('app.addsteppage',{
  url:'/addsteppage',
  views:{
    'menuContent':{
      templateUrl:'templates/addsteppage.html',
    }
  }
})
.state('app.search',{
  url:'/search',
  views:{
    'menuContent':{
      templateUrl:'templates/search.html',
    }
  }
})
.state('app.about',{
  url:'/about',
  views:{
    'menuContent':{
      templateUrl:'templates/about.html',
    }
  }
});
  
  $urlRouterProvider.otherwise('/app/home');
})


.controller('myController', function($scope, $ionicModal){
  
  $ionicModal.fromTemplateUrl('home.html',{
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal){
    $scope.modal = modal;
  });

  $scope.openModal = function(){
    $scope.modal.show();
  };

  $scope.closeModal = function(){
    $scope.modal.hide();
  };

});