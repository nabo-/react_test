var React = require('react');
var PropTypes = React.PropTypes;

var InputText = require('./InputText.jsx');
var List = require('./List.jsx');

var Todo = React.createClass({

	getInitialState: function(){
		return {
			listData: []
		};
	},

	addList: function(text){
		var data = this.state.listData;
		data.push(text);

		this.setState({
			listData: data
		});
	},

	render: function() {

		// var list_wrap;
		//
		// if(this.state.listData.length > 0){
		// 	list_wrap = <List list_data={this.state.listData} />;
		// } else {
		// 	list_wrap = '';
		// }

		return (
			<div>
			<InputText onSubmit={this.addList}/>
			<List />
			</div>
		);
	}

});

module.exports = Todo;
