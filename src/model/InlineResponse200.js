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
    define(['ApiClient', 'model/InlineResponse200Keys'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InlineResponse200Keys'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.InlineResponse200 = factory(root.CyberSource.ApiClient, root.CyberSource.InlineResponse200Keys);
  }
}(this, function(ApiClient, InlineResponse200Keys) {
  'use strict';




  /**
   * The InlineResponse200 model module.
   * @module model/InlineResponse200
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>InlineResponse200</code>.
   * Successful searchKeysResponse
   * @alias module:model/InlineResponse200
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>InlineResponse200</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse200} obj Optional instance to populate.
   * @return {module:model/InlineResponse200} The populated <code>InlineResponse200</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('submitTimeUtc')) {
        obj['submitTimeUtc'] = ApiClient.convertToType(data['submitTimeUtc'], 'String');
      }
      if (data.hasOwnProperty('totalCount')) {
        obj['totalCount'] = ApiClient.convertToType(data['totalCount'], 'Number');
      }
      if (data.hasOwnProperty('offset')) {
        obj['offset'] = ApiClient.convertToType(data['offset'], 'Number');
      }
      if (data.hasOwnProperty('limit')) {
        obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
      }
      if (data.hasOwnProperty('sort')) {
        obj['sort'] = ApiClient.convertToType(data['sort'], 'String');
      }
      if (data.hasOwnProperty('keys')) {
        obj['keys'] = ApiClient.convertToType(data['keys'], [InlineResponse200Keys]);
      }
    }
    return obj;
  }

  /**
   * Time of request in UTC. `Format: YYYY-MM-DDThh:mm:ssZ`  Example 2016-08-11T22:47:57Z equals August 11, 2016, at 22:47:57 (10:47:57 p.m.). The T separates the date and the time. The Z indicates UTC. 
   * @member {String} submitTimeUtc
   */
  exports.prototype['submitTimeUtc'] = undefined;
  /**
   * Specifies the total number of items found based on the request
   * @member {Number} totalCount
   */
  exports.prototype['totalCount'] = undefined;
  /**
   * Specifies the record offset from the records are returned part of the response
   * @member {Number} offset
   */
  exports.prototype['offset'] = undefined;
  /**
   * Specifies the maximum number of records requested part of the response
   * @member {Number} limit
   */
  exports.prototype['limit'] = undefined;
  /**
   * Specifies a comma separated list of field names based on which the result is sorted.
   * @member {String} sort
   */
  exports.prototype['sort'] = undefined;
  /**
   * @member {Array.<module:model/InlineResponse200Keys>} keys
   */
  exports.prototype['keys'] = undefined;



  return exports;
}));


