/**
 * Module dependencies.
 */

var t = require('t-component');
var config = require('../../config');

/**
 * Load localization dictionaries to translation application
 */

var en = require('./lib/en');
var es = require('./lib/es');
var ca = require('./lib/ca');
var de = require('./lib/de');
var fr = require('./lib/fr');
var fi = require('./lib/fi');
var gl = require('./lib/gl');
var it = require('./lib/it');
var nl = require('./lib/nl');
var pt = require('./lib/pt');
var ru = require('./lib/ru');
var uk = require('./lib/uk');

module.exports.t = t;

// English
t.en = en;

// Spanish
t.es = es;

// Català
t.ca = ca;

// German
t.de = de;

// French
t.fr = fr;

// Finnish
t.fi = fi;

// Galician
t.gl = gl;

// Italian
t.it = it;

// Dutch
t.nl = nl;

// Portuguese
t.pt = pt;

// Russian
t.ru = ru;

// Ukrainian
t.uk = uk;

t.lang(config.locale);
