/**
 * [BETA] Qovery API
 * - Qovery is the fastest way to deploy your full-stack apps on any Cloud provider. - ℹ️ The API is in Beta and still in progress. Some endpoints are not available yet. 
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support+api+documentation@qovery.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The CreditCardResponse model module.
 * @module model/CreditCardResponse
 * @version 1.0.0
 */
class CreditCardResponse {
    /**
     * Constructs a new <code>CreditCardResponse</code>.
     * @alias module:model/CreditCardResponse
     * @param id {String} 
     * @param createdAt {Date} 
     * @param expiryMonth {Number} 
     * @param expiryYear {Number} 
     * @param lastDigit {String} 
     * @param isExpired {Boolean} 
     */
    constructor(id, createdAt, expiryMonth, expiryYear, lastDigit, isExpired) { 
        
        CreditCardResponse.initialize(this, id, createdAt, expiryMonth, expiryYear, lastDigit, isExpired);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, createdAt, expiryMonth, expiryYear, lastDigit, isExpired) { 
        obj['id'] = id;
        obj['created_at'] = createdAt;
        obj['expiry_month'] = expiryMonth;
        obj['expiry_year'] = expiryYear;
        obj['last_digit'] = lastDigit;
        obj['is_expired'] = isExpired;
    }

    /**
     * Constructs a <code>CreditCardResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreditCardResponse} obj Optional instance to populate.
     * @return {module:model/CreditCardResponse} The populated <code>CreditCardResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreditCardResponse();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('expiry_month')) {
                obj['expiry_month'] = ApiClient.convertToType(data['expiry_month'], 'Number');
            }
            if (data.hasOwnProperty('expiry_year')) {
                obj['expiry_year'] = ApiClient.convertToType(data['expiry_year'], 'Number');
            }
            if (data.hasOwnProperty('last_digit')) {
                obj['last_digit'] = ApiClient.convertToType(data['last_digit'], 'String');
            }
            if (data.hasOwnProperty('is_expired')) {
                obj['is_expired'] = ApiClient.convertToType(data['is_expired'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
CreditCardResponse.prototype['id'] = undefined;

/**
 * @member {Date} created_at
 */
CreditCardResponse.prototype['created_at'] = undefined;

/**
 * @member {Number} expiry_month
 */
CreditCardResponse.prototype['expiry_month'] = undefined;

/**
 * @member {Number} expiry_year
 */
CreditCardResponse.prototype['expiry_year'] = undefined;

/**
 * @member {String} last_digit
 */
CreditCardResponse.prototype['last_digit'] = undefined;

/**
 * @member {Boolean} is_expired
 */
CreditCardResponse.prototype['is_expired'] = undefined;






export default CreditCardResponse;

