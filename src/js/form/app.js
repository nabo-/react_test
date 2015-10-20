var React = require('react');
var ReactDOM = require('react-dom');

var UserBox = require('./module/UserBox.jsx');


var App = React.createClass({
	render: function(){
		return (
			<UserBox />
		);
	};
});