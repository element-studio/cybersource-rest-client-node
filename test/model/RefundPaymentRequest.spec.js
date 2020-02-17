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
    instance = new CyberSource.RefundPaymentRequest();
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

  describe('RefundPaymentRequest', function() {
    it('should create an instance of RefundPaymentRequest', function() {
      // uncomment below and update the code to test RefundPaymentRequest
      //var instane = new CyberSource.RefundPaymentRequest();
      //expect(instance).to.be.a(CyberSource.RefundPaymentRequest);
    });

    it('should have the property clientReferenceInformation (base name: "clientReferenceInformation")', function() {
      // uncomment below and update the code to test the property clientReferenceInformation
      //var instane = new CyberSource.RefundPaymentRequest();
      //expect(instance).to.be();
    });

    it('should have the property processingInformation (base name: "processingInformation")', function() {
      // uncomment below and update the code to test the property processingInformation
      //var instane = new CyberSource.RefundPaymentRequest();
      //expect(instance).to.be();
    });

    it('should have the property paymentInformation (base name: "paymentInformation")', function() {
      // uncomment below and update the code to test the property paymentInformation
      //var instane = new CyberSource.RefundPaymentRequest();
      //expect(instance).to.be();
    });

    it('should have the property orderInformation (base name: "orderInformation")', function() {
      // uncomment below and update the code to test the property orderInformation
      //var instane = new CyberSource.RefundPaymentRequest();
      //expect(instance).to.be();
    });

    it('should have the property buyerInformation (base name: "buyerInformation")', function() {
      // uncomment below and update the code to test the property buyerInformation
      //var instane = new CyberSource.RefundPaymentRequest();
      //expect(instance).to.be();
    });

    it('should have the property deviceInformation (base name: "deviceInformation")', function() {
      // uncomment below and update the code to test the property deviceInformation
      //var instane = new CyberSource.RefundPaymentRequest();
      //expect(instance).to.be();
    });

    it('should have the property merchantInformation (base name: "merchantInformation")', function() {
      // uncomment below and update the code to test the property merchantInformation
      //var instane = new CyberSource.RefundPaymentRequest();
      //expect(instance).to.be();
    });

    it('should have the property aggregatorInformation (base name: "aggregatorInformation")', function() {
      // uncomment below and update the code to test the property aggregatorInformation
      //var instane = new CyberSource.RefundPaymentRequest();
      //expect(instance).to.be();
    });

    it('should have the property pointOfSaleInformation (base name: "pointOfSaleInformation")', function() {
      // uncomment below and update the code to test the property pointOfSaleInformation
      //var instane = new CyberSource.RefundPaymentRequest();
      //expect(instance).to.be();
    });

    it('should have the property merchantDefinedInformation (base name: "merchantDefinedInformation")', function() {
      // uncomment below and update the code to test the property merchantDefinedInformation
      //var instane = new CyberSource.RefundPaymentRequest();
      //expect(instance).to.be();
    });

    it('should have the property travelInformation (base name: "travelInformation")', function() {
      // uncomment below and update the code to test the property travelInformation
      //var instane = new CyberSource.RefundPaymentRequest();
      //expect(instance).to.be();
    });

    it('should have the property promotionInformation (base name: "promotionInformation")', function() {
      // uncomment below and update the code to test the property promotionInformation
      //var instane = new CyberSource.RefundPaymentRequest();
      //expect(instance).to.be();
    });

  });

}));
