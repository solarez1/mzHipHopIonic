var app = angular.module('starter.controllers', [])

app.controller('DashCtrl', function ($http, $scope) {

    $scope.init = function () {
        $http.get("http://ajax.googleapis.com/ajax/services/feed/load", { params: { "v": "1.0", "q": "http://www.feedyes.com/feed.php?f=rnVsf2z9TuLgLI8m", "num": 1000} })
            .success(function (data) {
                $scope.rssTitle = data.responseData.feed.title;
                $scope.rssUrl = data.responseData.feed.feedUrl;
                $scope.rssSiteUrl = data.responseData.feed.link;
                $scope.entries = data.responseData.feed.entries;
                $scope.browse = function (v) {
                    window.open(v, "_system", "location=no");
                   
             
                }

            })
            .error(function (data) {
                console.log("ERROR: " + data);
            });
    }

});

app.controller('ChatsCtrl', function($http, $scope) {
    $scope.init = function () {
        $http.get("http://ajax.googleapis.com/ajax/services/feed/load", { params: { "v": "1.0", "q": "http://www.music-news.com/rss/news.asp", "num": 1000 } })
            .success(function (data) {
                $scope.rssTitle = data.responseData.feed.title;
                $scope.rssUrl = data.responseData.feed.feedUrl;
                $scope.rssSiteUrl = data.responseData.feed.link;
                $scope.entries = data.responseData.feed.entries;
                $scope.browse = function (v) {
                    window.open(v, "_system", "location=no");
               
                }

            })
            .error(function (data) {
                console.log("ERROR: " + data);
            });
    }

});
app.controller('ChatDetailCtrl', function($scope) {
  
})

app.controller('AccountCtrl', function($scope) {

});

