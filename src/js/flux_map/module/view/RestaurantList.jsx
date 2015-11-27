var React = require('react');
var ReactDOM = require('react-dom');
var ListItem = require('./ListItem.jsx');

var PropTypes = React.PropTypes;

var RestaurantList = React.createClass({

	PropTypes: {
		data_list: PropTypes.shape({
			latitude: PropTypes.number.isRequired,
			longitude: PropTypes.number.isRequired,
			name: PropTypes.string.isRequired,
			address: PropTypes.string.isRequired,
			photo: PropTypes.string.isRequired,
			url: PropTypes.string.isRequired
		})
	},

	render: function() {
		var _this = this;
		var lists = this.props.data_list.map(function(list, index){
			return (
				<ListItem lat={list.latitude} lon={list.longitude} name={list.name} address={list.address} photo={list.photo} url={list.url} id={index} key={index} />
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
