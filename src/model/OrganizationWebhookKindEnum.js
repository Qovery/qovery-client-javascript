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
* Enum class OrganizationWebhookKindEnum.
* @enum {}
* @readonly
*/
export default class OrganizationWebhookKindEnum {
    
        /**
         * value: "STANDARD"
         * @const
         */
        "STANDARD" = "STANDARD";

    
        /**
         * value: "SLACK"
         * @const
         */
        "SLACK" = "SLACK";

    

    /**
    * Returns a <code>OrganizationWebhookKindEnum</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/OrganizationWebhookKindEnum} The enum <code>OrganizationWebhookKindEnum</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

