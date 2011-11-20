// --------------------------------------------------------------------------------------------------------------------
//
// winston-simpledb-test.js : tests for instances of the SimpleDB transport
//
// Author           : Andrew Chilton
// Web              : http://www.chilts.org/blog/
// Email            : <chilts@appsattic.com>
//
// Copyright (c)    : 2011 AppsAttic Ltd
// Web              : http://www.appsattic.com/
// License          : http://opensource.org/licenses/MIT
//
// --------------------------------------------------------------------------------------------------------------------

var path = require('path'),
    vows = require('vows'),
    assert = require('assert'),
    winston = require('winston'),
    helpers = require('winston/test/helpers'),
    amazon = require('awssum/lib/amazon/amazon'),
    SimpleDB = require('../winston-simpledb').SimpleDB;

function assertSimpleDB (transport) {
    assert.instanceOf(transport, SimpleDB);
    assert.isFunction(transport.log);
};

var options = {
    accessKeyId : '...',
    secretAccessKey : '...',
    awsAccountId : '...',
    domainName : '...',
    region : amazon.US_EAST_1,
    itemName : 'uuid',
};

var transport = new SimpleDB(options);

vows.describe('winston-simpledb').addBatch({
    "An instance of the SimpleDB Transport": {
        "should have the proper methods defined": function () {
            assertSimpleDB(transport);
        },
// HELP: I tried to do this (similar to the winston-riak module) but it just doesn't work - any help appreciated?
//        "the log() method": helpers.testNpmLevels(
//            transport,
//            "should log msgs to sdb",
//            function (ign, err, meta, result) {
//                assert.isTrue(!err);
//                assert.isObject(result);
//            }
//        ),
    }
}).export(module);

// --------------------------------------------------------------------------------------------------------------------
