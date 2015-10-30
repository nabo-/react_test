var React = require('react');
var ReactDOM = require('react-dom');

var Test = React.createClass({

	propTypes: {
		propName: React.PropTypes.string
	},

	render: function() {

		return (
			<div>
			<p>{propName}</p>
			</div>
		);
	}

});

module.exports = Test;