var React = require('react');
var ReactDOM = require('react-dom');

var RestaurantList = require('./RestaurantList.jsx');
var GoogleMap = require('./GoogleMap.jsx');
var MapStore = require('../store/MapStore.jsx');
var ListStore = require('../store/ListStore.jsx');
var Action = require('../action/Action.jsx');

var SearchMap = React.createClass({

	getInitialState: function(){
		return {
			map: {
				data: MapStore.getData()
			},
			restaurant: {
				data: ListStore.getData()
			}
		};
	},

	// googlemapの中心座標をMapコンポーネントから受け取って処理するもの
	handleMapCenterPosition: function(map_data){
		this.setState({
			map: {
				data: {
					map_position: map_data
				}
			}
		});

		// 地図の中心地が変わった時にレストランAPIにも中心座標を投げる
		Action.RequestRestaurantData(this.state.map.data.map_position);
	},

	handleRestaurantData: function(restaurant_data){
		this.setState({
			restaurant: {
				data: {
					restaurant_data: restaurant_data
				}
			}
		});

		Action.changeMarker(this.state.restaurant.data.restaurant_data);
	},

	render: function(){
		return (
			<div id="wrapper">
				<div id="main">
					<GoogleMap map_position={this.state.map.data.map_position} markers={this.state.restaurant.data.restaurant_data} onChangeMapPosition={this.handleMapCenterPosition} />
				</div>
				<div id="sub">
					<RestaurantList request_params={this.state.map.data.map_position} onChangeRestaurantData={this.handleRestaurantData} />
				</div>
			</div>
		);
	}

});

module.exports = SearchMap;
