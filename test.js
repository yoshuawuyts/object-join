/*eslint no-unused-expressions: 0*/

/**
 * Module dependencies
 */

var should = require('should');
var objectJoin = require('./index');

/**
 * Test
 */

describe('objectJoin()', function () {
  it('should catch errors', function() {
    objectJoin.bind(null, 123)
      .should.throw('Obj1 should be an object');
    objectJoin.bind(null, {}, 123)
      .should.throw('Obj2 should be an object');
  });
  it('should merge shallow objects', function() {
    var obj1 = {foo: 'bar'};
    var obj2 = {bin: 'baz'};
    objectJoin(obj1, obj2).should.eql({foo: 'bar', bin: 'baz'});
  });
  it('should merge deep objects', function() {
    var obj1 = {
      foo: 'bar', 
      brin: {
        tobi: 'jane'
      }
    };
    var obj2 = {
      bin: 'baz', 
      brin: {
        hello: {
          no: 'yes'
        }
      }
    };
    objectJoin(obj1, obj2)
      .should.eql({
        foo: 'bar', 
        bin: 'baz',
        brin: {
          hello: {
            no: 'yes'
          }
        }
      });
  });
});