let _db;

function connectToDB() {
	const MongoClient = require('mongodb').MongoClient;
	const uri = encodeURI(process.env.MONGO_URI);
	MongoClient.connect(uri, function (err, client) {
		if (err) throw err;

		let db = client.db('quotes_db');
		_db = db;
	});
}

function getDb() {
	return _db;
}

module.exports = { connectToDB, getDb };
