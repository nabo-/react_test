var React = require('react');
var PropTypes = React.PropTypes;

var TextItem = require('./TextItem.jsx');
var DeleteButton = require('./DeleteButton.jsx');


var ListItem = React.createClass({

	PropTypes: {
		text_value: PropTypes.string.isRequired,
		id: PropTypes.number.isRequired,
		deleteList: PropTypes.func.isRequired
	},

	_deleteList: function(){
		var id = this.props.id;
		this.props.deleteList(id);
	},

	render: function() {
		return (
			<li className="addList__item">
				<div className="addList__layout">
					<div><TextItem text={this.props.text_value} /></div>
					<div><DeleteButton on_delete={this._deleteList}/></div>
				</div>
			</li>
		);
	}

});

module.exports = ListItem;
