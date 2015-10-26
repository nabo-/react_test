var React = require('react');
var ReactDOM = require('react-dom');

var User = require('./User.jsx');

var UserList = React.createClass({
	propTypes: {
		userData: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
	},
	render: function(){
		var UserNodes = this.props.userData.map(function(user, index){
			return (
				<User name={user.name} mail={user.mail} key={index} />
			);
		});
		return (
			<table>
			<tbody>
			<tr>
			<th>名前</th>
			<th>メールアドレス</th>
			</tr>
			{UserNodes}
			</tbody>
			</table>
		);
	}
});


module.exports = UserList;