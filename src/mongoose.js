const mongoose = require('mongoose');

module.exports = function() {
	const app = this;

	const config = app.get('mongodb');

	mongoose.connect(config.uri, {
		useMongoClient: true,
		user: config.user,
		pass: config.pass,
		authSource: 'admin'
	});
	mongoose.Promise = global.Promise;

	app.set('mongooseClient', mongoose);
};
