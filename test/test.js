var expect = require('chai').expect;
var request = require('request');
var server = require('../server');


describe('server', function() {

  var baseUrl = "http://localhost:8000/";

  describe('hello world', function() {
    it('correctly returns hello world', function(done) {
      request(baseUrl+"hello", function(error, response, body) {
        expect(body).to.equal("hello world");
        done();
      });
    });
  });

  describe('add', function() {
    var tests = [
      {args: [1, 2], expected: "3"},
      {args: [3, 3], expected: "6"},
      {args: [4, 6], expected: "10"}
    ];

    tests.forEach(function(test) {
      it('correctly returns the sum of ' + test.args.length + ' numbers', function(done) {
        request(baseUrl+"add/"+test.args[0]+"/"+test.args[1], function(error, response, body) {
          expect(body).to.equal(test.expected);
          done();
        });
      });
    });
  });
});
