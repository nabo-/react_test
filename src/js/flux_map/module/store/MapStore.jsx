var Dispatcher = require('../dispatcher/Dispatcher.jsx');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT_MAP = 'change';

// データ
var data_state = {
	map_data: {
		latitude: 35.690921,
		longitude: 139.70025799999996,
		zoomLevel: 15
	}
};

var MapStore = assign({}, EventEmitter.prototype, {
	getMapAll: function(){
		console.log('Store / MapStore getMapAll #4');
		return data_state.map_data;
	},
	emitChange: function(){
		console.log('Store / MapStore emitChangeMap #12');
		this.emit(CHANGE_EVENT_MAP);
	},
	// 地図データの変更があった
	addChangeListener: function(callback){
		console.log('Store / MapStore addChangeMapListener #9');
		this.on(CHANGE_EVENT_MAP, callback);
	},
	// dispatcher 処理登録
	dispatchToken: Dispatcher.register(function(payload){
		console.log('Store / MapStore dispatchToken #18');

		if(payload.actionType === 'map_center_change'){
			data_state.map_data = payload.value;
			MapStore.emitChange();
		}
	})
});

module.exports = MapStore;
