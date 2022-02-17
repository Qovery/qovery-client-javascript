/**
 * Qovery API
 * - Qovery is the fastest way to deploy your full-stack apps on any Cloud provider. - ℹ️ The API is stable and still in development. 
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
import CostResponse from './CostResponse';

/**
 * The RemainingCredits model module.
 * @module model/RemainingCredits
 * @version 1.0.0
 */
class RemainingCredits {
    /**
     * Constructs a new <code>RemainingCredits</code>.
     * @alias module:model/RemainingCredits
     * @implements module:model/CostResponse
     * @param totalInCents {Number} 
     * @param total {Number} 
     * @param currencyCode {String} 
     */
    constructor(totalInCents, total, currencyCode) { 
        CostResponse.initialize(this, totalInCents, total, currencyCode);
        RemainingCredits.initialize(this, totalInCents, total, currencyCode);
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
     * Constructs a <code>RemainingCredits</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RemainingCredits} obj Optional instance to populate.
     * @return {module:model/RemainingCredits} The populated <code>RemainingCredits</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RemainingCredits();
            CostResponse.constructFromObject(data, obj);

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
RemainingCredits.prototype['total_in_cents'] = undefined;

/**
 * @member {Number} total
 */
RemainingCredits.prototype['total'] = undefined;

/**
 * @member {String} currency_code
 */
RemainingCredits.prototype['currency_code'] = undefined;


// Implement CostResponse interface:
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




export default RemainingCredits;

