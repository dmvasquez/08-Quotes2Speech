(function() {
	'use strict';

	angular
		.module('app')
		.factory('speechFactory', speechFactory);

	speechFactory.$inject = ['$http'];

	/* @ngInject */
	function speechFactory($http) {
		var output = {speechOutput: speechOutput}

		return output;

		function speechOutput() {
			return $http
				.get('https://voicerss-text-to-speech.p.mashape.com/?key=' + '840321cc8ab048bcb280dca93887f1ca&c=mp3&f=8khz_8bit_mono&hl=en-us&r=-1&src=' + 'david+is+so+awesome', {
					headers: {
						'X-Mashape-Key': 'f9wtIXc1GBmsh70pYfx0j6HuB3BZp1wzvjIjsnCTehr3Bl4I8l'
					}
				})
		}
	}
})();