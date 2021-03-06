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
import CurrentCost from './CurrentCost';
import OrganizationCurrentCostAllOf from './OrganizationCurrentCostAllOf';
import PaidUsage from './PaidUsage';
import PlanEnum from './PlanEnum';
import RemainingCredits from './RemainingCredits';

/**
 * The OrganizationCurrentCost model module.
 * @module model/OrganizationCurrentCost
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class OrganizationCurrentCost {
    /**
     * Constructs a new <code>OrganizationCurrentCost</code>.
     * @alias module:model/OrganizationCurrentCost
     * @implements module:model/CurrentCost
     * @implements module:model/OrganizationCurrentCostAllOf
     */
    constructor() { 
        CurrentCost.initialize(this);OrganizationCurrentCostAllOf.initialize(this);
        OrganizationCurrentCost.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrganizationCurrentCost</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrganizationCurrentCost} obj Optional instance to populate.
     * @return {module:model/OrganizationCurrentCost} The populated <code>OrganizationCurrentCost</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrganizationCurrentCost();
            CurrentCost.constructFromObject(data, obj);
            OrganizationCurrentCostAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('plan')) {
                obj['plan'] = PlanEnum.constructFromObject(data['plan']);
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
            if (data.hasOwnProperty('paid_usage')) {
                obj['paid_usage'] = PaidUsage.constructFromObject(data['paid_usage']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/PlanEnum} plan
 */
OrganizationCurrentCost.prototype['plan'] = undefined;

/**
 * number of days remaining before the end of the trial period
 * @member {Number} remaining_trial_day
 */
OrganizationCurrentCost.prototype['remaining_trial_day'] = undefined;

/**
 * @member {module:model/RemainingCredits} remaining_credits
 */
OrganizationCurrentCost.prototype['remaining_credits'] = undefined;

/**
 * @member {module:model/Cost} cost
 */
OrganizationCurrentCost.prototype['cost'] = undefined;

/**
 * @member {module:model/PaidUsage} paid_usage
 */
OrganizationCurrentCost.prototype['paid_usage'] = undefined;


// Implement CurrentCost interface:
/**
 * @member {module:model/PlanEnum} plan
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
// Implement OrganizationCurrentCostAllOf interface:
/**
 * @member {module:model/PaidUsage} paid_usage
 */
OrganizationCurrentCostAllOf.prototype['paid_usage'] = undefined;




export default OrganizationCurrentCost;

