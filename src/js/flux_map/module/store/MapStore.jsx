var Dispatcher = require('../dispatcher/Dispatcher.jsx');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');


var MapStore = assign({}, EventEmitter.prototype, {

	data: {
		map_data: [],
		markers: []
	},

	getData: function(){
		return MapStore.data.map_data;
	},

	getMarkerData: function(){
		return MapStore.data.markers;
	},

	emitChange: function(){
		this.emit('change');
	},

	emitMarkerChange: function(){
		this.emit('marker_change');
	},

	// 地図データの変更があった
	addChangeListener: function(callback){
		this.on('change', callback);
	},

	removeChangeListener: function(callback){
		this.removeListener('change', callback);
	},

	addMarkerChange: function(callback){
		this.on('marker_change', callback);
	},

	// dispatcher 処理登録
	dispatchToken: Dispatcher.register(function(payload){
		var action_type = payload.action.type;

		if(action_type === 'change_map_center'){
			MapStore.data.map_data = payload.action.target;
			MapStore.emitChange();
		}

		if(action_type === 'change_marker'){
			MapStore.data.markers = payload.action.target;
			MapStore.emitMarkerChange();
		}

	})
});

module.exports = MapStore;
