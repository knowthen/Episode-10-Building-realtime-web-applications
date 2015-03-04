'use strict';
let rethinkdbdash = require('rethinkdbdash');

let r = rethinkdbdash({db: 'test'});

module.exports = r;