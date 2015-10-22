
var React = require('react');

var User = React.createClass({

	propTypes: {
		name: React.PropTypes.string.isRequired,
		mail: React.PropTypes.string
	}

	render: function() {
		return (
			<tr>
			<td>{this.prop.name}</td>
			<td>{this.prop.mail}</td>
			</tr>
		);
	}

});

module.exports = User;