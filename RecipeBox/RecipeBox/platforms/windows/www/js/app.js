﻿// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
    if (window.plugins && window.plugins.AdMob) {
       
        var admob = window.plugins.AdMob;
        admob.createBannerView(
            {
                'publisherId': 'ca-app-pub-7104297060980769/4863483144',
                'adSize': admob.AD_SIZE.BANNER,
                'bannerAtTop': false
            },
            function () {
                admob.requestAd(
                    //set to false when live
                    { 'isTesting': false },
                    function () {
                        admob.showAd(true);
                    },
                    function () { console.log('failed to request ad'); }
                );
            },
            function () { console.log('failed to create banner view'); }
                );
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js

  $ionicConfigProvider.tabs.position('bottom');
    // setup an abstract state for the tabs directive
    $stateProvider
    .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',            
          controller: 'ChatDetailCtrl'
        }
      }
    })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  })
           .state('tab.vid1', {
               url: '/account/vid1',
               views: {
                   'tab-account': {
                       templateUrl: 'templates/tab-vid1.html',
                   }
               }
           })
           .state('tab.vid2', {
               url: '/account/vid2',
               views: {
                   'tab-account': {
                       templateUrl: 'templates/tab-vid2.html',
                   }
               }
           })
           .state('tab.vid3', {
               url: '/account/vid3',
               views: {
                   'tab-account': {
                       templateUrl: 'templates/tab-vid3.html',
                   }
               }
           })
           .state('tab.vid4', {
               url: '/account/vid4',
               views: {
                   'tab-account': {
                       templateUrl: 'templates/tab-vid4.html',
                   }
               }
           })
           .state('tab.vid5', {
               url: '/account/vid5',
               views: {
                   'tab-account': {
                       templateUrl: 'templates/tab-vid5.html',
                   }
               }
           });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

});