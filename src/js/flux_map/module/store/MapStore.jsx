var Dispatcher = require('../dispatcher/Dispatcher.jsx');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');


var MapStore = assign({}, EventEmitter.prototype, {

	data: {
		map_data: []
	},

	getData: function(){
		return MapStore.data.map_data;
	},

	emitChange: function(){
		this.emit('change');
	},

	// 地図データの変更があった
	addChangeListener: function(callback){
		this.on('change', callback);
	},

	removeChangeListener: function(callback){
		this.removeListener('change', callback);
	},
	// dispatcher 処理登録
	dispatchToken: Dispatcher.register(function(payload){
		var action_type = payload.action.type;

		if(action_type === 'change_map_center'){
			MapStore.data.map_data = payload.action.target;
			MapStore.emitChange();
		}

	})
});

module.exports = MapStore;
