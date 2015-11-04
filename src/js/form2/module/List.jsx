var React = require('react');
var PropTypes = React.PropTypes;

var List = React.createClass({

	propTypes: {
		text_data: PropTypes.arrayOf(React.PropTypes.string).isRequired
	},

	render: function() {
		var textList = this.props.text_data.map(function(text, index) {
			return (
				<p key={index}>{text}</p>
			);
		});

		return (
			<div>
				{textList}
			</div>
		);
	}

});

module.exports = List;
