var React = require('react');
var ReactDOM = require('react-dom');
var Store = require('../store/Store.jsx');

var RestaurantList = require('./RestaurantList.jsx');
var GoogleMap = require('./GoogleMap.jsx');


var SearchMap = React.createClass({

	getInitialState: function(){
		return {
			// リストのデータを受け取る
			list_data: Store.getListAll()
		};
	},

	componentDidMount: function(){
		var _this = this;
		Store.addChangeListener(this._onChange);
	},

	_onChange: function(){
		this.setState({
			list_data: Store.getListAll()
		});
	},

	render: function(){
		return (
			<div>
				<div id="main">
					<GoogleMap />
				</div>
				<div id="sub">
					<RestaurantList data_list={this.state.list_data.restaurant_list} />
				</div>
			</div>
		);
	}

});

module.exports = SearchMap;
