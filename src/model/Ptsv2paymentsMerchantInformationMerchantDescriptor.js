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
    root.CyberSource.Ptsv2paymentsMerchantInformationMerchantDescriptor = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Ptsv2paymentsMerchantInformationMerchantDescriptor model module.
   * @module model/Ptsv2paymentsMerchantInformationMerchantDescriptor
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Ptsv2paymentsMerchantInformationMerchantDescriptor</code>.
   * @alias module:model/Ptsv2paymentsMerchantInformationMerchantDescriptor
   * @class
   */
  var exports = function() {
    var _this = this;











  };

  /**
   * Constructs a <code>Ptsv2paymentsMerchantInformationMerchantDescriptor</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Ptsv2paymentsMerchantInformationMerchantDescriptor} obj Optional instance to populate.
   * @return {module:model/Ptsv2paymentsMerchantInformationMerchantDescriptor} The populated <code>Ptsv2paymentsMerchantInformationMerchantDescriptor</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('alternateName')) {
        obj['alternateName'] = ApiClient.convertToType(data['alternateName'], 'String');
      }
      if (data.hasOwnProperty('contact')) {
        obj['contact'] = ApiClient.convertToType(data['contact'], 'String');
      }
      if (data.hasOwnProperty('address1')) {
        obj['address1'] = ApiClient.convertToType(data['address1'], 'String');
      }
      if (data.hasOwnProperty('locality')) {
        obj['locality'] = ApiClient.convertToType(data['locality'], 'String');
      }
      if (data.hasOwnProperty('country')) {
        obj['country'] = ApiClient.convertToType(data['country'], 'String');
      }
      if (data.hasOwnProperty('postalCode')) {
        obj['postalCode'] = ApiClient.convertToType(data['postalCode'], 'String');
      }
      if (data.hasOwnProperty('administrativeArea')) {
        obj['administrativeArea'] = ApiClient.convertToType(data['administrativeArea'], 'String');
      }
      if (data.hasOwnProperty('phone')) {
        obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
      }
      if (data.hasOwnProperty('url')) {
        obj['url'] = ApiClient.convertToType(data['url'], 'String');
      }
    }
    return obj;
  }

  /**
   * Merchant's name.  For more details about the merchant-related fields, see the `merchant_descriptor` field description in [Credit Card Services Using the SCMP API.](http://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html)  **Note** For Paymentech processor using Cybersource Payouts, the maximum data length is 22. 
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * An alternate name for the merchant.  For the descriptions, used-by information, data types, and lengths for these fields, see the `merchant_descriptor_alternate` field description in [Credit Card Services Using the SCMP API.](http://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html)--> 
   * @member {String} alternateName
   */
  exports.prototype['alternateName'] = undefined;
  /**
   * For the descriptions, used-by information, data types, and lengths for these fields, see `merchant_descriptor_contact` field description in [Credit Card Services Using the SCMP API.](http://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html)--> Contact information for the merchant.  **Note** These are the maximum data lengths for the following payment processors: - FDCCompass (13) - Paymentech (13) 
   * @member {String} contact
   */
  exports.prototype['contact'] = undefined;
  /**
   * First line of merchant's address. For the descriptions, used-by information, data types, and lengths for these fields, see `merchant_descriptor_street` field description in [Credit Card Services Using the SCMP API.](http://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html) 
   * @member {String} address1
   */
  exports.prototype['address1'] = undefined;
  /**
   * Merchant's City.  For the descriptions, used-by information, data types, and lengths for these fields, see the `merchant_descriptor_city` field description in [Credit Card Services Using the SCMP API.](http://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html) 
   * @member {String} locality
   */
  exports.prototype['locality'] = undefined;
  /**
   * Merchant's country.  For the descriptions, used-by information, data types, and lengths for these fields, see the `merchant_descriptor_country` field description in [Credit Card Services Using the SCMP API.](http://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html) 
   * @member {String} country
   */
  exports.prototype['country'] = undefined;
  /**
   * Merchant's postal code.  For the descriptions, used-by information, data types, and lengths for these fields, see the `merchant_descriptor_postal_code` field description in [Credit Card Services Using the SCMP API.](http://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html) 
   * @member {String} postalCode
   */
  exports.prototype['postalCode'] = undefined;
  /**
   * The state where the merchant is located.  For the descriptions, used-by information, data types, and lengths for these fields, see the `merchant_descriptor_state` field description in [Credit Card Services Using the SCMP API.](http://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html)  Merchant State. For the descriptions, used-by information, data types, and lengths for these fields, see Merchant Descriptors in [Credit Card Services Using the SCMP API.](http://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html) 
   * @member {String} administrativeArea
   */
  exports.prototype['administrativeArea'] = undefined;
  /**
   * Merchnat phone as contact information for CNP transactions 
   * @member {String} phone
   */
  exports.prototype['phone'] = undefined;
  /**
   * Address of company's website provided by merchant 
   * @member {String} url
   */
  exports.prototype['url'] = undefined;



  return exports;
}));


