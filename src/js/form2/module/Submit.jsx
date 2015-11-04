var React = require('react');
var PropTypes = React.PropTypes;

var Submit = React.createClass({

	propTypes: {
		onClickSubmit : PropTypes.func.isRequired
	},

	render: function() {
		return (
			<div>
				<button type="button" onClick={this.props.onClickSubmit}>追加</button>
			</div>
		);
	}

});

module.exports = Submit;
