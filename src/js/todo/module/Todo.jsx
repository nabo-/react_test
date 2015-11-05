var React = require('react');
var PropTypes = React.PropTypes;

var InputText = require('./InputText.jsx');
var List = require('./List.jsx');

var Todo = React.createClass({

	render: function() {
		return (
			<div>
			<InputText />
			<List />
			</div>
		);
	}

});

module.exports = Todo;
