/**
 * Qovery API
 * - Qovery is the fastest way to deploy your full-stack apps on any Cloud provider. - ℹ️ The API is stable and still in development. 
 *
 * The version of the OpenAPI document: 1.0.3
 * Contact: support+api+documentation@qovery.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The CreditCardRequest model module.
 * @module model/CreditCardRequest
 * @version 1.0.3
 */
class CreditCardRequest {
    /**
     * Constructs a new <code>CreditCardRequest</code>.
     * @alias module:model/CreditCardRequest
     * @param number {String} 
     * @param cvv {String} 
     * @param expiryMonth {Number} 
     * @param expiryYear {Number} 
     */
    constructor(number, cvv, expiryMonth, expiryYear) { 
        
        CreditCardRequest.initialize(this, number, cvv, expiryMonth, expiryYear);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, number, cvv, expiryMonth, expiryYear) { 
        obj['number'] = number;
        obj['cvv'] = cvv;
        obj['expiry_month'] = expiryMonth;
        obj['expiry_year'] = expiryYear;
    }

    /**
     * Constructs a <code>CreditCardRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreditCardRequest} obj Optional instance to populate.
     * @return {module:model/CreditCardRequest} The populated <code>CreditCardRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreditCardRequest();

            if (data.hasOwnProperty('number')) {
                obj['number'] = ApiClient.convertToType(data['number'], 'String');
            }
            if (data.hasOwnProperty('cvv')) {
                obj['cvv'] = ApiClient.convertToType(data['cvv'], 'String');
            }
            if (data.hasOwnProperty('expiry_month')) {
                obj['expiry_month'] = ApiClient.convertToType(data['expiry_month'], 'Number');
            }
            if (data.hasOwnProperty('expiry_year')) {
                obj['expiry_year'] = ApiClient.convertToType(data['expiry_year'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} number
 */
CreditCardRequest.prototype['number'] = undefined;

/**
 * @member {String} cvv
 */
CreditCardRequest.prototype['cvv'] = undefined;

/**
 * @member {Number} expiry_month
 */
CreditCardRequest.prototype['expiry_month'] = undefined;

/**
 * @member {Number} expiry_year
 */
CreditCardRequest.prototype['expiry_year'] = undefined;






export default CreditCardRequest;

