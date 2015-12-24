var Dispatcher = require('../dispatcher/Dispatcher.jsx');
var request = require('superagent');
var jsonp = require("superagent-jsonp");

// view から受け取るアクションたち
var Action = {

	changeParam: function(data){
		console.log('Action / changeParam');
		Dispatcher.dispatch({
			action: 'change_param',
			value: data
		});
	},

	changeMarker: function(data){
		console.log('Action / changeMarker');
		var _this = this;

		var markers_obj = data.map(function(obj, index){

			var marker_position = {
				lat: Number(obj.latitude),
				lng: Number(obj.longitude)
			};

			// GoogleMapオブジェクトをどうやってひきまわすか・・・
			var marker = new google.maps.Marker({
				position: marker_position,
				icon: {
					url: 'img/point.png',
					size: new google.maps.Size(34, 59),
					origin: new google.maps.Point(0, 0),
					anchor: new google.maps.Point(8, 29),
					scaledSize: new google.maps.Size(17, 29)
				}
			});

			return marker;

		});

		Dispatcher.dispatch({
			action: 'change_marker',
			value: markers_obj
		});
	},

	RequestRestaurantData: function(data){
		console.log('Action / RequestRestaurantData');

		var API_URL = 'http://api.gnavi.co.jp/RestSearchAPI/20150630/';
		var API_KEY = '94d8b18e38bcf587805c80d486b40b85';

		var loadCallback = function(err, res){
			if(res.error){
				alert('エラーです');
				return;
			}

			Dispatcher.dispatch({
				action: 'change_restaurant',
				value: res.body.rest
			});
		};

		request
			.get(API_URL)
			.query({
				format: 'json',
				keyid: API_KEY,
				latitude: data.latitude,
				longitude: data.longitude,
				input_coordinates_mode: 2,
				coordinates_mode: 2,
				hit_per_page: 30
			})
			.use(jsonp)
			.end(loadCallback);
	},

	changeMapCenter: function(data){
		console.log('Action / changeMapCenter');
		Dispatcher.dispatch({
			action: 'change_map_center',
			value: data
		});
	}
};

module.exports = Action;
