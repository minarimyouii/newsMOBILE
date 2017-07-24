angular.module('ionicGoal', ['ionic', 'ionicGoal.controllers','ngCordova'])
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
.state('app.view',{
  url:'/view',
  views:{
    'menuContent':{
      templateUrl:'templates/view.html',
    }
  }
})
.state('app.signup',{
  url:'/signup',
  views:{
    'menuContent':{
      templateUrl:'templates/signup.html',
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