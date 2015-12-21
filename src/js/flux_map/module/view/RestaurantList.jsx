var React = require('react');
var ReactDOM = require('react-dom');
var Action = require('../action/Action.jsx');
var ListStore = require('../store/ListStore.jsx');
var ListItem = require('./ListItem.jsx');

var PropTypes = React.PropTypes;


// SearchMap でsetState して　各コンポーネントに props で渡した方がよさげ
var RestaurantList = React.createClass({

	PropTypes: {
		requestParams: {
			latitude: PropTypes.number.isRequired,
			longitude: PropTypes.number.isRequired,
			zoomLevel: PropTypes.number.isRequired
		},
		onchangeRestaurantData: PropTypes.func.isRequired
	},

	getInitialState: function(){
		return {
			restaurant_data: []
		};
	},

	componentDidMount: function(){
		Action.RequestRestaurantData(this.props.requestParams);
		ListStore.addLoadListener(this._onChangeRestaurantData);
	},

	_onChangeRestaurantData: function(){

		var _this = this;

		this.setState({
			restaurant_data: ListStore.getData()
		});

		setTimeout(function(){
			_this.props.onchangeRestaurantData(_this.state.restaurant_data);
		}, 10);
	},

	render: function() {
		var _this = this;
		var lists = this.state.restaurant_data.map(function(list, index){

			if(typeof list.image_url.shop_image1 === 'object'){
				list.image_url.shop_image1 = 'http://r.gnst.jp/search/img/noimg.png';
			}

			return (
				<ListItem lat={list.latitude} lon={list.longitude} name={list.name} address={list.address} photo={list.image_url.shop_image1} url={list.url} id={index} key={index} />
			);
		});

		var listBox;
		if(lists.length > 0){
			listBox = (
				<ul>
					{lists}
				</ul>
			);
		} else {
			listBox = ('');
		}

		return (
			<div id="restaurantList">
				{listBox}
			</div>
		);
	}

});

module.exports = RestaurantList;
