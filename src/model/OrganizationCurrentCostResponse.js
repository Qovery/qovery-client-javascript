/**
 * Qovery API
 * - Qovery is the fastest way to deploy your full-stack apps on any Cloud provider. - ℹ️ The API is stable and still in development. 
 *
 * The version of the OpenAPI document: 1.0.1
 * Contact: support+api+documentation@qovery.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import CommunityUsage from './CommunityUsage';
import CommunityUsageResponse from './CommunityUsageResponse';
import Cost from './Cost';
import CurrentCost from './CurrentCost';
import PaidUsage from './PaidUsage';
import PaidUsageResponse from './PaidUsageResponse';
import RemainingCredits from './RemainingCredits';

/**
 * The OrganizationCurrentCostResponse model module.
 * @module model/OrganizationCurrentCostResponse
 * @version 1.0.1
 */
class OrganizationCurrentCostResponse {
    /**
     * Constructs a new <code>OrganizationCurrentCostResponse</code>.
     * @alias module:model/OrganizationCurrentCostResponse
     * @implements module:model/CurrentCost
     * @implements module:model/PaidUsage
     * @implements module:model/CommunityUsage
     */
    constructor() { 
        CurrentCost.initialize(this);PaidUsage.initialize(this);CommunityUsage.initialize(this);
        OrganizationCurrentCostResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrganizationCurrentCostResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrganizationCurrentCostResponse} obj Optional instance to populate.
     * @return {module:model/OrganizationCurrentCostResponse} The populated <code>OrganizationCurrentCostResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrganizationCurrentCostResponse();
            CurrentCost.constructFromObject(data, obj);
            PaidUsage.constructFromObject(data, obj);
            CommunityUsage.constructFromObject(data, obj);

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
            if (data.hasOwnProperty('paid_usage')) {
                obj['paid_usage'] = PaidUsageResponse.constructFromObject(data['paid_usage']);
            }
            if (data.hasOwnProperty('community_usage')) {
                obj['community_usage'] = CommunityUsageResponse.constructFromObject(data['community_usage']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/OrganizationCurrentCostResponse.PlanEnum} plan
 */
OrganizationCurrentCostResponse.prototype['plan'] = undefined;

/**
 * number of days remaining before the end of the trial period
 * @member {Number} remaining_trial_day
 */
OrganizationCurrentCostResponse.prototype['remaining_trial_day'] = undefined;

/**
 * @member {module:model/RemainingCredits} remaining_credits
 */
OrganizationCurrentCostResponse.prototype['remaining_credits'] = undefined;

/**
 * @member {module:model/Cost} cost
 */
OrganizationCurrentCostResponse.prototype['cost'] = undefined;

/**
 * @member {module:model/PaidUsageResponse} paid_usage
 */
OrganizationCurrentCostResponse.prototype['paid_usage'] = undefined;

/**
 * @member {module:model/CommunityUsageResponse} community_usage
 */
OrganizationCurrentCostResponse.prototype['community_usage'] = undefined;


// Implement CurrentCost interface:
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
// Implement PaidUsage interface:
/**
 * @member {module:model/PaidUsageResponse} paid_usage
 */
PaidUsage.prototype['paid_usage'] = undefined;
// Implement CommunityUsage interface:
/**
 * @member {module:model/CommunityUsageResponse} community_usage
 */
CommunityUsage.prototype['community_usage'] = undefined;



/**
 * Allowed values for the <code>plan</code> property.
 * @enum {String}
 * @readonly
 */
OrganizationCurrentCostResponse['PlanEnum'] = {

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



export default OrganizationCurrentCostResponse;

