var React = require('react');

var User = React.createClass({
	propTypes: {
		name: React.PropTypes.string.isRequired,
		id: React.PropTypes.number.isRequired
	},

	render: function() {
		return (
			<p>{this.props.id}: {this.props.name}</p>
		);
	}

});

module.exports = User;
