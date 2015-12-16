var React = require('react');
var ReactDOM = require('react-dom');
var Action = require('../action/Action.jsx');
var MapStore = require('../store/MapStore.jsx');

var PropTypes = React.PropTypes;

var GoogleMap = React.createClass({

	PropTypes: {
		onchangeMapPosition: PropTypes.func.isRequired
	},

	getInitialState: function(){
		console.log('View / GoogleMap getInitialState #3');
		return {
			map: null,
			map_data: MapStore.getMapAll(),
			markers: []
		};
	},

	componentDidMount: function(){

		console.log('View / GoogleMap componentDidMount #8');
		MapStore.addChangeListener(this._onChangeMapPosition);

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

	_onChangeMapPosition: function(){
		console.log('View / GoogleMap onchangeMapPosition #13');
		this.setState({
			map_data: MapStore.getMapAll()
		});

		console.log('親へ座標をおくりまーす');
		this.props.onchangeMapPosition(this.state.map_data);
	},

	render: function() {
		return (
			<div id="map" />
		);
	}

});


module.exports = GoogleMap;
