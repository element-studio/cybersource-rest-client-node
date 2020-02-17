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
    instance = new CyberSource.Ptsv2paymentsPaymentInformationCard();
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

  describe('Ptsv2paymentsPaymentInformationCard', function() {
    it('should create an instance of Ptsv2paymentsPaymentInformationCard', function() {
      // uncomment below and update the code to test Ptsv2paymentsPaymentInformationCard
      //var instane = new CyberSource.Ptsv2paymentsPaymentInformationCard();
      //expect(instance).to.be.a(CyberSource.Ptsv2paymentsPaymentInformationCard);
    });

    it('should have the property _number (base name: "number")', function() {
      // uncomment below and update the code to test the property _number
      //var instane = new CyberSource.Ptsv2paymentsPaymentInformationCard();
      //expect(instance).to.be();
    });

    it('should have the property expirationMonth (base name: "expirationMonth")', function() {
      // uncomment below and update the code to test the property expirationMonth
      //var instane = new CyberSource.Ptsv2paymentsPaymentInformationCard();
      //expect(instance).to.be();
    });

    it('should have the property expirationYear (base name: "expirationYear")', function() {
      // uncomment below and update the code to test the property expirationYear
      //var instane = new CyberSource.Ptsv2paymentsPaymentInformationCard();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new CyberSource.Ptsv2paymentsPaymentInformationCard();
      //expect(instance).to.be();
    });

    it('should have the property useAs (base name: "useAs")', function() {
      // uncomment below and update the code to test the property useAs
      //var instane = new CyberSource.Ptsv2paymentsPaymentInformationCard();
      //expect(instance).to.be();
    });

    it('should have the property sourceAccountType (base name: "sourceAccountType")', function() {
      // uncomment below and update the code to test the property sourceAccountType
      //var instane = new CyberSource.Ptsv2paymentsPaymentInformationCard();
      //expect(instance).to.be();
    });

    it('should have the property sourceAccountTypeDetails (base name: "sourceAccountTypeDetails")', function() {
      // uncomment below and update the code to test the property sourceAccountTypeDetails
      //var instane = new CyberSource.Ptsv2paymentsPaymentInformationCard();
      //expect(instance).to.be();
    });

    it('should have the property securityCode (base name: "securityCode")', function() {
      // uncomment below and update the code to test the property securityCode
      //var instane = new CyberSource.Ptsv2paymentsPaymentInformationCard();
      //expect(instance).to.be();
    });

    it('should have the property securityCodeIndicator (base name: "securityCodeIndicator")', function() {
      // uncomment below and update the code to test the property securityCodeIndicator
      //var instane = new CyberSource.Ptsv2paymentsPaymentInformationCard();
      //expect(instance).to.be();
    });

    it('should have the property accountEncoderId (base name: "accountEncoderId")', function() {
      // uncomment below and update the code to test the property accountEncoderId
      //var instane = new CyberSource.Ptsv2paymentsPaymentInformationCard();
      //expect(instance).to.be();
    });

    it('should have the property issueNumber (base name: "issueNumber")', function() {
      // uncomment below and update the code to test the property issueNumber
      //var instane = new CyberSource.Ptsv2paymentsPaymentInformationCard();
      //expect(instance).to.be();
    });

    it('should have the property startMonth (base name: "startMonth")', function() {
      // uncomment below and update the code to test the property startMonth
      //var instane = new CyberSource.Ptsv2paymentsPaymentInformationCard();
      //expect(instance).to.be();
    });

    it('should have the property startYear (base name: "startYear")', function() {
      // uncomment below and update the code to test the property startYear
      //var instane = new CyberSource.Ptsv2paymentsPaymentInformationCard();
      //expect(instance).to.be();
    });

    it('should have the property productName (base name: "productName")', function() {
      // uncomment below and update the code to test the property productName
      //var instane = new CyberSource.Ptsv2paymentsPaymentInformationCard();
      //expect(instance).to.be();
    });

  });

}));
