var React = require('react');
var ReactDOM = require('react-dom');
var PropTypes = React.PropTypes;
var ListItem = require('./ListItem.jsx');


var List = React.createClass({

	PropTypes: {
		data_list: PropTypes.shape({
			id: PropTypes.number.isRequired,
			text: PropTypes.string.isRequired,
			date: PropTypes.string.isRequired
		})
	},

	render: function() {
		var _this = this;

		var lists = this.props.data_list.map(function(list, index){

			return (
				<ListItem text={list.text} date={list.date} id={list.id} key={list.id}/>
			);
		});

		var ulbox;

		if(lists.length > 0){
			ulbox = (
				<ul className="addList">
					{lists}
				</ul>
			);
		}else{
			ulbox = ('');
		}

		return (
			<div>
				{ulbox}
			</div>
		);
	}

});

module.exports = List;
