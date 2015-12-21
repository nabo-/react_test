var React = require('react');
var ReactDOM = require('react-dom');
var Action = require('../action/Action.jsx');
var MapStore = require('../store/MapStore.jsx');

var PropTypes = React.PropTypes;

var GoogleMap = React.createClass({

	PropTypes: {
		requestParams: {
			latitude: PropTypes.number.isRequired,
			longitude: PropTypes.number.isRequired,
			zoomLevel: PropTypes.number.isRequired
		},
		onchangeMapPosition: PropTypes.func.isRequired
	},

	getInitialState: function(){
		return {
			map: null,
			map_data: this.props.requestParams,
			markers: []
		};
	},

	componentDidMount: function(){

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


		MapStore.addChangeListener(this._onChangeMapPosition);
		MapStore.addMarkerChange(this._onChangeMarker);

		// Mapのstoreにある初期データを親コンポーネントに伝える
		this.props.onchangeMapPosition(this.state.map_data);
	},

	_onChangeMapPosition: function(){
		var _this = this;

		this.setState({
			map_data: MapStore.getData()
		});

		setTimeout(function(){
			_this.props.onchangeMapPosition(_this.state.map_data);
		}, 10);
	},

	_onChangeMarker: function(){
		this.setState({
			markers: MapStore.getMarkerData()
		});
	},


	render: function() {
		return (
			<div id="map" />
		);
	}

});


module.exports = GoogleMap;
