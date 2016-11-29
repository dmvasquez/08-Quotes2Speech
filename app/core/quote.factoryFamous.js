(function() {
	'use strict';

	angular
		.module('app')
		.factory('quoteFactoryFamous', quoteFactoryFamous);

	quoteFactoryFamous.$inject = ['$http'];

	/* @ngInject */
	function quoteFactoryFamous($http) {
		var service = {
			quoteFamous: quoteFamous
		};

		return service;

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