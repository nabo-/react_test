/*
sample URL
http://mae.chab.in/archives/2747
*/

var Dispatcher = require("flux").Dispatcher;
var EventEmitter = require("events").EventEmitter;
var assign = require("object-assign");
var React = require('react');
var ReactDOM = require('react-dom');


var testDispatcher = new Dispatcher();



// action
var TestAction = {
	test: function(val){
		testDispatcher.dispatch({
			actionType: 'test',
			value: val
		});
	}
};



// View
var TestForm = React.createClass({

	send: function(e){
		e.preventDefault();

		var val = ReactDOM.findDOMNode(this.refs.val).value.trim();
		TestAction.test(val);
		ReactDOM.findDOMNode(this.refs.val).value = "";
		return;
	},

	render: function() {
		return (
			<form>
			<input type="text" ref="val" />
			<button onClick="{this.send}">送信</button>
			</form>
		);
	}

});
