var Dispatcher = require('../dispatcher/Dispatcher.jsx');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');



var ListStore = assign({}, EventEmitter.prototype, {

	data: {
		restaurant_list: []
	},

	getData: function(){
		return ListStore.data.restaurant_list;
	},

	emitChange: function(){
		this.emit('load');
	},

	// dataの変更を受け取ったら実行
	addLoadListener: function(callback){
		this.on('load', callback);
	},

	removeLoadListener: function(callback){
		this.removeListener('load', callback);
	},

	// dispatcher 処理登録
	dispatchToken: Dispatcher.register(function(payload){

		var action_type = payload.action.type;

		if(action_type === 'change_restaurant'){
			ListStore.data.restaurant_list = payload.action.target;
			ListStore.emitChange();
		}


	})
});

module.exports = ListStore;
