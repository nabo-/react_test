var React = require('react');
var ReactDOM = require('react-dom');
var Action = require('../action/Action.jsx');
var MapStore = require('../store/MapStore.jsx');

var PropTypes = React.PropTypes;

var GoogleMap = React.createClass({

	PropTypes: {
		map_position: {
			latitude: PropTypes.number.isRequired,
			longitude: PropTypes.number.isRequired,
			zoomLevel: PropTypes.number.isRequired
		},
		markers: [],
		onChangeMapPosition: PropTypes.func.isRequired
	},

	getInitialState: function(){
		return {
			markers_obj: []
		};
	},

	MAP: null,

	componentDidMount: function(){
		// ReactDOM.findDOMNode(component) で  DOMアクセスできる
		this.MAP = new google.maps.Map(ReactDOM.findDOMNode(this), {
						center: {
							lat: this.props.map_position.latitude,
							lng: this.props.map_position.longitude
						},
						zoom: this.props.map_position.zoomLevel
					});

		var centerChangeFunc;

		this.MAP.addListener('center_changed', function(){

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

				Action.changeMapCenter(data);

			}, 1000);
		});

		MapStore.addChangeListener(this._onChangeMapCenter);
		MapStore.addChangeMarker(this._onChangeMarker);
	},

	_onChangeMapCenter: function(){
		// 地図の中心地が変わったのをStoreから検知したときにすること
		var store_data = MapStore.getData();

		// もしかしたらsetTimeout
		this.props.onChangeMapPosition(store_data.map_position);
	},

	_onChangeMarker: function(){
		var _this = this;
		var store_data = MapStore.getData();

		store_data.markers.forEach(function(marker){
			marker.setMap(_this.MAP);
		});

	},

	render: function() {
		return (
			<div id="map" />
		);
	}

});


module.exports = GoogleMap;
