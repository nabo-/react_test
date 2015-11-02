var React = require('react');
var ReactDOM = require('react-dom');
var request = require('superagent');

var Test = require('./module/Test.jsx');

var Users = React.createClass({
	getInitialState: function(){
		return {
			users: [{id: 1, name: 'foo'},{id: 2, name: 'hoge'}]
		};
	},
	componentDidMount: function(){
		var _this = this;
			request.get('demo.json', function(err,res){
				_this.setState(function(){
					return {
						users: res.body.users
					};
				});
			});
	},
	render: function() {
		var users = this.state.users.map(function(user){
			return (
				<Test id={user.id} name={user.name} key={user.id} />
			);
		});
		return (
			<div>
				<p>ユーザー一覧</p>
				{users}
			</div>
		);
	}

});


ReactDOM.render(
	<Users />,
	document.getElementById('content')
	);
