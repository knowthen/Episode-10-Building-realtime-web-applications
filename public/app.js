var app = angular.module('realtime', 
  ['ngMaterial', 'ui.router', 'btford.socket-io', 'bindtable']);

app.factory('socket', function(socketFactory){
  return socketFactory();
});

app.factory('bindTable', function(bindTableFactory, socket){
  return bindTableFactory({socket: socket});
});

app.config(function($stateProvider, $locationProvider) {
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
  $stateProvider
    .state('questions', {
      url: '/',
      templateUrl: 'templates/questions.html',
      controller: 'QuestionsCtrl'
    })
    .state('add', {
      url: '/add',
      templateUrl: 'templates/addedit.html',
      controller: 'QuestionAddCtrl'
    })
    .state('edit', {
      url: '/edit/:id',
      templateUrl: 'templates/addedit.html',
      controller: 'QuestionEditCtrl',
      resolve: {
        question: function($stateParams, bindTable){

          return bindTable('question').findById($stateParams.id);

        }
      }
    })
});

app
  .controller('QuestionsCtrl', questionsCtrl)
  .controller('QuestionAddCtrl', questionAddCtrl)
  .controller('QuestionEditCtrl', questionEditCtrl);

function questionsCtrl($scope, bindTable){
  
  var questionTable = bindTable('question');
  questionTable.bind(null, 100);

  $scope.questions = questionTable.rows;
  $scope.delete = questionTable.delete;
  $scope.$on('$destroy', function(){

    questionTable.unBind();
    
  });

}
function questionAddCtrl($scope, $state, bindTable){

  var questionTable = bindTable('question');
  $scope.save = function(record){

    questionTable.save(record)
      .then(function(result){
        $state.go('questions')
      }, function(err){
        $scope.error = err.message;
      }); 

  } 

}

function questionEditCtrl($scope, $state, bindTable, question){

  var questionTable = bindTable('question');
  $scope.question = question;
  $scope.save = function(record){
    questionTable.save(record)
      .then(function(result){
        $state.go('questions')
      }, function(err){
        $scope.error = err.message;
      });
  }  

}

app.config(function($mdThemingProvider){
  $mdThemingProvider.definePalette('myPalette', {
    '50': '39D6FF',
    '100': '33C1E5',
    '200': '2EAECF',
    '300': '2E8FCF',
    '400': '2E8FCF',
    '500': '2980B9',
    '600': '2F94D6',
    '700': 'd32f2f',
    '800': 'c62828',
    '900': 'b71c1c',
    'A100': '2980B9',
    'A200': 'ff5252',
    'A400': 'ff1744',
    'A700': 'd50000',
    'contrastDefaultColor': 'light',    
    'contrastDarkColors': ['50', '100',
     '200', '300', '400', 'A100']
  });
  $mdThemingProvider.theme('default')
    .primaryPalette('myPalette')
});
