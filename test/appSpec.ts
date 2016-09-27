import * as assert from 'power-assert';
import American from '../src/American';

describe('Sample parent', function () {

  describe("Sample child", function() {
    it("if true", function() {
      var american = new American('Taro', 'Yamada');
      assert.equal(american.sayHello(), 'undefined');
    });
  });

});