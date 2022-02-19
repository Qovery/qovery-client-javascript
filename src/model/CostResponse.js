/**
 * Qovery API
 * - Qovery is the fastest way to deploy your full-stack apps on any Cloud provider. - ℹ️ The API is stable and still in development. 
 *
 * The version of the OpenAPI document: 1.0.2
 * Contact: support+api+documentation@qovery.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The CostResponse model module.
 * @module model/CostResponse
 * @version 1.0.2
 */
class CostResponse {
    /**
     * Constructs a new <code>CostResponse</code>.
     * @alias module:model/CostResponse
     * @param totalInCents {Number} 
     * @param total {Number} 
     * @param currencyCode {String} 
     */
    constructor(totalInCents, total, currencyCode) { 
        
        CostResponse.initialize(this, totalInCents, total, currencyCode);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, totalInCents, total, currencyCode) { 
        obj['total_in_cents'] = totalInCents;
        obj['total'] = total;
        obj['currency_code'] = currencyCode;
    }

    /**
     * Constructs a <code>CostResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CostResponse} obj Optional instance to populate.
     * @return {module:model/CostResponse} The populated <code>CostResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CostResponse();

            if (data.hasOwnProperty('total_in_cents')) {
                obj['total_in_cents'] = ApiClient.convertToType(data['total_in_cents'], 'Number');
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'Number');
            }
            if (data.hasOwnProperty('currency_code')) {
                obj['currency_code'] = ApiClient.convertToType(data['currency_code'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} total_in_cents
 */
CostResponse.prototype['total_in_cents'] = undefined;

/**
 * @member {Number} total
 */
CostResponse.prototype['total'] = undefined;

/**
 * @member {String} currency_code
 */
CostResponse.prototype['currency_code'] = undefined;






export default CostResponse;

