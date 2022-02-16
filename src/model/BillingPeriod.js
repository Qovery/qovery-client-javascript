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
import BillingEnd from './BillingEnd';
import BillingStart from './BillingStart';

/**
 * The BillingPeriod model module.
 * @module model/BillingPeriod
 * @version 1.0.0
 */
class BillingPeriod {
    /**
     * Constructs a new <code>BillingPeriod</code>.
     * @alias module:model/BillingPeriod
     * @implements module:model/BillingStart
     * @implements module:model/BillingEnd
     */
    constructor() { 
        BillingStart.initialize(this);BillingEnd.initialize(this);
        BillingPeriod.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BillingPeriod</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BillingPeriod} obj Optional instance to populate.
     * @return {module:model/BillingPeriod} The populated <code>BillingPeriod</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BillingPeriod();
            BillingStart.constructFromObject(data, obj);
            BillingEnd.constructFromObject(data, obj);

            if (data.hasOwnProperty('billing_started_on')) {
                obj['billing_started_on'] = ApiClient.convertToType(data['billing_started_on'], 'Date');
            }
            if (data.hasOwnProperty('billing_ended_on')) {
                obj['billing_ended_on'] = ApiClient.convertToType(data['billing_ended_on'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * @member {Date} billing_started_on
 */
BillingPeriod.prototype['billing_started_on'] = undefined;

/**
 * @member {Date} billing_ended_on
 */
BillingPeriod.prototype['billing_ended_on'] = undefined;


// Implement BillingStart interface:
/**
 * @member {Date} billing_started_on
 */
BillingStart.prototype['billing_started_on'] = undefined;
// Implement BillingEnd interface:
/**
 * @member {Date} billing_ended_on
 */
BillingEnd.prototype['billing_ended_on'] = undefined;




export default BillingPeriod;

