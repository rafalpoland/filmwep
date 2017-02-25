(function (){
    angular
        .module('movieSearchModule')
        .controller('movieDetailCtrl', movieDetailCtrl);

        movieDetailCtrl.$inject = ['$scope', '$routeParams', 'movieSearchService'];
        function movieDetailCtrl($scope, $routeParams, movieSearchService) {
            fetchMovieDetail = function () {
                movieSearchService.fetchMovieDetail($routeParams.id)
                  .then(function(response){
                      $scope.movie = response.data;
                  });
            }
            fetchMovieDetail();
        }
})();