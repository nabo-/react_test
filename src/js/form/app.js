var React = require('react');
var ReactDOM = require('react-dom');

var UserForm = require('./module/UserForm.jsx');
var UserList = require('./module/UserList.jsx');
var User = require('./module/User.jsx');
var UserBox = require('./module/UserBox.jsx');

var App = React.createClass({
	render: function(){
		return (
			<UserBox />
		);
	}
});

ReactDOM.render(
	<App />,
	document.getElementById('content')
	);