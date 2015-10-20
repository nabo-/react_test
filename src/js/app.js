var React = require('react');
var ReactDOM = require('react-dom');

var Index = React.createClass({
	render: function(){
		return (
			<p>hoge</p>
			);
	}
});



ReactDOM.render(
	<Index />,
	document.getElementById('content')
	);