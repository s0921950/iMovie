'use strict';
angular.module('starter.controllers', [])


.controller('LatestListsCtrl', function($scope, $http) {

    $scope.lists = [];
    $scope.movies = [{
        year: 2014,
        title: "Big Hero 6 ",
        chineseTitle: "大英雄天團",
        imdb: "tt2245084",
        rottenTomatoes: ""
    }, {
        year: 2014,
        title: "Interstellar",
        chineseTitle: "星際效應",
        imdb: "tt0816692",
        rottenTomatoes: ""
    }, {
        year: 2014,
        title: "Gone Girl",
        chineseTitle: "控制",
        imdb: "tt2267998",
        rottenTomatoes: ""
    }, {
        year: 2014,
        title: "Fury",
        chineseTitle: "怒火特攻隊",
        imdb: "tt2713180",
        rottenTomatoes: ""
    }, {
        year: 2014,
        title: "Birdman",
        chineseTitle: "鳥人",
        imdb: "tt2562232",
        rottenTomatoes: ""
    }, {
        year: 2014,
        title: "Nightcrawler ",
        chineseTitle: "獨家腥聞",
        imdb: "tt2872718",
        rottenTomatoes: ""
    }, {
        year: 2014,
        title: "John Wick",
        chineseTitle: "捍衛任務",
        imdb: "tt2911666",
        rottenTomatoes: ""
    }, {
        year: 2014,
        title: "The Imitation Game",
        chineseTitle: "模仿遊戲",
        imdb: "tt2084970",
        rottenTomatoes: ""
    }, {
        year: 2014,
        title: "Boyhood",
        chineseTitle: "年少時代",
        imdb: "tt1065073",
        rottenTomatoes: ""
    }, {
        year: 2014,
        title: "Guardians of the Galaxy",
        chineseTitle: "星際異攻隊",
        imdb: "tt2015381",
        rottenTomatoes: ""
    }];
    var getLists = function(i) {
        $http.get('http://www.omdbapi.com/?i=' + $scope.movies[i].imdb + '&tomatoes=true').success(function(data) {
            $scope.lists[i] = data;
            $scope.lists[i].chineseTitle = $scope.movies[i].chineseTitle;
            $scope.lists[i].imdb = $scope.movies[i].imdb;
        }).error(function(data, status, headers, config) { // Do some error handling here }); sleep(1000); i++; }
        });
    };
    for (var i = 0; i < $scope.movies.length; i++) {
        getLists(i);
    }
});
