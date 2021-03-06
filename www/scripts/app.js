// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html'
  })


  .state('app.latest', {
    url: '/latest',
    views: {
      'menuContent': {
        templateUrl: 'templates/latest.html',
        controller: 'LatestNewsController'
      }
    }
  })



  .state('app.world', {
    url: '/world',
    views: {
      'menuContent': {
        templateUrl: 'templates/world.html',
        controller: 'WorldNewsController'
      }
    }
  })


  .state('app.sports', {
    url: '/sports',
    views: {
      'menuContent': {
        templateUrl: 'templates/sports.html',
        controller: 'SportsNewsController'
      }
    }
  })


  .state('app.business', {
    url: '/business',
    views: {
      'menuContent': {
        templateUrl: 'templates/business.html',
        controller: 'BusinessNewsController'
      }
    }
  })


  .state('app.tech', {
    url: '/tech',
    views: {
      'menuContent': {
        templateUrl: 'templates/tech.html',
        controller: 'TechNewsController'
      }
    }
  })

  .state('app.weather', {
    url: '/weather',
    views: {
      'menuContent': {
        templateUrl: 'templates/weather.html',
        controller: 'WeatherController'
      }
    }
  })


  $urlRouterProvider.otherwise('/app/latest');
});
