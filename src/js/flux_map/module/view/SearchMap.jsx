var React = require('react');
var ReactDOM = require('react-dom');
var ListStore = require('../store/ListStore.jsx');
// var MapStore = require('../store/MapStore.jsx');
var RestaurantList = require('./RestaurantList.jsx');
var GoogleMap = require('./GoogleMap.jsx');


var SearchMap = React.createClass({

	getInitialState: function(){
		console.log('searchMap getInitialState #1');
		return {
			list_data: ListStore.getListAll()
		};
	},

	componentDidMount: function(){
		console.log('searchMap componentDidMount #8');
		var _this = this;
		ListStore.addChangeListener(this._onChangeList);
	},

	_onChangeList: function(){
		console.log('searchMap _onChangeList #12');
		this.setState({
			list_data: ListStore.getListAll()
		});
	},
	render: function(){

		return (
			<div id="wrapper">
				<div id="main">
					<GoogleMap />
				</div>
				<div id="sub">
					<RestaurantList data_list={this.state.list_data} />
				</div>
			</div>
		);
	}

});

module.exports = SearchMap;
