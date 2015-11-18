var Dispatcher = require('../dispatcher/Dispatcher.jsx');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');


var CHANGE_EVENT = 'change';

// データ
var data_state = {
	dataList: [],
	count: 0
};

var Store = assign({}, EventEmitter.prototype, {
	getAll: function(){
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

		if(payload.actionType === 'add_text'){

			var data = data_state.dataList;
			var num = data_state.count;

			data.push({
				text: payload.value,
				id: num
			});

			data_state.dataList = data;
			data_state.count = num +1;

			//  Storeに変更を通知
			Store.emitChange();
		}

		if(payload.actionType === 'remove_list'){
			data_state.dataList = data_state.dataList.filter(function(list){
				return list.id !== payload.value;
			});

			//  Storeに変更を通知
			Store.emitChange();
		}
	})

});

module.exports = Store;
