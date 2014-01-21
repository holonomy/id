var expect = require('chai').expect;

var holons = require('../');

describe('holons', function () {
  before(function () {
    this.level = require('level-test')();
    this.db = this.level('testdb', {encoding: 'json'});
  });

  it("should create new holons graph with no options", function () {
    this.holons = holons(this.db);
    expect(this.holons).to.exist;
  });
});