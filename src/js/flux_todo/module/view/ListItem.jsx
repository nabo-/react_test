var React = require('react');
var ReactDOM = require('react-dom');
var PropTypes = React.PropTypes;

var Action = require('../action/Action.jsx');

var ListItem = React.createClass({

	PropTypes: {
		text: PropTypes.string.isRequired,
		id: PropTypes.number.isRequired
	},

	_onDeleteList: function(event){
		event.preventDefault();
		var id = this.props.id;
		Action.on_remove_list(id);
		return;
	},

	render: function() {
		return (
			<li className="addList__item">
				<div className="addList__layout">
					<div><p>{this.props.text}</p></div>
					<div><button onClick={this._onDeleteList}>Delete</button></div>
				</div>
			</li>
		);
	}

});

module.exports = ListItem;
