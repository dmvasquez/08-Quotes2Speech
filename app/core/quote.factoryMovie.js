(function() {
	'use strict';

	angular
		.module('app')
		.factory('quoteFactoryMovie', quoteFactoryMovie);

	quoteFactoryMovie.$inject = ['$http'];

	/* @ngInject */
	function quoteFactoryMovie($http) {
		var service = {
			quoteMovie: quoteMovie
		};

		return service;

		function quoteMovie() {
			return $http
				.post('https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies', null, {
					headers: {
						'X-Mashape-Key': 'f9wtIXc1GBmsh70pYfx0j6HuB3BZp1wzvjIjsnCTehr3Bl4I8l'
					}
				})
		}
	}
})();