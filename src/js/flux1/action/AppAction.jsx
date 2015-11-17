var Dispatcher = require('../dispatcher/AppDispatcher.jsx');

var AppAction = {
	sendText: function(text){
		console.log('5: AppAction.sendText');
		Dispatcher.viewAction(text);
	}
};

module.exports = AppAction;
