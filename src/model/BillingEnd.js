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
 * The BillingEnd model module.
 * @module model/BillingEnd
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class BillingEnd {
    /**
     * Constructs a new <code>BillingEnd</code>.
     * @alias module:model/BillingEnd
     */
    constructor() { 
        
        BillingEnd.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BillingEnd</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BillingEnd} obj Optional instance to populate.
     * @return {module:model/BillingEnd} The populated <code>BillingEnd</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BillingEnd();

            if (data.hasOwnProperty('billing_ended_on')) {
                obj['billing_ended_on'] = ApiClient.convertToType(data['billing_ended_on'], 'Date');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BillingEnd</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BillingEnd</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * @member {Date} billing_ended_on
 */
BillingEnd.prototype['billing_ended_on'] = undefined;






export default BillingEnd;

