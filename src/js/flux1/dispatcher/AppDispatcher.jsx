var Dispatcher = require("flux").Dispatcher;
var assign = require("object-assign");

var AppDispatcher = assign(new Dispatcher(), {
	viewAction: function(val){
		this.dispatch({
			actionType: 'test',
			value: val
		});
	}
});

module.exports = AppDispatcher;
