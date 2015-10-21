var React = require('react');

var UserList = React.createClass({
	prpoTypes: {
		userData: React.prpoType.arrayOf(React.prpoTypes.object).isRequired
	},
	render: function(){
		var UserNodes = this.prpps.userData.map(function(user, index){
			return (
				<User name={user.name} mail={user.mail} key={index} />
			);
		});
		return (
			<table>
			<tr>
			<th>名前</th>
			<th>メールアドレス</th>
			</tr>
			{UserNodes}
			</table>
		);
	}
});


module.exports = UserList;