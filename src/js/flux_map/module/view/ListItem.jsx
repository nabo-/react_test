var React = require('react');
var ReactDOM = require('react-dom');
var PropTypes = React.PropTypes;

var ListItem = React.createClass({

	PropTypes: {
		latitude: PropTypes.number.isRequired,
		longitude: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
		address: PropTypes.string.isRequired,
		photo: PropTypes.string.isRequired,
		url: PropTypes.string.isRequired,
		id: PropTypes.number.isRequired
	},
	
	render: function() {
		return (
			<li className="l-list__item" data-num="{this.props.id}">
				<a href="{this.props.url}" className="l-list__layout">
					<div className="l-media">
						<div className="l-media__left">
							<div className="l-image--width-50">
								<p className="l-image__body"><img src="http://r.gnst.jp/search/img/noimg.png" alt="{this.props.name}" /></p>
							</div>
						</div>
						<div className="l-media__body">
							<p className="text--major">{this.props.name}</p>
							<p>{this.props.address}</p>
						</div>
					</div>
				</a>
			</li>
		);
	}

});

module.exports = ListItem;
