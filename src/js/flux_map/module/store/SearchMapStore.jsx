var Dispatcher = require('../dispatcher/Dispatcher.jsx');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT_LIST = 'change';

// データ
var data_state = {
	param_data: {
		latitude: 35.690921,
		longitude: 139.70025799999996,
		zoomLevel: 17
	}
};

var SearchMapStore = assign({}, EventEmitter.prototype, {

	getParamData: function(){
		console.log('Store / SearchMapStore getHashData');
		return data_state.param_data;
	},

	emitChange: function(){
		console.log('Store / SearchMapStore emitChangeList #17');
		this.emit(CHANGE_EVENT_LIST);
	},
	// dataの変更を受け取ったら実行
	addChangeListener: function(callback){
		console.log('Store / SearchMapStore addChangeListener #19');
		this.on(CHANGE_EVENT_LIST, callback);
	},

	// dispatcher 処理登録
	dispatchToken: Dispatcher.register(function(payload){
		console.log('Store / SearchMapStore dispatchToken #16');

		if(payload.actionType === 'change_param'){
			console.log('change_param');
			data_state.param_data = payload.value;

			// 変更を通知
			SearchMapStore.emitChange();
		}
	})
});
//
//
//
//
// CityStore.dispatchToken = flightDispatcher.register(function(payload) {
//   if (payload.actionType === 'country-update') {
//     // `CountryStore.country` may not be updated.
//     flightDispatcher.waitFor([CountryStore.dispatchToken]);
//     // `CountryStore.country` is now guaranteed to be updated.
//
//     // Select the default city for the new country
//     CityStore.city = getDefaultCityForCountry(CountryStore.country);
//   }
// });

module.exports = SearchMapStore;
