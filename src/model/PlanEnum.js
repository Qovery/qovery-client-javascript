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
* Enum class PlanEnum.
* @enum {}
* @readonly
*/
export default class PlanEnum {
    
        /**
         * value: "FREE"
         * @const
         */
        "FREE" = "FREE";

    
        /**
         * value: "TEAM"
         * @const
         */
        "TEAM" = "TEAM";

    
        /**
         * value: "TEAM_YEARLY"
         * @const
         */
        "TEAM_YEARLY" = "TEAM_YEARLY";

    
        /**
         * value: "ENTERPRISE"
         * @const
         */
        "ENTERPRISE" = "ENTERPRISE";

    
        /**
         * value: "ENTERPRISE_YEARLY"
         * @const
         */
        "ENTERPRISE_YEARLY" = "ENTERPRISE_YEARLY";

    

    /**
    * Returns a <code>PlanEnum</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/PlanEnum} The enum <code>PlanEnum</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

