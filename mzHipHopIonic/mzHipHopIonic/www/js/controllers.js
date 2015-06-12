var app = angular.module('starter.controllers', [])

app.controller('DashCtrl', function ($scope) {

    $scope.articles = [ ];
    $scope.rssFeed = 'http://www.feedyes.com/feed.php?f=rnVsf2z9TuLgLI8m';

})

app.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

app.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

app.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
