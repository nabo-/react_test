var Dispatcher = require('../dispatcher/Dispatcher.jsx');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var MapStore = assign({}, EventEmitter.prototype, {

	data: {
		map_position: {
			latitude: 35.690921,
			longitude: 139.70025799999996,
			zoomLevel: 15
		},
		markers: []
	},

	getData: function(){
		return MapStore.data;
	},

	emitPositionChange: function(){
		this.emit('position_change');
	},

	emitMarkerChange: function(){
		this.emit('marker_change');
	},

	// 地図データの変更があった
	addChangeListener: function(callback){
		this.on('position_change', callback);
	},

	removeChangeListener: function(callback){
		this.removeListener('position_change', callback);
	},

	addChangeMarker: function(callback){
		this.on('marker_change', callback);
	},

	// dispatcher 処理登録
	dispatchToken: Dispatcher.register(function(payload){
		var action_type = payload.action;

		if(action_type === 'change_map_center'){
			MapStore.data.map_position = payload.value;
			MapStore.emitPositionChange();
		}

		if(action_type === 'change_marker'){
			MapStore.data.markers = payload.value;
			MapStore.emitMarkerChange();
		}

	})
});

module.exports = MapStore;
