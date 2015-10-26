var React = require('react');
var ReactDOM = require('react-dom');

var UserForm = React.createClass({

	propTypes: {
		addUser: React.PropTypes.func.isRequired
	},
	handleSubmit: function(){
		var name = ReactDOM.findDOMNode(this.refs.name).value.trim();
		var mail = ReactDOM.findDOMNode(this.refs.mail).value.trim();

		if(!name){
			return;
		}
		this.props.addUser(name, mail);
		ReactDOM.findDOMNode(this.refs.name).value = "";
		ReactDOM.findDOMNode(this.refs.mail).value = "";
	},

	render: function() {
		return (
			<div>
				<table>
				<tbody>
					<tr>
						<td>
						<label>名前</label>
						</td>
						<td>
						<input type="text" ref="name"/>
						</td>
					</tr>
					<tr>
						<td>
						<label>メールアドレス</label>
						</td>
						<td>
						<input type="text" ref="mail"/>
						</td>
					</tr>
					</tbody>
				</table>

				<div style={{textAlign:"right"}}>
				<button onClick={this.handleSubmit}>追加</button>
				</div>
			</div>
		);
	}

});

module.exports = UserForm;