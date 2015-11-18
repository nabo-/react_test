var React = require('react');
var ReactDOM = require('react-dom');

var Action = require('../action/Action.jsx');

var InputText = React.createClass({

	_onSubmit: function(event){
		event.preventDefault();
		var text = ReactDOM.findDOMNode(this.refs.text).value.trim();

		if(!text){
			return;
		}

		// Action にイベント通知
		Action.on_add_submit(text);

		ReactDOM.findDOMNode(this.refs.text).value = '';
		return;
	},

	render: function() {
		return (
			<div className="inputBar">
				<div className="inputBar__body">
					<input type="text" placeholder="テキストを入力" className="inputBar__input" ref="text" />
				</div>
				<div className="inputBar__right">
					<button onClick={this._onSubmit}>Add</button>
				</div>
			</div>
		);
	}

});

module.exports = InputText;
