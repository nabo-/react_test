var React = require('react');
var ReactDOM = require('react-dom');

var AppAction = require('../action/AppAction.jsx');

var Form = React.createClass({
	send: function (e) {
		e.preventDefault();
		var val = ReactDOM.findDOMNode(this.refs.val).value.trim();
		AppAction.sendText(val);
		ReactDOM.findDOMNode(this.refs.val).value = "";
		return;
	},
	render: function(){
		return (
			<form>
			<input type="text" ref="val" />
			<button onClick={this.send}>送信</button>
			</form>
		);
	}
});

module.exports = Form;
