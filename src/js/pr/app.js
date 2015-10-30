var React = require('react');
var ReactDOM = require('react-dom');

var Test = require('./module/Test.jsx');

var App = React.createClass({

	render: function() {

		return (
			<div>
			<p><Test /></p>
			</div>
		);
	}

});

ReactDOM.render(
	<App name="foo" />,
	document.getElementById('content')
	);