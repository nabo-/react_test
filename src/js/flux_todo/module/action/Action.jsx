var Dispatcher = require('../dispatcher/Dispatcher.jsx');

// view から受け取るアクションたち
var Action = {

	on_add_submit: function(text){
		// Dispather を通じて変更部分を通知
		Dispatcher.dispatch({
			actionType: 'add_text',
			value: text
		});
	},

	on_remove_list: function(id){
		Dispatcher.dispatch({
			actionType: 'remove_list',
			value: id
		});
	}
};

module.exports = Action;
