var Dispatcher = require('../dispatcher/Dispatcher.jsx');
var request = require('superagent');
var jsonp = require("superagent-jsonp");

// view から受け取るアクションたち
var Action = {

	restaurantAPIRequest: function(options){
		console.log('Action restaurantAPIRequest #7');
		var API_URL = 'http://api.gnavi.co.jp/RestSearchAPI/20150630/';
		var API_KEY = '94d8b18e38bcf587805c80d486b40b85';
		var res_data;

		request
			.get(API_URL)
			.query({
				format: 'json',
				keyid: API_KEY,
				latitude: options.latitude,
				longitude: options.longitude,
				input_coordinates_mode: 2,
				coordinates_mode: 2,
				hit_per_page: 30
			})
			.use(jsonp)
			.end(function(err, res){
				res_data = res.body.rest;

				Dispatcher.dispatch({
					actionType: 'rerender',
					value: res_data
				});
			});
	},

	changeMapCenterPosition: function(data){
		console.log('Action changeMapCenterPosition');

		Dispatcher.dispatch({
			actionType: 'map_center_change',
			value: data
		});
	}
};

module.exports = Action;
