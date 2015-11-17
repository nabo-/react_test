var React = require('react');
var ReactDOM = require('react-dom');

var AppStore = require('../store/AppStore.jsx');

var Form = require('./Form.jsx');
var Display = require('./Display.jsx');

var App = React.createClass({

	getInitialState: function(){
		// value: null
		return AppStore.getAll();
	},
	componentDidMount: function() {
		var _this = this;
		console.log('2: view App.componentDidMount');
		
		AppStore.addChangeListener(function () {
			console.log('10: view App.componentDidMount');
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
