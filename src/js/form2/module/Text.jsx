var React = require('react');
var PropTypes = React.PropTypes;

var Text = React.createClass({

	propTypes: {
		text_value: PropTypes.string.isRequired,
		onChangeText : propTypes.func.isRequired
	},

	render: function() {
		return (
			<div>
				<input type="text" value={this.props.text_value} onChange={this.props.onChangeText} />
			</div>
		);
	}

});

module.exports = Text;
