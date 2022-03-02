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
import Cost from './Cost';
import RemainingCredits from './RemainingCredits';

/**
 * The CurrentCost model module.
 * @module model/CurrentCost
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class CurrentCost {
    /**
     * Constructs a new <code>CurrentCost</code>.
     * @alias module:model/CurrentCost
     */
    constructor() { 
        
        CurrentCost.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CurrentCost</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CurrentCost} obj Optional instance to populate.
     * @return {module:model/CurrentCost} The populated <code>CurrentCost</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CurrentCost();

            if (data.hasOwnProperty('plan')) {
                obj['plan'] = ApiClient.convertToType(data['plan'], 'String');
            }
            if (data.hasOwnProperty('remaining_trial_day')) {
                obj['remaining_trial_day'] = ApiClient.convertToType(data['remaining_trial_day'], 'Number');
            }
            if (data.hasOwnProperty('remaining_credits')) {
                obj['remaining_credits'] = RemainingCredits.constructFromObject(data['remaining_credits']);
            }
            if (data.hasOwnProperty('cost')) {
                obj['cost'] = Cost.constructFromObject(data['cost']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/CurrentCost.PlanEnum} plan
 */
CurrentCost.prototype['plan'] = undefined;

/**
 * number of days remaining before the end of the trial period
 * @member {Number} remaining_trial_day
 */
CurrentCost.prototype['remaining_trial_day'] = undefined;

/**
 * @member {module:model/RemainingCredits} remaining_credits
 */
CurrentCost.prototype['remaining_credits'] = undefined;

/**
 * @member {module:model/Cost} cost
 */
CurrentCost.prototype['cost'] = undefined;





/**
 * Allowed values for the <code>plan</code> property.
 * @enum {String}
 * @readonly
 */
CurrentCost['PlanEnum'] = {

    /**
     * value: "COMMUNITY"
     * @const
     */
    "COMMUNITY": "COMMUNITY",

    /**
     * value: "FREE"
     * @const
     */
    "FREE": "FREE",

    /**
     * value: "PROFESSIONAL"
     * @const
     */
    "PROFESSIONAL": "PROFESSIONAL",

    /**
     * value: "BUSINESS"
     * @const
     */
    "BUSINESS": "BUSINESS"
};



export default CurrentCost;

