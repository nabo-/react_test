var React = require('react');
var ReactDOM = require('react-dom');

var Header = require('./module/Header.jsx');
var Body = require('./module/Body.jsx');
var Footer = require('./module/Footer.jsx');

var Index = React.createClass({
	render: function(){
		return (
			<div className="component">
				<div className="component__header">
					<Header />
				</div>
				<div className="component__body">
					<Body />
				</div>
				<div className="component__footer">
					<Footer />
				</div>
			</div>
		);
	}
});

ReactDOM.render(
	<Index />,
	document.getElementById('content')
	);