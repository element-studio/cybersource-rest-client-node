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
    define(['ApiClient', 'model/Ptsv2paymentsProcessingInformationAuthorizationOptionsInitiator'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Ptsv2paymentsProcessingInformationAuthorizationOptionsInitiator'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.Ptsv2paymentsProcessingInformationAuthorizationOptions = factory(root.CyberSource.ApiClient, root.CyberSource.Ptsv2paymentsProcessingInformationAuthorizationOptionsInitiator);
  }
}(this, function(ApiClient, Ptsv2paymentsProcessingInformationAuthorizationOptionsInitiator) {
  'use strict';




  /**
   * The Ptsv2paymentsProcessingInformationAuthorizationOptions model module.
   * @module model/Ptsv2paymentsProcessingInformationAuthorizationOptions
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Ptsv2paymentsProcessingInformationAuthorizationOptions</code>.
   * @alias module:model/Ptsv2paymentsProcessingInformationAuthorizationOptions
   * @class
   */
  var exports = function() {
    var _this = this;


















  };

  /**
   * Constructs a <code>Ptsv2paymentsProcessingInformationAuthorizationOptions</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Ptsv2paymentsProcessingInformationAuthorizationOptions} obj Optional instance to populate.
   * @return {module:model/Ptsv2paymentsProcessingInformationAuthorizationOptions} The populated <code>Ptsv2paymentsProcessingInformationAuthorizationOptions</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('authType')) {
        obj['authType'] = ApiClient.convertToType(data['authType'], 'String');
      }
      if (data.hasOwnProperty('verbalAuthCode')) {
        obj['verbalAuthCode'] = ApiClient.convertToType(data['verbalAuthCode'], 'String');
      }
      if (data.hasOwnProperty('verbalAuthTransactionId')) {
        obj['verbalAuthTransactionId'] = ApiClient.convertToType(data['verbalAuthTransactionId'], 'String');
      }
      if (data.hasOwnProperty('authIndicator')) {
        obj['authIndicator'] = ApiClient.convertToType(data['authIndicator'], 'String');
      }
      if (data.hasOwnProperty('partialAuthIndicator')) {
        obj['partialAuthIndicator'] = ApiClient.convertToType(data['partialAuthIndicator'], 'Boolean');
      }
      if (data.hasOwnProperty('balanceInquiry')) {
        obj['balanceInquiry'] = ApiClient.convertToType(data['balanceInquiry'], 'Boolean');
      }
      if (data.hasOwnProperty('ignoreAvsResult')) {
        obj['ignoreAvsResult'] = ApiClient.convertToType(data['ignoreAvsResult'], 'Boolean');
      }
      if (data.hasOwnProperty('declineAvsFlags')) {
        obj['declineAvsFlags'] = ApiClient.convertToType(data['declineAvsFlags'], ['String']);
      }
      if (data.hasOwnProperty('ignoreCvResult')) {
        obj['ignoreCvResult'] = ApiClient.convertToType(data['ignoreCvResult'], 'Boolean');
      }
      if (data.hasOwnProperty('initiator')) {
        obj['initiator'] = Ptsv2paymentsProcessingInformationAuthorizationOptionsInitiator.constructFromObject(data['initiator']);
      }
      if (data.hasOwnProperty('billPayment')) {
        obj['billPayment'] = ApiClient.convertToType(data['billPayment'], 'Boolean');
      }
      if (data.hasOwnProperty('billPaymentType')) {
        obj['billPaymentType'] = ApiClient.convertToType(data['billPaymentType'], 'String');
      }
      if (data.hasOwnProperty('redemptionInquiry')) {
        obj['redemptionInquiry'] = ApiClient.convertToType(data['redemptionInquiry'], 'Boolean');
      }
      if (data.hasOwnProperty('transportationMode')) {
        obj['transportationMode'] = ApiClient.convertToType(data['transportationMode'], 'String');
      }
      if (data.hasOwnProperty('aggregatedAuthIndicator')) {
        obj['aggregatedAuthIndicator'] = ApiClient.convertToType(data['aggregatedAuthIndicator'], 'String');
      }
      if (data.hasOwnProperty('debtRecoveryIndicator')) {
        obj['debtRecoveryIndicator'] = ApiClient.convertToType(data['debtRecoveryIndicator'], 'String');
      }
      if (data.hasOwnProperty('deferredAuthIndicator')) {
        obj['deferredAuthIndicator'] = ApiClient.convertToType(data['deferredAuthIndicator'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * Authorization type. Possible values:   - `AUTOCAPTURE`: automatic capture.  - `STANDARDCAPTURE`: standard capture.  - `VERBAL`: forced capture. Include it in the payment request for a forced capture. Include it in the capture request for a verbal payment.  #### Asia, Middle East, and Africa Gateway; Cielo; Comercio Latino; and CyberSource Latin American Processing Set this field to `AUTOCAPTURE` and include it in a bundled request to indicate that you are requesting an automatic capture. If your account is configured to enable automatic captures, set this field to `STANDARDCAPTURE` and include it in a standard authorization or bundled request to indicate that you are overriding an automatic capture. For more information, see the `auth_type` field description in [Credit Card Services Using the SCMP API Guide.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/)  #### Forced Capture Set this field to `VERBAL` and include it in the authorization request to indicate that you are performing a forced capture; therefore, you receive the authorization code outside the CyberSource system.  #### Verbal Authorization Set this field to `VERBAL` and include it in the capture request to indicate that the request is for a verbal authorization. For more information, see \"Verbal Authorizations\" in [Credit Card Services Using the SCMP API](http://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html). 
   * @member {String} authType
   */
  exports.prototype['authType'] = undefined;
  /**
   * Authorization code.  #### Forced Capture Use this field to send the authorization code you received from a payment that you authorized outside the CyberSource system.  #### PIN debit Authorization code that is returned by the processor.  Returned by PIN debit purchase.  #### Verbal Authorization Use this field in CAPTURE API to send the verbally received authorization code.  For processor-specific information, see the `auth_code` field description in [Credit Card Services Using the SCMP API](http://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html). 
   * @member {String} verbalAuthCode
   */
  exports.prototype['verbalAuthCode'] = undefined;
  /**
   * Transaction ID (TID).  #### FDMS South This field is required for verbal authorizations and forced captures with the American Express card type to comply with the CAPN requirements: - Forced capture: Obtain the value for this field from the authorization response. - Verbal authorization: You cannot obtain a value for this field so CyberSource uses the default value of `000000000000000` (15 zeros). 
   * @member {String} verbalAuthTransactionId
   */
  exports.prototype['verbalAuthTransactionId'] = undefined;
  /**
   * Flag that specifies the purpose of the authorization.  Possible values:  - **0**: Preauthorization  - **1**: Final authorization  To set the default for this field, contact CyberSource Customer Support.  #### Barclays and Elavon The default for Barclays and Elavon is 1 (final authorization). To change the default for this field, contact CyberSource Customer Support.  #### CyberSource through VisaNet When the value for this field is 0, it corresponds to the following data in the TC 33 capture file:  - Record: CP01 TCR0  - Position: 164  - Field: Additional Authorization Indicators When the value for this field is 1, it does not correspond to any data in the TC 33 capture file. 
   * @member {String} authIndicator
   */
  exports.prototype['authIndicator'] = undefined;
  /**
   * Flag that indicates whether the transaction is enabled for partial authorization. When the request includes this field, this value overrides the information in your account. Possible values: - `true`: Enable the transaction for partial authorization. - `false`: Do not enable the transaction for partial authorization.  #### PIN debit Required field for partial authorizations that use PIN debit purchase; otherwise, not used.  #### Used by **Authorization** Optional field.  #### CyberSource through VisaNet To set the default for this field, contact CyberSource Customer Support. The value for this field corresponds to the following data in the TC 33 capture file5: - Record: CP01 TCR0 - Position: 164 - Field: Additional Authorization Indicators 
   * @member {Boolean} partialAuthIndicator
   */
  exports.prototype['partialAuthIndicator'] = undefined;
  /**
   * Flag that indicates whether to return balance information.  Possible values: - `true`: Return balance information. - `false`: Do not return balance information.  #### Used by **Authorization** Required for a balance inquiry; otherwise, not used.  #### PIN debit Required for a balance inquiry request of a PIN debit purchase; otherwise, not used. 
   * @member {Boolean} balanceInquiry
   */
  exports.prototype['balanceInquiry'] = undefined;
  /**
   * Flag for a sale request that indicates whether to allow the capture service to run even when the authorization receives an AVS decline, as indicated by a reply flag value of DAVSNO.  Possible values: - `true`: Ignore the results of AVS checking and run the capture service. - `false` (default): If the authorization receives an AVS decline, do not run the capture service. When the value of this field is `true`, the list in the `processingInformation.authorizationOptions.declineAvsFlags` field is ignored.  #### Used by **Authorization** Optional field. String (3) 
   * @member {Boolean} ignoreAvsResult
   * @default false
   */
  exports.prototype['ignoreAvsResult'] = false;
  /**
   * Comma-separated list of AVS flags that cause the reply flag `DAVSNO` to be returned.  **Important** To receive declines for the AVS code `N`, you must include the value `N` in the comma-separated list.    ### AVS Codes for Cielo 3.0 and CyberSource Latin American Processing    **Note** CyberSource Latin American Processing is the name of a specific processing connection that CyberSource supports.   In the CyberSource API documentation, CyberSource Latin American Processing does not refer to the general topic of processing in Latin America.   The information in this section is for the specific processing connection called CyberSource Latin American Processing.   It is not for any other Latin American processors that CyberSource supports.  |AVS Code|Description| |--- |--- | |D|Partial match: postal code and address match.| |E|Not supported: AVS is not supported for this card type. _or_ Invalid: the acquirer returned an unrecognized value for the AVS response.| |F|Partial match: postal code matches, but CPF and address do not match.*| |G|Not supported: AVS not supported or not verified.| |I|No match: AVS information is not available.| |K|Partial match: CPF matches, but postal code and address do not match.*| |L|Partial match: postal code and CPF match, but address does not match.*| |N|No match: postal code, CPF, and address do not match.*| |O|Partial match: CPF and address match, but postal code does not match.*| |R|Not supported: your implementation does not support AVS _or_ System unavailable.| |T|Partial match: address matches, but postal code and CPF do not match.*| |V|Match: postal code, CPF, and address match.*| |* CPF (Cadastro de Pessoas Fisicas) is required only for Redecard in Brazil.||  ### AVS Codes for All Other Processors  **Note** The list of AVS codes for all other processors follows these descriptions of the processor-specific information for these codes.  #### American Express Cards For American Express cards only, you can receive Visa and CyberSource AVS codes in addition to the American Express AVS codes.  **Note** For CyberSource through VisaNet, the American Express AVS codes are converted to Visa AVS codes before they are returned to you. As a result, you will not receive American Express AVS codes for the American Express card type.<br/><br/>  _American Express Card codes_: `F`, `H`, `K`, `L`, `O`, `T`, `V`  #### Domestic and International Visa Cards The international and domestic alphabetic AVS codes are the Visa standard AVS codes. CyberSource maps the standard AVS return codes for other types of payment cards, including American Express cards, to the Visa standard AVS codes.  AVS is considered either domestic or international, depending on the location of the bank that issued the customer's payment card: - When the bank is in the U.S., the AVS is domestic. - When the bank is outside the U.S., the AVS is international.  You should be prepared to handle both domestic and international AVS result codes: - For international cards, you can receive domestic AVS codes in addition to the international AVS codes. - For domestic cards, you can receive international AVS codes in addition to the domestic AVS codes.  _International Visa Codes_: `B`, `C`, `D`, `G`, `I`, `M`, `P`  _Domestic Visa Codes_: `A`, `E`,`N`, `R`, `S`, `U`, `W`, `X`, `Y`, `Z`  #### CyberSource Codes The numeric AVS codes are created by CyberSource and are not standard Visa codes. These AVS codes can be returned for any card type.  _CyberSource Codes_: `1`, `2`, `3`, `4`  ### Table of AVS Codes for All Other Processors  |AVS Code|Description| |--- |--- | |A|Partial match: street address matches, but 5-digit and 9-digit postal codes do not match.| |B|Partial match: street address matches, but postal code is not verified. Returned only for Visa cards not issued in the U.S.| |C|No match: street address and postal code do not match. Returned only for Visa cards not issued in the U.S.| |D & M|Match: street address and postal code match. Returned only for Visa cards not issued in the U.S.| |E|Invalid: AVS data is invalid or AVS is not allowed for this card type.| |F|Partial match: card member’s name does not match, but billing postal code matches.| |G|Not supported: issuing bank outside the U.S. does not support AVS.| |H|Partial match: card member’s name does not match, but street address and postal code match. Returned only for the American Express card type.| |I|No match: address not verified. Returned only for Visa cards not issued in the U.S.| |K|Partial match: card member’s name matches, but billing address and billing postal code do not match. Returned only for the American Express card type.| |L|Partial match: card member’s name and billing postal code match, but billing address does not match. Returned only for the American Express card type.| |M|See the entry for D & M.| |N|No match: one of the following: street address and postal code do not match _or_ (American Express card type only) card member’s name, street address, and postal code do not match.| |O|Partial match: card member’s name and billing address match, but billing postal code does not match. Returned only for the American Express card type.| |P|Partial match: postal code matches, but street address not verified. Returned only for Visa cards not issued in the U.S.| |R|System unavailable.| |S|Not supported: issuing bank in the U.S. does not support AVS.| |T|Partial match: card member’s name does not match, but street address matches. Returned only for the American Express card type.| |U|System unavailable: address information unavailable for one of these reasons: The U.S. bank does not support AVS outside the U.S. _or_ The AVS in a U.S. bank is not functioning properly.| |V|Match: card member’s name, billing address, and billing postal code match. Returned only for the American Express card type.| |W|Partial match: street address does not match, but 9-digit postal code matches.| |X|Match: street address and 9-digit postal code match.| |Y|Match: street address and 5-digit postal code match.| |Z|Partial match: street address does not match, but 5-digit postal code matches.| |1|Not supported: one of the following: AVS is not supported for this processor or card type _or_ AVS is disabled for your CyberSource account. To enable AVS, contact CyberSource Customer Support.| |2|Unrecognized: the processor returned an unrecognized value for the AVS response.| |3|Match: address is confirmed. Returned only for PayPal Express Checkout.| |4|No match: address is not confirmed. Returned only for PayPal Express Checkout.| |5|No match: no AVS code was returned by the processor.| 
   * @member {Array.<String>} declineAvsFlags
   */
  exports.prototype['declineAvsFlags'] = undefined;
  /**
   * Flag for a sale request that indicates whether to allow the capture service to run even when the authorization receives a CVN decline, as indicated by an `processorInformation.cardVerification.resultCode` value of `D` or `N`. Possible values: - `true`: Ignore the results of CVN checking and run the capture service. - `false` (default): If the authorization receives a CVN decline, do not run the capture service.  #### Used by **Authorization** Optional field. 
   * @member {Boolean} ignoreCvResult
   * @default false
   */
  exports.prototype['ignoreCvResult'] = false;
  /**
   * @member {module:model/Ptsv2paymentsProcessingInformationAuthorizationOptionsInitiator} initiator
   */
  exports.prototype['initiator'] = undefined;
  /**
   * Indicates payment for bill or payment towards existing contractual loan.  Possible values: - `true`: Bill payment or loan payment. - `false` (default): Not a bill payment or loan payment.  Optional request field. 
   * @member {Boolean} billPayment
   */
  exports.prototype['billPayment'] = undefined;
  /**
   * Reason for the payment.  Possible values: - 001: Utility payment - 002: Government services - 003: Mobile phone top-up - 004: Coupon payment  The value for this field corresponds to the following data in the TC 33 capture file5: - Record: CP07 TCR0 - Position: 48-50 - Field: Bill Payment Transaction Type Identifier  This field is supported only for bill payments in Brazil with Mastercard on CyberSource through VisaNet. 
   * @member {String} billPaymentType
   */
  exports.prototype['billPaymentType'] = undefined;
  /**
   * Flag that indicates the payment request is a redemption inquiry.  Possible values:   - `true`   - `false` 
   * @member {Boolean} redemptionInquiry
   */
  exports.prototype['redemptionInquiry'] = undefined;
  /**
   * Type of transportation mode :  Possible Values: - 00 = Unknown - 01 = Urban bus - 02 = Interurban bus - 03=Lighttrainmasstransit(Underground Metro LTR) - 04 = Train - 05 = Commuter train - 06 = Water-borne vehicle - 07 = Toll - 08 = Parking - 09 = Taxi - 10 = High-speed train - 11 = Rural bus - 12 = Express commuter train - 13 = Para transit - 14 = Self drive vehicle - 15 = Coach - 16 = Locomotive - 17 = Powered motor coach - 18 = Trailer - 19 = Regional train - 20 = Inter-city - 21 = Funicular train - 22 = Cable car 
   * @member {String} transportationMode
   */
  exports.prototype['transportationMode'] = undefined;
  /**
   * Indicates if transaction is an aggregated auth  Possible values: - **true** - **false** 
   * @member {String} aggregatedAuthIndicator
   */
  exports.prototype['aggregatedAuthIndicator'] = undefined;
  /**
   * Indicates if transaction is a debt recovery request  Possible values: - **true** - **false** 
   * @member {String} debtRecoveryIndicator
   */
  exports.prototype['debtRecoveryIndicator'] = undefined;
  /**
   * Flag that indicates whether the authorization request was delayed because connectivity was interrupted.  Possible values:   - `true` (Deferred authorization)   - `false` (default: Not a deferred authorization) 
   * @member {Boolean} deferredAuthIndicator
   */
  exports.prototype['deferredAuthIndicator'] = undefined;



  return exports;
}));


