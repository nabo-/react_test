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
		console.log('ListStore getListAll #2 #13');
		return data_state.restaurant_list;
	},
	emitChange: function(){
		console.log('ListStore emitChangeList #11');
		this.emit(CHANGE_EVENT_LIST);
	},
	// dataの変更を受け取ったら実行
	addChangeListener: function(callback){
		console.log('ListStore addChangeListener #9');
		this.on(CHANGE_EVENT_LIST, callback);
	},

	// dispatcher 処理登録
	dispatchToken: Dispatcher.register(function(payload){
		console.log('ListStore dispatchToken #10');
		switch (payload.actionType){

			case 'rerender':
				// 初期化
				data_state.restaurant_list = [];
				data_state.restaurant_list = payload.value;

				// 変更を通知
				ListStore.emitChange();
				break;

			default:
				break;
		}
	})
});

module.exports = ListStore;
