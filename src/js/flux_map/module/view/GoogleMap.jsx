var React = require('react');
var ReactDOM = require('react-dom');
var PropTypes = React.PropTypes;

var GoogleMap = React.createClass({

	PropTypes: {
		lat: PropTypes.number.isRequired,
		lng: PropTypes.number.isRequired,
		zoom: PropTypes.number.isRequired
	},

	componentDidMount: function(){
		// React.findDOMNode(component) で  DOMアクセスできる
		var map = new google.maps.Map(React.findDOMNode(this), {
						center: {
							lat: this.props.lat,
							lng: this.props.lng
						},
						zoom: this.props.zoom
					});
	},


	render: function() {
		return (
			<div id="map" />
		);
	}

});


module.exports = GoogleMap;
