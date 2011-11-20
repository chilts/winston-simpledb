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

## Installation

``` bash
  $ npm install winston-simpledb
```

## Usage

winston-simpledb is just like any other transport for winston. When adding it to winston, it takes some options so that
it knows where to log to SimpleDB.

The SimpleDB transport takes the following options:

    accessKeyId     : your AWS access key id
    secretAccessKey : your AWS secret access key
    awsAccountId    : your AWS access id (of the form 'xxxx-xxxx-xxxx')
    region          : the region where the domain is hosted (of the form amazon.US_EAST_1)
    domainName      : the domain name to log to, or a function to generate the domain name
    itemName        : the type of itemName to use or a function to generate the item name

### AWS Credentials

All of these options are values that you can find from your Amazon Web Services account: 'accessKeyId',
'secretAccessKey' and 'awsAccountId'.

### Region

This is the region in which your domain is located. For example you need to pass it one of the amazon.* constants such
as amazon.US_EAST_1 or amazon.EU_WEST_1. See 'awssum' for more details.

### DomainName

The domainName provided is the one where you want your messages logged. As well as providing a string, you may instead
provide a function which returns a string. This gives you the ability to dynamically change which domain to log to.

Valid domainName options are:

    a string    -> the domain name is this literal string
    a function  -> the string that this function returns

### ItemName

The itemName option you provide determines how the itemName is generated when logging to SimpleDB. You may provide a
string which is a predefined generator (such as 'uuid', 'epoch' or 'timestamp') or a function which returns an
itemName.

Valid itemName options are:

    'uuid'      -> '75f38e1c-1bc6-4854-b3e2-9e6b65e9d012'
    'epoch'     -> 1321751212043
    'timestamp' -> '2011-11-20T01:06:52.043Z'
    function    -> (a string that the function returns)

# Author

Written by [Andrew Chilton](http://www.chilts.org/blog/)

Copyright 2011 [AppsAttic](http://www.appsattic.com/)

(Ends)
