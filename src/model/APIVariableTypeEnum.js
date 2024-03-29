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
* Enum class APIVariableTypeEnum.
* @enum {}
* @readonly
*/
export default class APIVariableTypeEnum {
    
        /**
         * value: "VALUE"
         * @const
         */
        "VALUE" = "VALUE";

    
        /**
         * value: "ALIAS"
         * @const
         */
        "ALIAS" = "ALIAS";

    
        /**
         * value: "OVERRIDE"
         * @const
         */
        "OVERRIDE" = "OVERRIDE";

    
        /**
         * value: "BUILT_IN"
         * @const
         */
        "BUILT_IN" = "BUILT_IN";

    
        /**
         * value: "FILE"
         * @const
         */
        "FILE" = "FILE";

    

    /**
    * Returns a <code>APIVariableTypeEnum</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/APIVariableTypeEnum} The enum <code>APIVariableTypeEnum</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

