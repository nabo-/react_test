var Dispatcher = require('../dispatcher/Dispatcher.jsx');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var MapStore = require('./MapStore.jsx');

var SearchMapStore = assign({}, EventEmitter.prototype, {

	data: {
		param_data: {
			latitude: 35.690921,
			longitude: 139.70025799999996,
			zoomLevel: 15
		}
	},

	getData: function(){
		return SearchMapStore.data.param_data;
	},

	emitChange: function(){
		this.emit('change');
	},

	// dataの変更を受け取ったら実行
	addChangeListener: function(callback){
		this.on('change', callback);
	},

	removeChangeListener: function(callback){
		this.removeListener('change', callback);
	},

	// dispatcher 処理登録
	dispatchToken: Dispatcher.register(function(payload){

		var action_type = payload.action.type;

		if(action_type === 'change_param'){
			var data = {};

			if(typeof payload.action.target.latitude !== 'undefined'){
				data.latitude = payload.action.target.latitude;
			}
			if(typeof payload.action.target.longitude !== 'undefined'){
				data.longitude = payload.action.target.longitude;
			}
			if(typeof payload.action.target.zoomLevel !== 'undefined'){
				data.zoomLevel = payload.action.target.zoomLevel;
			}


			Dispatcher.waitFor([MapStore.dispatchToken]);

			SearchMapStore.data.param_data = data;
			SearchMapStore.emitChange();
		}

	})
});

module.exports = SearchMapStore;
