var Dispatcher = require('../dispatcher/Dispatcher.jsx');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');


var CHANGE_EVENT = 'change';

// データ
var data_state = {
	restaurant_list: []
};

var Store = assign({}, EventEmitter.prototype, {

	getListAll: function(){
		return data_state;
	},
	emitChange: function(){
		this.emit(CHANGE_EVENT);
	},

	// dataの変更を受け取ったら実行
	addChangeListener: function(callback){
		this.on(CHANGE_EVENT, callback);
	},

	// dispatcher 処理登録
	dispatchToken: Dispatcher.register(function(payload){

		if(payload.actionType === 'rerender'){
			// 初期化
			data_state.restaurant_list = [];

			data_state.restaurant_list.push(payload.data);

			// 変更を通知
			Store.emitChange();
		}
	})

});

module.exports = Store;
