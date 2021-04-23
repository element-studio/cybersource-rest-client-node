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
    instance = new CyberSource.Ptsv2paymentsConsumerAuthenticationInformation();
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

  describe('Ptsv2paymentsConsumerAuthenticationInformation', function() {
    it('should create an instance of Ptsv2paymentsConsumerAuthenticationInformation', function() {
      // uncomment below and update the code to test Ptsv2paymentsConsumerAuthenticationInformation
      //var instane = new CyberSource.Ptsv2paymentsConsumerAuthenticationInformation();
      //expect(instance).to.be.a(CyberSource.Ptsv2paymentsConsumerAuthenticationInformation);
    });

    it('should have the property cavv (base name: "cavv")', function() {
      // uncomment below and update the code to test the property cavv
      //var instane = new CyberSource.Ptsv2paymentsConsumerAuthenticationInformation();
      //expect(instance).to.be();
    });

    it('should have the property cavvAlgorithm (base name: "cavvAlgorithm")', function() {
      // uncomment below and update the code to test the property cavvAlgorithm
      //var instane = new CyberSource.Ptsv2paymentsConsumerAuthenticationInformation();
      //expect(instance).to.be();
    });

    it('should have the property eciRaw (base name: "eciRaw")', function() {
      // uncomment below and update the code to test the property eciRaw
      //var instane = new CyberSource.Ptsv2paymentsConsumerAuthenticationInformation();
      //expect(instance).to.be();
    });

    it('should have the property paresStatus (base name: "paresStatus")', function() {
      // uncomment below and update the code to test the property paresStatus
      //var instane = new CyberSource.Ptsv2paymentsConsumerAuthenticationInformation();
      //expect(instance).to.be();
    });

    it('should have the property veresEnrolled (base name: "veresEnrolled")', function() {
      // uncomment below and update the code to test the property veresEnrolled
      //var instane = new CyberSource.Ptsv2paymentsConsumerAuthenticationInformation();
      //expect(instance).to.be();
    });

    it('should have the property xid (base name: "xid")', function() {
      // uncomment below and update the code to test the property xid
      //var instane = new CyberSource.Ptsv2paymentsConsumerAuthenticationInformation();
      //expect(instance).to.be();
    });

    it('should have the property ucafCollectionIndicator (base name: "ucafCollectionIndicator")', function() {
      // uncomment below and update the code to test the property ucafCollectionIndicator
      //var instane = new CyberSource.Ptsv2paymentsConsumerAuthenticationInformation();
      //expect(instance).to.be();
    });

    it('should have the property ucafAuthenticationData (base name: "ucafAuthenticationData")', function() {
      // uncomment below and update the code to test the property ucafAuthenticationData
      //var instane = new CyberSource.Ptsv2paymentsConsumerAuthenticationInformation();
      //expect(instance).to.be();
    });

    it('should have the property strongAuthentication (base name: "strongAuthentication")', function() {
      // uncomment below and update the code to test the property strongAuthentication
      //var instane = new CyberSource.Ptsv2paymentsConsumerAuthenticationInformation();
      //expect(instance).to.be();
    });

    it('should have the property directoryServerTransactionId (base name: "directoryServerTransactionId")', function() {
      // uncomment below and update the code to test the property directoryServerTransactionId
      //var instane = new CyberSource.Ptsv2paymentsConsumerAuthenticationInformation();
      //expect(instance).to.be();
    });

    it('should have the property paSpecificationVersion (base name: "paSpecificationVersion")', function() {
      // uncomment below and update the code to test the property paSpecificationVersion
      //var instane = new CyberSource.Ptsv2paymentsConsumerAuthenticationInformation();
      //expect(instance).to.be();
    });

    it('should have the property authenticationType (base name: "authenticationType")', function() {
      // uncomment below and update the code to test the property authenticationType
      //var instane = new CyberSource.Ptsv2paymentsConsumerAuthenticationInformation();
      //expect(instance).to.be();
    });

    it('should have the property acsTransactionId (base name: "acsTransactionId")', function() {
      // uncomment below and update the code to test the property acsTransactionId
      //var instane = new CyberSource.Ptsv2paymentsConsumerAuthenticationInformation();
      //expect(instance).to.be();
    });

    it('should have the property acsWindowSize (base name: "acsWindowSize")', function() {
      // uncomment below and update the code to test the property acsWindowSize
      //var instane = new CyberSource.Ptsv2paymentsConsumerAuthenticationInformation();
      //expect(instance).to.be();
    });

    it('should have the property alternateAuthenticationData (base name: "alternateAuthenticationData")', function() {
      // uncomment below and update the code to test the property alternateAuthenticationData
      //var instane = new CyberSource.Ptsv2paymentsConsumerAuthenticationInformation();
      //expect(instance).to.be();
    });

    it('should have the property alternateAuthenticationDate (base name: "alternateAuthenticationDate")', function() {
      // uncomment below and update the code to test the property alternateAuthenticationDate
      //var instane = new CyberSource.Ptsv2paymentsConsumerAuthenticationInformation();
      //expect(instance).to.be();
    });

    it('should have the property alternateAuthenticationMethod (base name: "alternateAuthenticationMethod")', function() {
      // uncomment below and update the code to test the property alternateAuthenticationMethod
      //var instane = new CyberSource.Ptsv2paymentsConsumerAuthenticationInformation();
      //expect(instance).to.be();
    });

    it('should have the property authenticationDate (base name: "authenticationDate")', function() {
      // uncomment below and update the code to test the property authenticationDate
      //var instane = new CyberSource.Ptsv2paymentsConsumerAuthenticationInformation();
      //expect(instance).to.be();
    });

    it('should have the property authenticationTransactionId (base name: "authenticationTransactionId")', function() {
      // uncomment below and update the code to test the property authenticationTransactionId
      //var instane = new CyberSource.Ptsv2paymentsConsumerAuthenticationInformation();
      //expect(instance).to.be();
    });

    it('should have the property challengeCancelCode (base name: "challengeCancelCode")', function() {
      // uncomment below and update the code to test the property challengeCancelCode
      //var instane = new CyberSource.Ptsv2paymentsConsumerAuthenticationInformation();
      //expect(instance).to.be();
    });

    it('should have the property challengeCode (base name: "challengeCode")', function() {
      // uncomment below and update the code to test the property challengeCode
      //var instane = new CyberSource.Ptsv2paymentsConsumerAuthenticationInformation();
      //expect(instance).to.be();
    });

    it('should have the property challengeStatus (base name: "challengeStatus")', function() {
      // uncomment below and update the code to test the property challengeStatus
      //var instane = new CyberSource.Ptsv2paymentsConsumerAuthenticationInformation();
      //expect(instance).to.be();
    });

    it('should have the property customerCardAlias (base name: "customerCardAlias")', function() {
      // uncomment below and update the code to test the property customerCardAlias
      //var instane = new CyberSource.Ptsv2paymentsConsumerAuthenticationInformation();
      //expect(instance).to.be();
    });

    it('should have the property decoupledAuthenticationIndicator (base name: "decoupledAuthenticationIndicator")', function() {
      // uncomment below and update the code to test the property decoupledAuthenticationIndicator
      //var instane = new CyberSource.Ptsv2paymentsConsumerAuthenticationInformation();
      //expect(instance).to.be();
    });

    it('should have the property decoupledAuthenticationMaxTime (base name: "decoupledAuthenticationMaxTime")', function() {
      // uncomment below and update the code to test the property decoupledAuthenticationMaxTime
      //var instane = new CyberSource.Ptsv2paymentsConsumerAuthenticationInformation();
      //expect(instance).to.be();
    });

    it('should have the property defaultCard (base name: "defaultCard")', function() {
      // uncomment below and update the code to test the property defaultCard
      //var instane = new CyberSource.Ptsv2paymentsConsumerAuthenticationInformation();
      //expect(instance).to.be();
    });

    it('should have the property deviceChannel (base name: "deviceChannel")', function() {
      // uncomment below and update the code to test the property deviceChannel
      //var instane = new CyberSource.Ptsv2paymentsConsumerAuthenticationInformation();
      //expect(instance).to.be();
    });

    it('should have the property installmentTotalCount (base name: "installmentTotalCount")', function() {
      // uncomment below and update the code to test the property installmentTotalCount
      //var instane = new CyberSource.Ptsv2paymentsConsumerAuthenticationInformation();
      //expect(instance).to.be();
    });

    it('should have the property merchantFraudRate (base name: "merchantFraudRate")', function() {
      // uncomment below and update the code to test the property merchantFraudRate
      //var instane = new CyberSource.Ptsv2paymentsConsumerAuthenticationInformation();
      //expect(instance).to.be();
    });

    it('should have the property marketingOptIn (base name: "marketingOptIn")', function() {
      // uncomment below and update the code to test the property marketingOptIn
      //var instane = new CyberSource.Ptsv2paymentsConsumerAuthenticationInformation();
      //expect(instance).to.be();
    });

    it('should have the property marketingSource (base name: "marketingSource")', function() {
      // uncomment below and update the code to test the property marketingSource
      //var instane = new CyberSource.Ptsv2paymentsConsumerAuthenticationInformation();
      //expect(instance).to.be();
    });

    it('should have the property mcc (base name: "mcc")', function() {
      // uncomment below and update the code to test the property mcc
      //var instane = new CyberSource.Ptsv2paymentsConsumerAuthenticationInformation();
      //expect(instance).to.be();
    });

    it('should have the property merchantScore (base name: "merchantScore")', function() {
      // uncomment below and update the code to test the property merchantScore
      //var instane = new CyberSource.Ptsv2paymentsConsumerAuthenticationInformation();
      //expect(instance).to.be();
    });

    it('should have the property messageCategory (base name: "messageCategory")', function() {
      // uncomment below and update the code to test the property messageCategory
      //var instane = new CyberSource.Ptsv2paymentsConsumerAuthenticationInformation();
      //expect(instance).to.be();
    });

    it('should have the property networkScore (base name: "networkScore")', function() {
      // uncomment below and update the code to test the property networkScore
      //var instane = new CyberSource.Ptsv2paymentsConsumerAuthenticationInformation();
      //expect(instance).to.be();
    });

    it('should have the property npaCode (base name: "npaCode")', function() {
      // uncomment below and update the code to test the property npaCode
      //var instane = new CyberSource.Ptsv2paymentsConsumerAuthenticationInformation();
      //expect(instance).to.be();
    });

    it('should have the property overridePaymentMethod (base name: "overridePaymentMethod")', function() {
      // uncomment below and update the code to test the property overridePaymentMethod
      //var instane = new CyberSource.Ptsv2paymentsConsumerAuthenticationInformation();
      //expect(instance).to.be();
    });

    it('should have the property overrideCountryCode (base name: "overrideCountryCode")', function() {
      // uncomment below and update the code to test the property overrideCountryCode
      //var instane = new CyberSource.Ptsv2paymentsConsumerAuthenticationInformation();
      //expect(instance).to.be();
    });

    it('should have the property priorAuthenticationData (base name: "priorAuthenticationData")', function() {
      // uncomment below and update the code to test the property priorAuthenticationData
      //var instane = new CyberSource.Ptsv2paymentsConsumerAuthenticationInformation();
      //expect(instance).to.be();
    });

    it('should have the property priorAuthenticationMethod (base name: "priorAuthenticationMethod")', function() {
      // uncomment below and update the code to test the property priorAuthenticationMethod
      //var instane = new CyberSource.Ptsv2paymentsConsumerAuthenticationInformation();
      //expect(instance).to.be();
    });

    it('should have the property priorAuthenticationReferenceId (base name: "priorAuthenticationReferenceId")', function() {
      // uncomment below and update the code to test the property priorAuthenticationReferenceId
      //var instane = new CyberSource.Ptsv2paymentsConsumerAuthenticationInformation();
      //expect(instance).to.be();
    });

    it('should have the property priorAuthenticationTime (base name: "priorAuthenticationTime")', function() {
      // uncomment below and update the code to test the property priorAuthenticationTime
      //var instane = new CyberSource.Ptsv2paymentsConsumerAuthenticationInformation();
      //expect(instance).to.be();
    });

    it('should have the property productCode (base name: "productCode")', function() {
      // uncomment below and update the code to test the property productCode
      //var instane = new CyberSource.Ptsv2paymentsConsumerAuthenticationInformation();
      //expect(instance).to.be();
    });

    it('should have the property requestorId (base name: "requestorId")', function() {
      // uncomment below and update the code to test the property requestorId
      //var instane = new CyberSource.Ptsv2paymentsConsumerAuthenticationInformation();
      //expect(instance).to.be();
    });

    it('should have the property requestorInitiatedAuthenticationIndicator (base name: "requestorInitiatedAuthenticationIndicator")', function() {
      // uncomment below and update the code to test the property requestorInitiatedAuthenticationIndicator
      //var instane = new CyberSource.Ptsv2paymentsConsumerAuthenticationInformation();
      //expect(instance).to.be();
    });

    it('should have the property requestorName (base name: "requestorName")', function() {
      // uncomment below and update the code to test the property requestorName
      //var instane = new CyberSource.Ptsv2paymentsConsumerAuthenticationInformation();
      //expect(instance).to.be();
    });

    it('should have the property referenceId (base name: "referenceId")', function() {
      // uncomment below and update the code to test the property referenceId
      //var instane = new CyberSource.Ptsv2paymentsConsumerAuthenticationInformation();
      //expect(instance).to.be();
    });

    it('should have the property sdkMaxTimeout (base name: "sdkMaxTimeout")', function() {
      // uncomment below and update the code to test the property sdkMaxTimeout
      //var instane = new CyberSource.Ptsv2paymentsConsumerAuthenticationInformation();
      //expect(instance).to.be();
    });

    it('should have the property secureCorporatePaymentIndicator (base name: "secureCorporatePaymentIndicator")', function() {
      // uncomment below and update the code to test the property secureCorporatePaymentIndicator
      //var instane = new CyberSource.Ptsv2paymentsConsumerAuthenticationInformation();
      //expect(instance).to.be();
    });

    it('should have the property transactionMode (base name: "transactionMode")', function() {
      // uncomment below and update the code to test the property transactionMode
      //var instane = new CyberSource.Ptsv2paymentsConsumerAuthenticationInformation();
      //expect(instance).to.be();
    });

    it('should have the property whiteListStatus (base name: "whiteListStatus")', function() {
      // uncomment below and update the code to test the property whiteListStatus
      //var instane = new CyberSource.Ptsv2paymentsConsumerAuthenticationInformation();
      //expect(instance).to.be();
    });

    it('should have the property effectiveAuthenticationType (base name: "effectiveAuthenticationType")', function() {
      // uncomment below and update the code to test the property effectiveAuthenticationType
      //var instane = new CyberSource.Ptsv2paymentsConsumerAuthenticationInformation();
      //expect(instance).to.be();
    });

    it('should have the property signedParesStatusReason (base name: "signedParesStatusReason")', function() {
      // uncomment below and update the code to test the property signedParesStatusReason
      //var instane = new CyberSource.Ptsv2paymentsConsumerAuthenticationInformation();
      //expect(instance).to.be();
    });

    it('should have the property signedPares (base name: "signedPares")', function() {
      // uncomment below and update the code to test the property signedPares
      //var instane = new CyberSource.Ptsv2paymentsConsumerAuthenticationInformation();
      //expect(instance).to.be();
    });

  });

}));
