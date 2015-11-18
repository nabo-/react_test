var React = require('react');
var ReactDOM = require('react-dom');

var Store = require('../store/Store.jsx');

var InputText = require('./InputText.jsx');
var List = require('./List.jsx');


var Todo = React.createClass({

	getInitialState: function(){
		return Store.getAll();
	},

	// レンダリングされたらこいつらを初期設定
	componentDidMount: function(){
		var _this = this;

		Store.addChangeListener(function(){
			_this.setState(Store.getAll());
		});
	},

	render: function() {
		return (
			<div>
			<InputText />
			<List data_list={this.state.dataList} />
			</div>
		);
	}

});

module.exports = Todo;
