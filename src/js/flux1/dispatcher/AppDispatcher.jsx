var Dispatcher = require("flux").Dispatcher;
var assign = require("object-assign");

var AppDispatcher = assign(new Dispatcher(), {
	viewAction: function(val){

		console.log('6: AppDispatcher.viewAction');

		this.dispatch({
			actionType: 'test',
			value: val
		});
	}
});

module.exports = AppDispatcher;
