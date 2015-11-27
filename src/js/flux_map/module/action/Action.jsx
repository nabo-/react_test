var Dispatcher = require('../dispatcher/Dispatcher.jsx');
var request = require('superagent');

// view から受け取るアクションたち
var Action = {

	change_center: function(options){
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
			.end(function(err, res){
				console.log(res.body);
				res_data = res.body;
			});


		Dispatcher.dispatch({
			actionType: 'rerender',
			value: res_data
		});
	}
};

module.exports = Action;
