var Dispatcher = require('../dispatcher/Dispatcher.jsx');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var ListStore = assign({}, EventEmitter.prototype, {

	data: {
		restaurant_data: []
	},

	getData: function(){
		return ListStore.data;
	},

	emitChange: function(){
		this.emit('change');
	},

	// dataの変更を受け取ったら実行
	addChangeListener: function(callback){
		this.on('change', callback);
	},

	removeLoadListener: function(callback){
		this.removeListener('change', callback);
	},

	// dispatcher 処理登録
	dispatchToken: Dispatcher.register(function(payload){

		var action_type = payload.action;

		if(action_type === 'change_restaurant'){
			ListStore.data.restaurant_data = payload.value;
			ListStore.emitChange();
		}
	})
});

module.exports = ListStore;
