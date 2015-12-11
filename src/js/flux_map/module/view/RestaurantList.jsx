var React = require('react');
var ReactDOM = require('react-dom');
var ListItem = require('./ListItem.jsx');

var PropTypes = React.PropTypes;

var RestaurantList = React.createClass({

	PropTypes: {
		data_list: PropTypes.shape({
			latitude: PropTypes.string.isRequired,
			longitude: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			address: PropTypes.string.isRequired,
			photo: PropTypes.string.isRequired,
			url: PropTypes.string.isRequired
		})
	},

	render: function() {
		console.log('RestaurantList render #5 #14');
		var _this = this;
		var lists = this.props.data_list.map(function(list, index){

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
