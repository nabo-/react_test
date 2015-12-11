var React = require('react');
var ReactDOM = require('react-dom');
var Action = require('../action/Action.jsx');
var PropTypes = React.PropTypes;
var MapStore = require('../store/MapStore.jsx');
var GoogleMap = React.createClass({

	getInitialState: function(){
		console.log('GoogleMap getInitialState #4');
		return {
			map: null,
			map_data: MapStore.getMapAll(),
			markers: []
		};
	},

	componentDidMount: function(){

		console.log('GoogleMap componentDidMount #6');
		MapStore.addChangeListener(this._onChageMapPosition);

		// ReactDOM.findDOMNode(component) で  DOMアクセスできる
		var gMap = new google.maps.Map(ReactDOM.findDOMNode(this), {
						center: {
							lat: this.state.map_data.latitude,
							lng: this.state.map_data.longitude
						},
						zoom: this.state.map_data.zoomLevel
					});

		var centerChangeFunc;

		gMap.addListener('center_changed', function(){
			var _this = this;
			clearTimeout(centerChangeFunc);

			centerChangeFunc = setTimeout(function(){
				var get_center = _this.getCenter();
				var zoom = _this.getZoom();
				var data = {
					latitude: get_center.lat(),
					longitude: get_center.lng(),
					zoomLevel: zoom
				};
				Action.changeMapCenterPosition(data);
			}, 1000);
		});
	},

	_onChageMapPosition: function(){
		console.log('GoogleMap onchangeMapPosition');
		this.setState({
			map_data: MapStore.getMapAll()
		});
	},

	render: function() {
		return (
			<div id="map" />
		);
	}

});


module.exports = GoogleMap;
