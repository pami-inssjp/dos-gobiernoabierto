var mongo = require('mongojs');

module.exports = function (config, connection) {
  if (config.db) config = config.db;

	connection = connection || 'connection';

  // default db collections
  var collections = ['actions', 'user', 'laws', 'tags', 'feeds'];

  // add db aliases to default collections
  for (var key in config.aliases) {
    var index = collections.indexOf(config.aliases[key]);

    if (!~index) collections.push(config.aliases[key]);
  }

  // connect to db
  var db = mongo.connect(config[connection], collections);

	if (!db) {
		throw new Error('could not connect to ' + config.connection);
	}

  // expose default collections as aliases in db
  for (var key in config.aliases) {
    db[key] = db[config.aliases[key]];
  }

	return db;
};
