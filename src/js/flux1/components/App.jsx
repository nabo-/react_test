var React = require('react');
var ReactDOM = require('react-dom');

var AppStore = require('../store/AppStore.jsx');

var Form = require('./Form.jsx');
var Display = require('./Display.jsx');

var App = React.createClass({

	getInitialState: function(){
		return AppStore.getAll();
	},
	componentDidMount: function() {
		var _this = this;
		AppStore.addChangeListener(function () {
			_this.setState(AppStore.getAll());
		});
    },
	render: function() {
		return (
			<div className="testApp">
				<Form />
				<Display data={this.state.value} />
			</div>
		);
	}
});

module.exports = App;
