var React = require('react');
var PropTypes = React.PropTypes;
var ListItem = require('./ListItem.jsx');


var List = React.createClass({

	getInitialState: function(){
		return {
			list_data: [
					{id:1, text: 'hogehogehogehoge'},
					{id:2, text: 'watanabe eisuke'},
					{id:3, text: 'hotei tomoyasu'}
				]
		};
	},


	deleteOwnObject: function(id){
		this.setState({
			list_data: this.state.list_data.filter(function(list){
				return list.id !== id;
			})
		});
	},

	render: function() {
		var _this = this;

		var lists = this.state.list_data.map(function(list){
			return (
				<ListItem text_value={list.text} deleteList={_this.deleteOwnObject} id={list.id} key={list.id}/>
			);
		});

		return (
			<ul className="addList">
				{lists}
			</ul>
		);
	}

});

module.exports = List;
