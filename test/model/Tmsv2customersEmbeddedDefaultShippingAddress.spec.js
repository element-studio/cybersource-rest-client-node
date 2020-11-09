/**
 * CyberSource Merged Spec
 * All CyberSource API specs merged together. These are available at https://developer.cybersource.com/api/reference/api-reference.html
 *
 * OpenAPI spec version: 0.0.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.CyberSource);
  }
}(this, function(expect, CyberSource) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new CyberSource.Tmsv2customersEmbeddedDefaultShippingAddress();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Tmsv2customersEmbeddedDefaultShippingAddress', function() {
    it('should create an instance of Tmsv2customersEmbeddedDefaultShippingAddress', function() {
      // uncomment below and update the code to test Tmsv2customersEmbeddedDefaultShippingAddress
      //var instane = new CyberSource.Tmsv2customersEmbeddedDefaultShippingAddress();
      //expect(instance).to.be.a(CyberSource.Tmsv2customersEmbeddedDefaultShippingAddress);
    });

    it('should have the property links (base name: "_links")', function() {
      // uncomment below and update the code to test the property links
      //var instane = new CyberSource.Tmsv2customersEmbeddedDefaultShippingAddress();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new CyberSource.Tmsv2customersEmbeddedDefaultShippingAddress();
      //expect(instance).to.be();
    });

    it('should have the property _default (base name: "default")', function() {
      // uncomment below and update the code to test the property _default
      //var instane = new CyberSource.Tmsv2customersEmbeddedDefaultShippingAddress();
      //expect(instance).to.be();
    });

    it('should have the property shipTo (base name: "shipTo")', function() {
      // uncomment below and update the code to test the property shipTo
      //var instane = new CyberSource.Tmsv2customersEmbeddedDefaultShippingAddress();
      //expect(instance).to.be();
    });

    it('should have the property metadata (base name: "metadata")', function() {
      // uncomment below and update the code to test the property metadata
      //var instane = new CyberSource.Tmsv2customersEmbeddedDefaultShippingAddress();
      //expect(instance).to.be();
    });

  });

}));
