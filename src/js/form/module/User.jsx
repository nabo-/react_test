
var React = require('react');
var ReactDOM = require('react-dom');

var User = React.createClass({

	propTypes: {
		name: React.PropTypes.string.isRequired,
		mail: React.PropTypes.string
	},

	render: function() {
		return (
			<tr>
			<td>{this.props.name}</td>
			<td>{this.props.mail}</td>
			</tr>
		);
	}

});

module.exports = User;