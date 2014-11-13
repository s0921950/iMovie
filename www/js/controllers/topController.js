angular.module('starter.controllers')

.controller('Top10Ctrl', function($scope, $http) {

    $scope.lists = [];
    $scope.movies = [{
        year: 1994,
        title: "The Shawshank Redemption",
        chineseTitle: "刺激1995",
        imdb: "tt0111161",
        rottenTomatoes: ""
    }, {
        year: 1972,
        title: "The Godfather",
        chineseTitle: "教父",
        imdb: "tt0068646",
        rottenTomatoes: ""
    }, {
        year: 1974,
        title: "The Godfather: Part II",
        chineseTitle: "教父2",
        imdb: "tt0071562",
        rottenTomatoes: ""
    }, {
        year: 2008,
        title: "The Dark Knight ",
        chineseTitle: "黑暗騎士",
        imdb: "tt0468569",
        rottenTomatoes: ""
    }, {
        year: 1994,
        title: "Pulp Fiction",
        chineseTitle: "黑色追緝令",
        imdb: "tt0110912",
        rottenTomatoes: ""
    }, {
        year: 1966,
        title: "The Good, the Bad and the Ugly",
        chineseTitle: "黃昏三鑣客",
        imdb: "tt0060196",
        rottenTomatoes: ""
    }, {
        year: 1993,
        title: "Schindler's List",
        chineseTitle: "辛德勒的名單",
        imdb: "tt0108052",
        rottenTomatoes: ""
    }, {
        year: 1957,
        title: "12 Angry Men",
        chineseTitle: "十二怒漢",
        imdb: "tt0050083",
        rottenTomatoes: ""
    }, {
        year: 2003,
        title: "The Lord of the Rings: The Return of the King",
        chineseTitle: "魔戒三部曲：王者再臨",
        imdb: "tt0167260",
        rottenTomatoes: ""
    }, {
        year: 1999,
        title: "Fight Club",
        chineseTitle: "鬥陣俱樂部",
        imdb: "tt0137523",
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
