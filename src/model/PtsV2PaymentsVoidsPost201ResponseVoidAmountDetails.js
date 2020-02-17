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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.PtsV2PaymentsVoidsPost201ResponseVoidAmountDetails = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PtsV2PaymentsVoidsPost201ResponseVoidAmountDetails model module.
   * @module model/PtsV2PaymentsVoidsPost201ResponseVoidAmountDetails
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>PtsV2PaymentsVoidsPost201ResponseVoidAmountDetails</code>.
   * @alias module:model/PtsV2PaymentsVoidsPost201ResponseVoidAmountDetails
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>PtsV2PaymentsVoidsPost201ResponseVoidAmountDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PtsV2PaymentsVoidsPost201ResponseVoidAmountDetails} obj Optional instance to populate.
   * @return {module:model/PtsV2PaymentsVoidsPost201ResponseVoidAmountDetails} The populated <code>PtsV2PaymentsVoidsPost201ResponseVoidAmountDetails</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('voidAmount')) {
        obj['voidAmount'] = ApiClient.convertToType(data['voidAmount'], 'String');
      }
      if (data.hasOwnProperty('originalTransactionAmount')) {
        obj['originalTransactionAmount'] = ApiClient.convertToType(data['originalTransactionAmount'], 'String');
      }
      if (data.hasOwnProperty('currency')) {
        obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
      }
    }
    return obj;
  }

  /**
   * Total amount of the void.
   * @member {String} voidAmount
   */
  exports.prototype['voidAmount'] = undefined;
  /**
   * Amount of the original transaction.
   * @member {String} originalTransactionAmount
   */
  exports.prototype['originalTransactionAmount'] = undefined;
  /**
   * Currency used for the order. Use the three-character I[ISO Standard Currency Codes.](http://apps.cybersource.com/library/documentation/sbc/quickref/currencies.pdf)  For details about currency as used in partial authorizations, see \"Features for Debit Cards and Prepaid Cards\" in the [Credit Card Services Using the SCMP API Guide](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/)  For an authorization reversal (`reversalInformation`) or a capture (`processingOptions.capture` is set to `true`), you must use the same currency that you used in your payment authorization request.  #### DCC for First Data Your local currency. For details, see the `currency` field description in [Dynamic Currency Conversion For First Data Using the SCMP API](http://apps.cybersource.com/library/documentation/dev_guides/DCC_FirstData_SCMP/DCC_FirstData_SCMP_API.pdf). 
   * @member {String} currency
   */
  exports.prototype['currency'] = undefined;



  return exports;
}));


