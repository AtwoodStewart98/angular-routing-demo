angular.module("routing").config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state("home", {
      templateUrl: "../views/home.html",
      url: "/",
      controller: "homeCtrl"
    })
    .state("characters", {
      templateUrl: "../views/characters.html",
      url: "/characters",
      controller: "characterCtrl",
      resolve: {
        characters: function(characterSrvc) {
          return characterSrvc.getCharacters().then(function(resp) {
            return resp;
          });
        }
      }
    })
    .state("character", {
      templateUrl: "../views/details.html",
      url: "/character/:charId",
      controller: "detailsCtrl"
    });
});
