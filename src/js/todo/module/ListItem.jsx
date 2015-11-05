var React = require('react');
var PropTypes = React.PropTypes;

var ListItem = React.createClass({

	PropTypes: {
		text_value: PropTypes.string.isRequired,
		on_click_delete: PropsTypes.func.isRequired
	},

	render: function() {
		return (
			<li className="addList__item">
				<div className="addList__layout">
					<div><p>{this.props.text_value}</p></div>
					<div><button onClick={this.props.on_click_delete}>Delete</button></div>
				</div>
			</li>
		);
	}

});

module.exports = ListItem;
