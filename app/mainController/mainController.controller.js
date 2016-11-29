(function() {
    'use strict';

    angular
        .module('app')
        .controller('QuoteController', QuoteController);

    QuoteController.$inject = ['quoteFactoryMovie', 'quoteFactoryFamous'];
    /* @ngInject */
    function QuoteController(quoteFactoryMovie, quoteFactoryFamous) {
    	var vm = this;

    	vm.findMovieQuote = findMovieQuote;
    	vm.findFamousQuote = findFamousQuote;

    	function findMovieQuote() {
    		quoteFactoryMovie
    		.quoteMovie()
    		.then(function(response) {
    			vm.resultsMovie = response.data
    		})
    		responsiveVoice.speak("test");
    		vm.hide = '1'
    		//factory API for Quotes
    		//factory API for Quote to Speech
    	}

    	function findFamousQuote() {
    		quoteFactoryFamous
    		.quoteFamous()
    		.then(function(response) {
    			vm.resultsFamous = response.data
    		})
    		vm.hide ='0'
    		//factory API for Quotes
    		//factory API for Quote to Speech
    	}

    }
})();
