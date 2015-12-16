var Dispatcher = require('../dispatcher/Dispatcher.jsx');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT_LIST = 'change';

// データ
var data_state = {
	restaurant_list: []
};

var ListStore = assign({}, EventEmitter.prototype, {

	getListAll: function(){
		console.log('Store / ListStore getListAll #6');
		return data_state.restaurant_list;
	},
	emitChange: function(){
		console.log('Store / ListStore emitChangeList #21');
		this.emit(CHANGE_EVENT_LIST);
	},
	// dataの変更を受け取ったら実行
	addChangeListener: function(callback){
		console.log('Store / ListStore addChangeListener #11');
		this.on(CHANGE_EVENT_LIST, callback);
	},

	// dispatcher 処理登録
	dispatchToken: Dispatcher.register(function(payload){
		console.log('Store / ListStore dispatchToken #15 #20');

		if(payload.actionType === 'rerender'){
			// 初期化
			data_state.restaurant_list = [];
			data_state.restaurant_list = payload.value;

			// 変更を通知
			ListStore.emitChange();
		}
	})
});

module.exports = ListStore;
