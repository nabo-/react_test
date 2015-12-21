var Dispatcher = require("flux").Dispatcher;
var assign = require('object-assign');


var appDispatcher = assign(new Dispatcher(), {

	handleViewAction: function(action){
		console.log(action);
		console.log(this.isDispatching());
		// var _this = this;
		// var test = setInterval(function(){
		// 	if(_this.isDispatching()){
		// 		console.log('NG');
		// 		return;
		// 	}
		// 	console.log('OK');
		// 	clearInterval(test);
		// }, 50);

		this.dispatch({
			source: 'view',
			action: action
		});
	}

});

module.exports = appDispatcher;
