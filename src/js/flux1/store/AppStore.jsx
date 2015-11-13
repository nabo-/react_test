var Dispatcher = require('../dispatcher/AppDispatcher.jsx');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');


var _test = {value: null};


var AppStore = assign({}, EventEmitter.prototype, {
	getAll: function(){
		return _test;
	},
	emmitChange: function(){
		this.emmit('change');
	},
	addChangeListener: function(callback){
		this.on('change', callback);
	},

	dispatcherIndex: Dispatcher.register(function(payload){
		if(payload.actiontype === 'test'){
			_test.value = payload.value;
			AppStore.emmitChange();
		}
	})
});

module.exports = AppStore;
