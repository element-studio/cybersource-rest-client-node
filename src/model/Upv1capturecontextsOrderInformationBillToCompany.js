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
    root.CyberSource.Upv1capturecontextsOrderInformationBillToCompany = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Upv1capturecontextsOrderInformationBillToCompany model module.
   * @module model/Upv1capturecontextsOrderInformationBillToCompany
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Upv1capturecontextsOrderInformationBillToCompany</code>.
   * @alias module:model/Upv1capturecontextsOrderInformationBillToCompany
   * @class
   */
  var exports = function() {
    var _this = this;












  };

  /**
   * Constructs a <code>Upv1capturecontextsOrderInformationBillToCompany</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Upv1capturecontextsOrderInformationBillToCompany} obj Optional instance to populate.
   * @return {module:model/Upv1capturecontextsOrderInformationBillToCompany} The populated <code>Upv1capturecontextsOrderInformationBillToCompany</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('address1')) {
        obj['address1'] = ApiClient.convertToType(data['address1'], 'String');
      }
      if (data.hasOwnProperty('address2')) {
        obj['address2'] = ApiClient.convertToType(data['address2'], 'String');
      }
      if (data.hasOwnProperty('address3')) {
        obj['address3'] = ApiClient.convertToType(data['address3'], 'String');
      }
      if (data.hasOwnProperty('address4')) {
        obj['address4'] = ApiClient.convertToType(data['address4'], 'String');
      }
      if (data.hasOwnProperty('administrativeArea')) {
        obj['administrativeArea'] = ApiClient.convertToType(data['administrativeArea'], 'String');
      }
      if (data.hasOwnProperty('buildingNumber')) {
        obj['buildingNumber'] = ApiClient.convertToType(data['buildingNumber'], 'String');
      }
      if (data.hasOwnProperty('country')) {
        obj['country'] = ApiClient.convertToType(data['country'], 'String');
      }
      if (data.hasOwnProperty('district')) {
        obj['district'] = ApiClient.convertToType(data['district'], 'String');
      }
      if (data.hasOwnProperty('locality')) {
        obj['locality'] = ApiClient.convertToType(data['locality'], 'String');
      }
      if (data.hasOwnProperty('postalCode')) {
        obj['postalCode'] = ApiClient.convertToType(data['postalCode'], 'String');
      }
    }
    return obj;
  }

  /**
   * Name of the customer’s company.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Payment card billing street address as it appears on the credit card issuer’s records. 
   * @member {String} address1
   */
  exports.prototype['address1'] = undefined;
  /**
   * Used for additional address information. For example: _Attention: Accounts Payable_ Optional field. 
   * @member {String} address2
   */
  exports.prototype['address2'] = undefined;
  /**
   * Additional address information (third line of the billing address)
   * @member {String} address3
   */
  exports.prototype['address3'] = undefined;
  /**
   * Additional address information (fourth line of the billing address) 
   * @member {String} address4
   */
  exports.prototype['address4'] = undefined;
  /**
   * State or province of the billing address. Use the [State, Province, and Territory Codes for the United States and Canada](https://developer.cybersource.com/library/documentation/sbc/quickref/states_and_provinces.pdf). 
   * @member {String} administrativeArea
   */
  exports.prototype['administrativeArea'] = undefined;
  /**
   * Building number in the street address. 
   * @member {String} buildingNumber
   */
  exports.prototype['buildingNumber'] = undefined;
  /**
   * Payment card billing country. Use the two-character [ISO Standard Country Codes](http://apps.cybersource.com/library/documentation/sbc/quickref/countries_alpha_list.pdf). 
   * @member {String} country
   */
  exports.prototype['country'] = undefined;
  /**
   * Customer’s neighborhood, community, or region (a barrio in Brazil) within the city or municipality 
   * @member {String} district
   */
  exports.prototype['district'] = undefined;
  /**
   * Payment card billing city. 
   * @member {String} locality
   */
  exports.prototype['locality'] = undefined;
  /**
   * Postal code for the billing address. The postal code must consist of 5 to 9 digits. 
   * @member {String} postalCode
   */
  exports.prototype['postalCode'] = undefined;



  return exports;
}));

