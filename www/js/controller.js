angular.module('ionicGoal.controllers',  [])
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

.controller('channel', function($scope, $http, $state, $rootScope, $cordovaDialogs) {

  $scope.channellist = 

  $scope.bookmarked = function(){
    console.log("asd");
  }

  $scope.alert = function(){
  console.log("beep");
  $cordovaDialogs.beep(3);
  $scope.action = "Beep";

  }

  $scope.beeps = function(){

  }


  $scope.nextPage = function(id){
    console.log(id);
    localStorage.setItem("id_details", id);
    $state.go('app.addsteppage');
  }

  $rootScope.$on('$ionicView.beforeEnter',function(){

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


      var arrayA = localStorage.getItem("goalname");
      if(arrayA == null || arrayA == '' || arrayA == 'null'){
        arrayA = [];
        $scope.readgoal = [];

      }
      else{
        $scope.readgoal = JSON.parse(localStorage.getItem("goalname"));
        arrayA = JSON.parse(localStorage.getItem("goalname"));
      }
  })


  $scope.addname = function(){

      var arrayA = localStorage.getItem("goalname");
      if(arrayA == null || arrayA == '' || arrayA == 'null'){
        arrayA = [];
        $scope.readgoal = [];

      }
      else{
        $scope.readgoal = JSON.parse(localStorage.getItem("goalname"));
        arrayA = JSON.parse(localStorage.getItem("goalname"));
      }

    var goalname = document.getElementById('addGoal').value;
    console.log(goalname);
    var goal = {
      'goalname': goalname

    }
    arrayA.push(goal);
    localStorage.setItem("goalname", JSON.stringify(arrayA));

    $scope.readgoal = JSON.parse(localStorage.getItem("goalname"));
    console.log(arrayA);

    $scope.addGoal = "";
    document.getElementById('addGoal').value = "";
  };
})

.controller('addStepPage', function($scope, $http, $state){

  var idtitle = localStorage.getItem("id_details");
  var arrayStep = localStorage.getItem("goalname");
  if(arrayStep == null || arrayStep == '' || arrayStep == 'null'){
    arrayStep = [];
    console.log(arrayStep[idtitle]);

  }
  else{
    arrayStep = JSON.parse(localStorage.getItem("goalname"));
    console.log(arrayStep[idtitle]['goalname']);
    $scope.gege = arrayStep[idtitle]['goalname'];
  }

   $scope.delete = function(){
    arrayStep.splice(idtitle, 1);
    console.log(arrayStep);
    localStorage.setItem("goalname",JSON.stringify(arrayStep));
    $state.go('app.home');
   }

});

  //----------------add step--------------

  // .controller('addstep', function($scope, $http) {

  // $scope.readgoal = JSON.parse(localStorage.getItem("stepname"));

  // var arrayB = localStorage.getItem("stepname");
  // if(arrayB == null){
  //   arrayB = [];

  // }
  // else{
  //   arrayB = JSON.parse(localStorage.getItem("stepname"));
  // }
  // $scope.stepname = function(){


  //   var stepname = $scope.addStep;
  //   var step = {
  //     'stepname': stepname

  //   }
  //   arrayA.push(step);
  //   localStorage.setItem("stepname", JSON.stringify(arrayB));

  //   $scope.readstep = JSON.parse(localStorage.getItem("stepname"));
  //   console.log(arrayB);

  //   $scope.addStep = "";
  // };


    // $http({
    //   url:"http://localhost/room/php/add.php",
    //   method:"POST",
    //   data: {
    //     'goalname': goalname,
    //   }
    // })
    // .then(function(response){
    //   console.log(response);
    // })
  //};


// setInterval(function(){
//   $http({
//       url:"http://localhost/room/php/getdata.php",
//       method:"GET"
//     })
//     .then(function(response){


//       $scope.readgoal = response['data'];
//     })

// },500);
