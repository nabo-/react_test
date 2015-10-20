var React = require('react');

var UserForm = require('./module/UserForm.jsx');
var UserList = require('./module/UserList.jsx');


var UserBox = React.createClass({
	getInitialState: function(){
		return {userData: []};
	},
	handleAddUser: function(name, mail){
		var data = this.state.userData;
		data.push({name: name, mail: mail});
		this.setState({userData: data});
	},
	render: function(){
		return (
			<div style="{{width:"300px"}}">
				<UserForm addUser={this.handleAddUser}/>
				<UserList userData={this.state.userData}/>
			</div>
		);
	}

});

module.exports = UserBox;