(function() {
	'use strict';

	angular
		.module('app')
		.factory('quoteFactory', quoteFactory);

	quoteFactory.$inject = ['$http'];

	/* @ngInject */
	function quoteFactory($http) {
		var service = {
			quoteMovie: quoteMovie
		};

		var service = {
			quoteFamous: quoteFamous
		}
		return service;

		function quoteMovie() {
			return $http
				.post('https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies', null, {
					headers: {
						'X-Mashape-Key': 'f9wtIXc1GBmsh70pYfx0j6HuB3BZp1wzvjIjsnCTehr3Bl4I8l'
					}
				})
		}
		function quoteFamous() {
			return $http
				.post('https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous', null, {
					headers: {
						'X-Mashape-Key': 'f9wtIXc1GBmsh70pYfx0j6HuB3BZp1wzvjIjsnCTehr3Bl4I8l'
					}
				})
		}
	}
})();