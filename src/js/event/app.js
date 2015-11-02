var React = require('react');
var ReactDOM = require('react-dom');

var Counter = require('./module/Counter.jsx');

var App = React.createClass({

	getInitialState: function(){
		return {
			count: 0
		};
	},

	onClick: function(event){

		this.setState({
			count: this.state.count +1
		});
	},

	render: function() {
		return (
			<div>
			<Counter onCountUp={this.onClick} count={this.state.count} />
			</div>
		);
	}

});

ReactDOM.render(
	<App />,
	document.getElementById('content')
	);
