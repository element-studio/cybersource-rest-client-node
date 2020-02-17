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
    define(['ApiClient', 'model/Ptsv2paymentsMerchantInformationMerchantDescriptor', 'model/Ptsv2paymentsMerchantInformationServiceFeeDescriptor'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Ptsv2paymentsMerchantInformationMerchantDescriptor'), require('./Ptsv2paymentsMerchantInformationServiceFeeDescriptor'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.Ptsv2paymentsMerchantInformation = factory(root.CyberSource.ApiClient, root.CyberSource.Ptsv2paymentsMerchantInformationMerchantDescriptor, root.CyberSource.Ptsv2paymentsMerchantInformationServiceFeeDescriptor);
  }
}(this, function(ApiClient, Ptsv2paymentsMerchantInformationMerchantDescriptor, Ptsv2paymentsMerchantInformationServiceFeeDescriptor) {
  'use strict';




  /**
   * The Ptsv2paymentsMerchantInformation model module.
   * @module model/Ptsv2paymentsMerchantInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Ptsv2paymentsMerchantInformation</code>.
   * @alias module:model/Ptsv2paymentsMerchantInformation
   * @class
   */
  var exports = function() {
    var _this = this;










  };

  /**
   * Constructs a <code>Ptsv2paymentsMerchantInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Ptsv2paymentsMerchantInformation} obj Optional instance to populate.
   * @return {module:model/Ptsv2paymentsMerchantInformation} The populated <code>Ptsv2paymentsMerchantInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('merchantDescriptor')) {
        obj['merchantDescriptor'] = Ptsv2paymentsMerchantInformationMerchantDescriptor.constructFromObject(data['merchantDescriptor']);
      }
      if (data.hasOwnProperty('salesOrganizationId')) {
        obj['salesOrganizationId'] = ApiClient.convertToType(data['salesOrganizationId'], 'String');
      }
      if (data.hasOwnProperty('categoryCode')) {
        obj['categoryCode'] = ApiClient.convertToType(data['categoryCode'], 'Number');
      }
      if (data.hasOwnProperty('categoryCodeDomestic')) {
        obj['categoryCodeDomestic'] = ApiClient.convertToType(data['categoryCodeDomestic'], 'Number');
      }
      if (data.hasOwnProperty('taxId')) {
        obj['taxId'] = ApiClient.convertToType(data['taxId'], 'String');
      }
      if (data.hasOwnProperty('vatRegistrationNumber')) {
        obj['vatRegistrationNumber'] = ApiClient.convertToType(data['vatRegistrationNumber'], 'String');
      }
      if (data.hasOwnProperty('cardAcceptorReferenceNumber')) {
        obj['cardAcceptorReferenceNumber'] = ApiClient.convertToType(data['cardAcceptorReferenceNumber'], 'String');
      }
      if (data.hasOwnProperty('transactionLocalDateTime')) {
        obj['transactionLocalDateTime'] = ApiClient.convertToType(data['transactionLocalDateTime'], 'String');
      }
      if (data.hasOwnProperty('serviceFeeDescriptor')) {
        obj['serviceFeeDescriptor'] = Ptsv2paymentsMerchantInformationServiceFeeDescriptor.constructFromObject(data['serviceFeeDescriptor']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Ptsv2paymentsMerchantInformationMerchantDescriptor} merchantDescriptor
   */
  exports.prototype['merchantDescriptor'] = undefined;
  /**
   * Company ID assigned to an independent sales organization. Get this value from Mastercard.  #### CyberSource through VisaNet The value for this field corresponds to the following data in the TC 33 capture file: - Record: CP01 TCR6 - Position: 106-116 - Field: Mastercard Independent Sales Organization ID  **Note** The TC 33 Capture file contains information about the purchases and refunds that a merchant submits to CyberSource. CyberSource through VisaNet creates the TC 33 Capture file at the end of the day and sends it to the merchant’s acquirer, who uses this information to facilitate end-of-day clearing processing with payment card companies.  For processor-specific information, see the `sales_organization_ID` field description in [Credit Card Services Using the SCMP API.](http://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html) 
   * @member {String} salesOrganizationId
   */
  exports.prototype['salesOrganizationId'] = undefined;
  /**
   * The value for this field is a four-digit number that the payment card industry uses to classify merchants into market segments. A payment card company assigned one or more of these values to your business when you started accepting the payment card company’s cards. When you do not include this field in your request, CyberSource uses the value in your CyberSource account.  For processor-specific information, see the `merchant_category_code` field description in [Credit Card Services Using the SCMP API.](http://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html)  #### CyberSource through VisaNet The value for this field corresponds to the following data in the TC 33 capture file5: - Record: CP01 TCR4 - Position: 150-153 - Field: Merchant Category Code 
   * @member {Number} categoryCode
   */
  exports.prototype['categoryCode'] = undefined;
  /**
   * Merchant category code for domestic transactions. The value for this field is a four-digit number that the payment card industry uses to classify merchants into market segments. A payment card company assigned one or more of these values to your business when you started accepting the payment card company’s cards. Including this field in a request for a domestic transaction might reduce interchange fees.  When you include this field in a request: - Do not include the `merchant_category_code` field. - The value for this field overrides the value in your CyberSource account.  This field is supported only for: - Domestic transactions with Mastercard in Spain. Domestic means that you and the cardholder are in the same country. - Merchants enrolled in the OmniPay Direct interchange program. - First Data Merchant Solutions (Europe) on OmniPay Direct. 
   * @member {Number} categoryCodeDomestic
   */
  exports.prototype['categoryCodeDomestic'] = undefined;
  /**
   * Your Cadastro Nacional da Pessoa Jurídica (CNPJ) number.  This field is supported only for BNDES transactions on CyberSource through VisaNet.  The value for this field corresponds to the following data in the TC 33 capture file5: - Record: CP07 TCR6 - Position: 40-59 - Field: BNDES Reference Field 1  For details, see `bill_merchant_tax_id` field description in the [Credit Card Services Using the SCMP API.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/) 
   * @member {String} taxId
   */
  exports.prototype['taxId'] = undefined;
  /**
   * Your government-assigned tax identification number.  For CtV processors, the maximum length is 20.  For other processor-specific information, see the `merchant_vat_registration_number` field description in [Level II and Level III Processing Using the SCMP API.](http://apps.cybersource.com/library/documentation/dev_guides/Level_2_3_SCMP_API/html) 
   * @member {String} vatRegistrationNumber
   */
  exports.prototype['vatRegistrationNumber'] = undefined;
  /**
   * Reference number that facilitates card acceptor/corporation communication and record keeping.  For processor-specific information, see the `card_acceptor_ref_number` field description in [Level II and Level III Processing Using the SCMP API.](http://apps.cybersource.com/library/documentation/dev_guides/Level_2_3_SCMP_API/html) 
   * @member {String} cardAcceptorReferenceNumber
   */
  exports.prototype['cardAcceptorReferenceNumber'] = undefined;
  /**
   * Local date and time at your physical location. Include both the date and time in this field or leave it blank. This field is supported only for **CyberSource through VisaNet**.  For processor-specific information, see the `transaction_local_date_time` field description in [Credit Card Services Using the SCMP API.](http://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html)  Format: `YYYYMMDDhhmmss`, where:   - YYYY = year  - MM = month  - DD = day  - hh = hour  - mm = minutes  - ss = seconds   For processor-specific information, see the `transaction_local_date_time` field description in [Credit Card Services Using the SCMP API.](http://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html) 
   * @member {String} transactionLocalDateTime
   */
  exports.prototype['transactionLocalDateTime'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsMerchantInformationServiceFeeDescriptor} serviceFeeDescriptor
   */
  exports.prototype['serviceFeeDescriptor'] = undefined;



  return exports;
}));


