var Dispatcher = require('../dispatcher/AppDispatcher.jsx');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');


var _test = {value: null};


var AppStore = assign({}, EventEmitter.prototype, {
	getAll: function(){
		console.log('1: AppStore.getAll');
		return _test;
	},
	emitChange: function(){
		console.log('9: AppStore.emitChange');
		this.emit('change');
	},
	addChangeListener: function(callback){
		console.log('3: AppStore.addChangeListener');
		this.on('change', callback);
	},

	dispatcherIndex: Dispatcher.register(function(payload){
		console.log('7: AppStore.dispatcherIndex');
		if(payload.actionType === 'test'){
			_test.value = payload.value;

			console.log('8: AppStore.dispatcherIndex value :' + _test.value);
			AppStore.emitChange();
		}
	})
});

module.exports = AppStore;
