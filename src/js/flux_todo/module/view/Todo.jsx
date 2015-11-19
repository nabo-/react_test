var React = require('react');
var ReactDOM = require('react-dom');

var Store = require('../store/Store.jsx');

var InputText = require('./InputText.jsx');
var List = require('./List.jsx');


var Todo = React.createClass({

	getInitialState: function(){
		return {
			tracks: Store.getAll()
		};
	},

	// レンダリングされたらこいつらを初期設定
	componentDidMount: function(){
		var _this = this;
		Store.addChangeListener(this._onChange);
	},

	_onChange: function(){
		this.setState({
			tracks: Store.getAll()
		});
	},

	render: function() {
		return (
			<div>
			<InputText />
			<List data_list={this.state.tracks.dataList} />
			</div>
		);
	}

});

module.exports = Todo;
