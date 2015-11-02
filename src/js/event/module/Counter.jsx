var React = require('react');

var Counter = React.createClass({

	PropTypes: {
		count: React.PropTypes.number.isRequired,
		onCountUp: React.PropTypes.func.isRequired
	},

	render: function() {
		return (
			<div>
			<p>{this.props.count}</p>
			<button onClick={this.props.onCountUp}>Click</button>
			</div>
		);
	}

});

module.exports = Counter;
