(function () {
	'use strict';

	angular
		.module('tgvs')
		.controller('tgvsController', [
			tgvsController,
		]);

	function tgvsController(){
		var vm = this;
		vm.content = '\\o/';
	}

})();