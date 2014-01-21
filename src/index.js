"use strict";

var levelWriteStream = require('level-writestream');
var sublevel = require('level-sublevel');
var levelgraph = require('levelgraph');
var levelgraphJsonld = require('levelgraph-jsonld');

module.exports = function (db, options) {

  var sub = sublevel(levelWriteStream(db));
  var graph = levelgraph(sub.sublevel('holons'));
  var jsonld = levelgraphJsonld(levelgraph);

  return jsonld;
};
