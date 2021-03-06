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
* Enum class DatabaseTypeEnum.
* @enum {}
* @readonly
*/
export default class DatabaseTypeEnum {
    
        /**
         * value: "MONGODB"
         * @const
         */
        "MONGODB" = "MONGODB";

    
        /**
         * value: "MYSQL"
         * @const
         */
        "MYSQL" = "MYSQL";

    
        /**
         * value: "POSTGRESQL"
         * @const
         */
        "POSTGRESQL" = "POSTGRESQL";

    
        /**
         * value: "REDIS"
         * @const
         */
        "REDIS" = "REDIS";

    

    /**
    * Returns a <code>DatabaseTypeEnum</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/DatabaseTypeEnum} The enum <code>DatabaseTypeEnum</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

