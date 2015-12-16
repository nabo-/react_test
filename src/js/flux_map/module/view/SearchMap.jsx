var React = require('react');
var ReactDOM = require('react-dom');

var SearchMapStore = require('../store/SearchMapStore.jsx');
var RestaurantList = require('./RestaurantList.jsx');
var GoogleMap = require('./GoogleMap.jsx');
var Action = require('../action/Action.jsx');

var SearchMap = React.createClass({

	getInitialState: function(){
		console.log('View / searchMap getInitialState #1');
		return {
			requestParams: SearchMapStore.getParamData()
		};
	},

	componentDidMount: function(){
		console.log('View / searchMap componentDidMount #13');
		SearchMapStore.addChangeListener(this._changeParam);
	},

	_changeParam: function(){
		console.log('View / searchMap _changeHash');
		this.setState({
			requestParams: SearchMapStore.getParamData()
		});
		Action.restaurantAPIRequest(this.state.requestParams);
	},

	// googlemapの中心座標をMapコンポーネントから受け取って処理するもの
	handleMapCenterPosition: function(map_data){
		console.log(map_data);
		Action.paramChange(map_data);
	},

	render: function(){

		return (
			<div id="wrapper">
				<div id="main">
					<GoogleMap onchangeMapPosition={this.handleMapCenterPosition} />
				</div>
				<div id="sub">
					<RestaurantList requestParams={this.state.requestParams} />
				</div>
			</div>
		);
	}

});

module.exports = SearchMap;
