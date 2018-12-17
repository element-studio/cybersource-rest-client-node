/**
 * CyberSource Flex API
 * Simple PAN tokenization service
 *
 * OpenAPI spec version: 0.0.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ReportingV3NotificationofChangesGet400Response'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ReportingV3NotificationofChangesGet400Response'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.PurchaseAndRefundDetailsApi = factory(root.CyberSource.ApiClient, root.CyberSource.ReportingV3NotificationofChangesGet400Response);
  }
}(this, function(ApiClient, ReportingV3NotificationofChangesGet400Response) {
  'use strict';

  /**
   * PurchaseAndRefundDetails service.
   * @module api/PurchaseAndRefundDetailsApi
   * @version 0.0.1
   */

  /**
   * Constructs a new PurchaseAndRefundDetailsApi. 
   * @alias module:api/PurchaseAndRefundDetailsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(configObject, apiClient) {
    this.apiClient = apiClient || ApiClient.instance;

    this.apiClient.setConfiguration(configObject);


    /**
     * Callback function to receive the result of the getPurchaseAndRefundDetails operation.
     * @callback module:api/PurchaseAndRefundDetailsApi~getPurchaseAndRefundDetailsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Purchase and Refund details
     * Purchase And Refund Details Description
     * @param {Date} startTime Valid report Start Time in **ISO 8601 format** Please refer the following link to know more about ISO 8601 format. - https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14   **Example date format:**   - yyyy-MM-dd&#39;T&#39;HH:mm:ssXXX 
     * @param {Date} endTime Valid report End Time in **ISO 8601 format** Please refer the following link to know more about ISO 8601 format. - https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14   **Example date format:**   - yyyy-MM-dd&#39;T&#39;HH:mm:ssXXX 
     * @param {Object} opts Optional parameters
     * @param {String} opts.organizationId Valid Cybersource Organization Id
     * @param {module:model/String} opts.paymentSubtype Payment Subtypes.   - **ALL**:  All Payment Subtypes   - **VI** :  Visa   - **MC** :  Master Card   - **AX** :  American Express   - **DI** :  Discover   - **DP** :  Pinless Debit  (default to ALL)
     * @param {module:model/String} opts.viewBy View results by Request Date or Submission Date.   - **requestDate** : Request Date   - **submissionDate**: Submission Date  (default to requestDate)
     * @param {String} opts.groupName Valid CyberSource Group Name.User can define groups using CBAPI and Group Management Module in EBC2. Groups are collection of organizationIds
     * @param {Number} opts.offset Offset of the Purchase and Refund Results.
     * @param {Number} opts.limit Results count per page. Range(1-2000) (default to 2000)
     * @param {module:api/PurchaseAndRefundDetailsApi~getPurchaseAndRefundDetailsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getPurchaseAndRefundDetails = function(startTime, endTime, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'startTime' is set
      if (startTime === undefined || startTime === null) {
        throw new Error("Missing the required parameter 'startTime' when calling getPurchaseAndRefundDetails");
      }

      // verify the required parameter 'endTime' is set
      if (endTime === undefined || endTime === null) {
        throw new Error("Missing the required parameter 'endTime' when calling getPurchaseAndRefundDetails");
      }


      var pathParams = {
      };
      var queryParams = {
        'startTime': startTime,
        'endTime': endTime,
        'organizationId': opts['organizationId'],
        'paymentSubtype': opts['paymentSubtype'],
        'viewBy': opts['viewBy'],
        'groupName': opts['groupName'],
        'offset': opts['offset'],
        'limit': opts['limit']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/hal+json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/reporting/v3/purchase-refund-details', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));