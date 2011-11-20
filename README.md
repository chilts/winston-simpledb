# SimpleDB Transport for Winston

The winston-simpledb module allows you to log your winston messages to Amazon's SimpleDB.

    var SimpleDB = require('winston-simpledb').SimpleDB;
    
    winston.add(winston.transports.SimpleDB, {
        // for andychilton
        accessKeyId : '...',
        secretAccessKey : '...',
        awsAccountId : 'xxxx-xxxx-xxxx',
        domainName : 'log',
        region : amazon.US_EAST_1,
        itemName : 'uuid',
    });

## Options

The SimpleDB transport takes the following options.

    accessKeyId     : your AWS access key id
    secretAccessKey : your AWS secret access key
    awsAccessId     : your AWS access id (of the form 'xxxx-xxxx-xxxx')
    region          : the region where the domain is hosted (of the form amazon.US_EAST_1)
    domainName      : the domain name to log to, or a function to generate the domain name
    itemName        : the type of itemName to use or a function to generate the item name

Let's compare the domainName values:

    string      -> the domain name is this literal string
    function    -> the string that this function returns

Let's compare the itemName values:

    'uuid'      -> '75f38e1c-1bc6-4854-b3e2-9e6b65e9d012'
    'epoch'     -> 1321751212043
    'timestamp' -> '2011-11-20T01:06:52.043Z'
    function    -> (a string that the function returns)

(Ends)
