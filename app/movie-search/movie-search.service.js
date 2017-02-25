(function(){
     angular
        .module('movieSearchModule')
        .service('movieSearchService', movieSearchService);

     movieSearchService.$inject = ['$http', '$q'];
     function movieSearchService($http, $q) {
         var baseUrl = 'http://www.omdbapi.com/';

         this.fetchMoviesList = function(title, year, isFullPlot) {
           if (!title || title.length === 0) {
               return $q.reject('title not provided ;(');
           }
           var configObj = {
               params: {
                   s: title,
                   y: year
               }
           };
           return $http.get(baseUrl, configObj);         
         }
         this.fetchMovieDetail = function(id) {
             var configObj = {
                 params: {
                     i: id
                 }
             };
             return $http.get(baseUrl, configObj);
         }
     }
})();