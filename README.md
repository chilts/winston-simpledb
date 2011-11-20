# SimpleDB Transport for Winston

The winston-simpledb module allows you to log your winston messages to Amazon's SimpleDB.

    var SimpleDB = require('winston-simpledb').SimpleDB;
    winston.add(SimpleDB, options);

The SimpleDB transport takes the following options.

    level : the log level of messages

level: Level of messages that this transport should log.
silent: Boolean flag indicating whether to suppress output.
db: The name of the database you want to log to. [required]
collection: The name of the collection you want to store log messages in, defaults to 'log'.
safe: Boolean indicating if you want eventual consistency on your log messages, if set to true it requires an extra round trip to the server to ensure the write was committed, defaults to true.
host: The host running MongoDB, defaults to localhost.
port: The port on the host that MongoDB is running on, defaults to MongoDB's default port.
Metadata: Logged as a native JSON object.

