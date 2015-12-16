var Dispatcher = require('../dispatcher/Dispatcher.jsx');
var request = require('superagent');
var jsonp = require("superagent-jsonp");

// view から受け取るアクションたち
var Action = {

	paramChange: function(data){
		console.log('Action / paramChange #14');
		var param_data = {};

		if(typeof data.latitude !== 'undefined'){
			param_data.latitude = data.latitude;
		}
		if(typeof data.longitude !== 'undefined'){
			param_data.longitude = data.longitude;
		}
		if(typeof data.zoomLevel !== 'undefined'){
			param_data.zoomLevel = data.zoomLevel;
		}

		Dispatcher.dispatch({
			actionType: 'change_param',
			value: param_data
		});
	},

	restaurantAPIRequest: function(options){
		console.log('Action / restaurantAPIRequest #12');
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
				console.log('レストランAPIから返ってきた');

				if(res.error){
					alert('エラーです');

					return;
				}

				res_data = res.body.rest;

				Dispatcher.dispatch({
					actionType: 'rerender',
					value: res_data
				});
			});
	},

	changeMapCenterPosition: function(data){
		console.log('Action / changeMapCenterPosition #10');

		Dispatcher.dispatch({
			actionType: 'map_center_change',
			value: data
		});
	}
};

module.exports = Action;
