(function(){
var app = angular.module('store', []);



	
	app.controller('PanelController', function(){
		this.tab = 1;

		this.selectTab = function(tabNo) {
			this.tab = tabNo;
		};
		
		this.isSelected = function(checkNo){
			return this.tab === checkNo
		};
	});



})();