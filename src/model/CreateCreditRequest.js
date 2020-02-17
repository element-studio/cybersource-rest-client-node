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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Ptsv2creditsInstallmentInformation', 'model/Ptsv2creditsProcessingInformation', 'model/Ptsv2paymentsClientReferenceInformation', 'model/Ptsv2paymentsDeviceInformation', 'model/Ptsv2paymentsMerchantDefinedInformation', 'model/Ptsv2paymentsPointOfSaleInformation', 'model/Ptsv2paymentsPromotionInformation', 'model/Ptsv2paymentsidcapturesAggregatorInformation', 'model/Ptsv2paymentsidcapturesBuyerInformation', 'model/Ptsv2paymentsidcapturesTravelInformation', 'model/Ptsv2paymentsidrefundsMerchantInformation', 'model/Ptsv2paymentsidrefundsOrderInformation', 'model/Ptsv2paymentsidrefundsPaymentInformation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Ptsv2creditsInstallmentInformation'), require('./Ptsv2creditsProcessingInformation'), require('./Ptsv2paymentsClientReferenceInformation'), require('./Ptsv2paymentsDeviceInformation'), require('./Ptsv2paymentsMerchantDefinedInformation'), require('./Ptsv2paymentsPointOfSaleInformation'), require('./Ptsv2paymentsPromotionInformation'), require('./Ptsv2paymentsidcapturesAggregatorInformation'), require('./Ptsv2paymentsidcapturesBuyerInformation'), require('./Ptsv2paymentsidcapturesTravelInformation'), require('./Ptsv2paymentsidrefundsMerchantInformation'), require('./Ptsv2paymentsidrefundsOrderInformation'), require('./Ptsv2paymentsidrefundsPaymentInformation'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.CreateCreditRequest = factory(root.CyberSource.ApiClient, root.CyberSource.Ptsv2creditsInstallmentInformation, root.CyberSource.Ptsv2creditsProcessingInformation, root.CyberSource.Ptsv2paymentsClientReferenceInformation, root.CyberSource.Ptsv2paymentsDeviceInformation, root.CyberSource.Ptsv2paymentsMerchantDefinedInformation, root.CyberSource.Ptsv2paymentsPointOfSaleInformation, root.CyberSource.Ptsv2paymentsPromotionInformation, root.CyberSource.Ptsv2paymentsidcapturesAggregatorInformation, root.CyberSource.Ptsv2paymentsidcapturesBuyerInformation, root.CyberSource.Ptsv2paymentsidcapturesTravelInformation, root.CyberSource.Ptsv2paymentsidrefundsMerchantInformation, root.CyberSource.Ptsv2paymentsidrefundsOrderInformation, root.CyberSource.Ptsv2paymentsidrefundsPaymentInformation);
  }
}(this, function(ApiClient, Ptsv2creditsInstallmentInformation, Ptsv2creditsProcessingInformation, Ptsv2paymentsClientReferenceInformation, Ptsv2paymentsDeviceInformation, Ptsv2paymentsMerchantDefinedInformation, Ptsv2paymentsPointOfSaleInformation, Ptsv2paymentsPromotionInformation, Ptsv2paymentsidcapturesAggregatorInformation, Ptsv2paymentsidcapturesBuyerInformation, Ptsv2paymentsidcapturesTravelInformation, Ptsv2paymentsidrefundsMerchantInformation, Ptsv2paymentsidrefundsOrderInformation, Ptsv2paymentsidrefundsPaymentInformation) {
  'use strict';




  /**
   * The CreateCreditRequest model module.
   * @module model/CreateCreditRequest
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>CreateCreditRequest</code>.
   * @alias module:model/CreateCreditRequest
   * @class
   */
  var exports = function() {
    var _this = this;














  };

  /**
   * Constructs a <code>CreateCreditRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateCreditRequest} obj Optional instance to populate.
   * @return {module:model/CreateCreditRequest} The populated <code>CreateCreditRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('clientReferenceInformation')) {
        obj['clientReferenceInformation'] = Ptsv2paymentsClientReferenceInformation.constructFromObject(data['clientReferenceInformation']);
      }
      if (data.hasOwnProperty('processingInformation')) {
        obj['processingInformation'] = Ptsv2creditsProcessingInformation.constructFromObject(data['processingInformation']);
      }
      if (data.hasOwnProperty('paymentInformation')) {
        obj['paymentInformation'] = Ptsv2paymentsidrefundsPaymentInformation.constructFromObject(data['paymentInformation']);
      }
      if (data.hasOwnProperty('orderInformation')) {
        obj['orderInformation'] = Ptsv2paymentsidrefundsOrderInformation.constructFromObject(data['orderInformation']);
      }
      if (data.hasOwnProperty('buyerInformation')) {
        obj['buyerInformation'] = Ptsv2paymentsidcapturesBuyerInformation.constructFromObject(data['buyerInformation']);
      }
      if (data.hasOwnProperty('deviceInformation')) {
        obj['deviceInformation'] = Ptsv2paymentsDeviceInformation.constructFromObject(data['deviceInformation']);
      }
      if (data.hasOwnProperty('merchantInformation')) {
        obj['merchantInformation'] = Ptsv2paymentsidrefundsMerchantInformation.constructFromObject(data['merchantInformation']);
      }
      if (data.hasOwnProperty('aggregatorInformation')) {
        obj['aggregatorInformation'] = Ptsv2paymentsidcapturesAggregatorInformation.constructFromObject(data['aggregatorInformation']);
      }
      if (data.hasOwnProperty('pointOfSaleInformation')) {
        obj['pointOfSaleInformation'] = Ptsv2paymentsPointOfSaleInformation.constructFromObject(data['pointOfSaleInformation']);
      }
      if (data.hasOwnProperty('merchantDefinedInformation')) {
        obj['merchantDefinedInformation'] = ApiClient.convertToType(data['merchantDefinedInformation'], [Ptsv2paymentsMerchantDefinedInformation]);
      }
      if (data.hasOwnProperty('installmentInformation')) {
        obj['installmentInformation'] = Ptsv2creditsInstallmentInformation.constructFromObject(data['installmentInformation']);
      }
      if (data.hasOwnProperty('travelInformation')) {
        obj['travelInformation'] = Ptsv2paymentsidcapturesTravelInformation.constructFromObject(data['travelInformation']);
      }
      if (data.hasOwnProperty('promotionInformation')) {
        obj['promotionInformation'] = Ptsv2paymentsPromotionInformation.constructFromObject(data['promotionInformation']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Ptsv2paymentsClientReferenceInformation} clientReferenceInformation
   */
  exports.prototype['clientReferenceInformation'] = undefined;
  /**
   * @member {module:model/Ptsv2creditsProcessingInformation} processingInformation
   */
  exports.prototype['processingInformation'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsidrefundsPaymentInformation} paymentInformation
   */
  exports.prototype['paymentInformation'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsidrefundsOrderInformation} orderInformation
   */
  exports.prototype['orderInformation'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsidcapturesBuyerInformation} buyerInformation
   */
  exports.prototype['buyerInformation'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsDeviceInformation} deviceInformation
   */
  exports.prototype['deviceInformation'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsidrefundsMerchantInformation} merchantInformation
   */
  exports.prototype['merchantInformation'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsidcapturesAggregatorInformation} aggregatorInformation
   */
  exports.prototype['aggregatorInformation'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsPointOfSaleInformation} pointOfSaleInformation
   */
  exports.prototype['pointOfSaleInformation'] = undefined;
  /**
   * The object containing the custom data that the merchant defines. 
   * @member {Array.<module:model/Ptsv2paymentsMerchantDefinedInformation>} merchantDefinedInformation
   */
  exports.prototype['merchantDefinedInformation'] = undefined;
  /**
   * @member {module:model/Ptsv2creditsInstallmentInformation} installmentInformation
   */
  exports.prototype['installmentInformation'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsidcapturesTravelInformation} travelInformation
   */
  exports.prototype['travelInformation'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsPromotionInformation} promotionInformation
   */
  exports.prototype['promotionInformation'] = undefined;



  return exports;
}));


