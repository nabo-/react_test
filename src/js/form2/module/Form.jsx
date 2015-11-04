var React = require('react');
var PropTypes = React.PropTypes;

var Text = require('./Text.jsx');
var Submit = require('./Submit.jsx');
var List = require('./List.jsx');

var Form = React.createClass({

	getInitialState: function(){
		return {
			textValue: "hogehoge",
			textData: []
		};
	},

	onChange: function(event){
		this.setState({
			textValue: event.target.value
		});
	},

	onSubmit: function(){
		var data = this.state.textData;
		data.push(this.state.textValue);

		this.setState({
			textData: data
		});
	},

	render: function() {
		return (
			<div>
			<List text_data={this.state.textData} />
			<Text text_value={this.state.textValue} onChangeText={this.onChange} />
			<Submit onClickSubmit={this.onSubmit}/>
			</div>
		);
	}

});

module.exports = Form;
