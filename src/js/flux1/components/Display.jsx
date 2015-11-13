var React = require('react');

var Display = React.createClass({
	render: function () {
		var message = this.props.data;
		return (
			<div>{message}</div>
		);
	}
});

module.exports = Display;
