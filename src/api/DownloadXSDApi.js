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
    root.CyberSource.DownloadXSDApi = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * DownloadXSD service.
   * @module api/DownloadXSDApi
   * @version 0.0.1
   */

  /**
   * Constructs a new DownloadXSDApi. 
   * @alias module:api/DownloadXSDApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(configObject, apiClient) {
    this.apiClient = apiClient || ApiClient.instance;

	this.apiClient.setConfiguration(configObject);
	

    /**
     * Callback function to receive the result of the getXSDV2 operation.
     * @callback module:api/DownloadXSDApi~getXSDV2Callback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Download XSD for Report
     * Used to download XSDs for reports on no-auth.
     * @param {String} reportDefinitionNameVersion Name and version of XSD file to download. Some XSDs only have one version. In that case version name is not needed. Some example values are DecisionManagerDetailReport, DecisionManagerTypes
     * @param {module:api/DownloadXSDApi~getXSDV2Callback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getXSDV2 = function(reportDefinitionNameVersion, callback) {
      var postBody = null;

      // verify the required parameter 'reportDefinitionNameVersion' is set
      if (reportDefinitionNameVersion === undefined || reportDefinitionNameVersion === null) {
        throw new Error("Missing the required parameter 'reportDefinitionNameVersion' when calling getXSDV2");
      }


      var pathParams = {
        'reportDefinitionNameVersion': reportDefinitionNameVersion
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['text/xml'];
      var returnType = null;

      return this.apiClient.callApi(
        '/xsds/{reportDefinitionNameVersion}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
