var Dispatcher = require('../dispatcher/AppDispatcher.jsx');

var AppAction = {
	sendText: function(text){
		Dispatcher.viewAction(text);
	}
};

module.exports = AppAction;
