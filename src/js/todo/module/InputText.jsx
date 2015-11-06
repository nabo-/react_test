var React = require('react');
var PropTypes = React.PropTypes;

var InputText = React.createClass({

	PropTypes: {
		text_value: PropTypes.string.isRequired,
		onSubmit: PropTypes.func.isRequired
	},

	_onSubmit: function(){
		var text = this.props.text_value;
		this.props.onSubmit(text);
	},

	render: function() {

		return (
			<div className="inputBar">
				<div className="inputBar__body">
					<input type="text" value="" className="inputBar__input" />
				</div>
				<div className="inputBar__right">
					<button onClick={this._onSubmit}>Add</button>
				</div>
			</div>
		);
	}

});

module.exports = InputText;
