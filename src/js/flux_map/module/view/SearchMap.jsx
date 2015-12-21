var React = require('react');
var ReactDOM = require('react-dom');

var SearchMapStore = require('../store/SearchMapStore.jsx');
var RestaurantList = require('./RestaurantList.jsx');
var GoogleMap = require('./GoogleMap.jsx');
var Action = require('../action/Action.jsx');

var SearchMap = React.createClass({

	getInitialState: function(){
		return {
			requestParams: SearchMapStore.getData()
		};
	},

	componentDidMount: function(){
		SearchMapStore.addChangeListener(this._changeParam);
	},

	_changeParam: function(){
		this.setState({
			requestParams: SearchMapStore.getData()
		});
		Action.RequestRestaurantData(this.state.requestParams);
	},

	// googlemapの中心座標をMapコンポーネントから受け取って処理するもの
	handleMapCenterPosition: function(map_data){
		Action.changeParam(map_data);
	},

	render: function(){

		return (
			<div id="wrapper">
				<div id="main">
					<GoogleMap requestParams={this.state.requestParams} onchangeMapPosition={this.handleMapCenterPosition} />
				</div>
				<div id="sub">
					<RestaurantList requestParams={this.state.requestParams} />
				</div>
			</div>
		);
	}

});

module.exports = SearchMap;
