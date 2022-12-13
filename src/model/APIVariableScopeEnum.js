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
* Enum class APIVariableScopeEnum.
* @enum {}
* @readonly
*/
export default class APIVariableScopeEnum {
    
        /**
         * value: "APPLICATION"
         * @const
         */
        "APPLICATION" = "APPLICATION";

    
        /**
         * value: "BUILT_IN"
         * @const
         */
        "BUILT_IN" = "BUILT_IN";

    
        /**
         * value: "ENVIRONMENT"
         * @const
         */
        "ENVIRONMENT" = "ENVIRONMENT";

    
        /**
         * value: "PROJECT"
         * @const
         */
        "PROJECT" = "PROJECT";

    
        /**
         * value: "CONTAINER"
         * @const
         */
        "CONTAINER" = "CONTAINER";

    
        /**
         * value: "JOB"
         * @const
         */
        "JOB" = "JOB";

    

    /**
    * Returns a <code>APIVariableScopeEnum</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/APIVariableScopeEnum} The enum <code>APIVariableScopeEnum</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

