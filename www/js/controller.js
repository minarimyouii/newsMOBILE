angular.module('ionicGoal.controllers',  ['ionic','ngCordova','ngCordova.plugins.localNotification','ngCordova.plugins'])
// .controller('TodoController', function($scope){
//   $scope.saved = localStorage.getItem('musics');
//   $scope.musics = (localStorage.getItem('musics')!=null)? JSON.parse($scope.saved):[{title:'Music',done:false}];

//   localStorage.setItem('musics', JSON.stringify($scope.musics));

//   $scope.addRoom = function(){
//   var music = $scope.roomtype;
//     $scope.musics.push({
//       title: $scope.roomtype,
//       done:false
//     });
//     $scope.roomtype = 'Music';
//     localStorage.setItem('musics', JSON.stringify($scope.musics));
//   };

// $scope.remove = function(index){
//   $scope.readgoal.splice(index,1)
//   localStorage.setItem('goalname', JSON.stringify($scope.arrayA));
// }

.controller('channel', function($scope, $http, $state, $rootScope, $cordovaDialogs, $ionicPopup) {

  $scope.$on('$ionicView.beforeEnter', function(){

// add to Read Later List
  if(localStorage.getItem('pinnedNews') == null || localStorage.getItem('pinnedNews') == ""){
    var newsArray = [];
    $scope.newsList = [];
  }
  else{
    var newsArray = JSON.parse(localStorage.getItem('pinnedNews'));
    $scope.newsList = newsArray;
  }
  })
  $scope.pinNews = function(author, title, publishedAt, urlToImage, url){

    if(localStorage.getItem('pinnedNews') == null || localStorage.getItem('pinnedNews') == "" || localStorage.getItem('pinnedNews') == "undefined"){
      var newsArray = [];
    }
    else{
      var newsArray = JSON.parse(localStorage.getItem('pinnedNews'));
    }
  var data = {
    'author':author,
    'title':title,
    'publishedAt':publishedAt,
    'urlToImage':urlToImage,
    'url':url
  }
  newsArray.push(data);
  localStorage.setItem('pinnedNews', JSON.stringify(newsArray));
  var a = JSON.parse(localStorage.getItem('pinnedNews'));
  var alertPopup = $ionicPopup.alert({
    title:'News has been added to Read Later List'
  });
  alertPopup.then(function(res){
    console.log('wew');
  });

  $cordovaDialogs.beep(1);
  $scope.action = "Beep";
  }
// delete from Read Later List
  $scope.delete = function(index){
    $scope.newsList.splice(index,1)
    localStorage.setItem('pinnedNews', JSON.stringify($scope.newsArray));
  }


  // $scope.alert = function(){
  // console.log("beep");
  // $cordovaDialogs.beep(1);
  // $scope.action = "Beep";
  // }

// USELESS
  // $scope.nextPage = function(id){
  //   console.log(id);
  //   localStorage.setItem("id_details", id);
  //   $state.go('app.addsteppage');
  // }


  $rootScope.$on('$ionicView.beforeEnter',function(){

    // API DATA

        $http({
          url : 'https://newsapi.org/v1/articles?source=mtv-news&sortBy=top&apiKey=c9e03b98399444c9a4e1f1cf36e56419',
          method: 'GET'
          })
          .then(function(response){
          $scope.mtvnews = response['data']['articles'];
          })

        $http({
          url : 'https://newsapi.org/v1/articles?source=espn&sortBy=top&apiKey=c9e03b98399444c9a4e1f1cf36e56419',
          method: 'GET'
          })
          .then(function(response){
          $scope.espn = response['data']['articles'];
          })

          $http({
            url : 'https://newsapi.org/v1/articles?source=the-wall-street-journal&sortBy=top&apiKey=c9e03b98399444c9a4e1f1cf36e56419',
            method: 'GET'
            })
            .then(function(response){
            $scope.twsj = response['data']['articles'];
            })


  })
})

// $scope.addname = function(){
//
//     var arrayA = localStorage.getItem("goalname");
//     if(arrayA == null || arrayA == '' || arrayA == 'null'){
//       arrayA = [];
//       $scope.readgoal = [];
//
//     }
//     else{
//       $scope.readgoal = JSON.parse(localStorage.getItem("goalname"));
//       arrayA = JSON.parse(localStorage.getItem("goalname"));
//     }
//
//   var goalname = document.getElementById('addGoal').value;
//   console.log(goalname);
//   var goal = {
//     'goalname': goalname
//
//   }
//   arrayA.push(goal);
//   localStorage.setItem("goalname", JSON.stringify(arrayA));
//
//   $scope.readgoal = JSON.parse(localStorage.getItem("goalname"));
//   console.log(arrayA);
//
//   $scope.addGoal = "";
//   document.getElementById('addGoal').value = "";
// };
