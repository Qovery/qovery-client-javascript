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
* Enum class StateEnum.
* @enum {}
* @readonly
*/
export default class StateEnum {
    
        /**
         * value: "BUILDING"
         * @const
         */
        "BUILDING" = "BUILDING";

    
        /**
         * value: "CANCELED"
         * @const
         */
        "CANCELED" = "CANCELED";

    
        /**
         * value: "CANCELING"
         * @const
         */
        "CANCELING" = "CANCELING";

    
        /**
         * value: "DELETED"
         * @const
         */
        "DELETED" = "DELETED";

    
        /**
         * value: "DELETE_ERROR"
         * @const
         */
        "DELETE_ERROR" = "DELETE_ERROR";

    
        /**
         * value: "DELETE_QUEUED"
         * @const
         */
        "DELETE_QUEUED" = "DELETE_QUEUED";

    
        /**
         * value: "DELETING"
         * @const
         */
        "DELETING" = "DELETING";

    
        /**
         * value: "DEPLOYED"
         * @const
         */
        "DEPLOYED" = "DEPLOYED";

    
        /**
         * value: "DEPLOYING"
         * @const
         */
        "DEPLOYING" = "DEPLOYING";

    
        /**
         * value: "DEPLOYMENT_ERROR"
         * @const
         */
        "DEPLOYMENT_ERROR" = "DEPLOYMENT_ERROR";

    
        /**
         * value: "DEPLOYMENT_QUEUED"
         * @const
         */
        "DEPLOYMENT_QUEUED" = "DEPLOYMENT_QUEUED";

    
        /**
         * value: "QUEUED"
         * @const
         */
        "QUEUED" = "QUEUED";

    
        /**
         * value: "READY"
         * @const
         */
        "READY" = "READY";

    
        /**
         * value: "RUNNING"
         * @const
         */
        "RUNNING" = "RUNNING";

    
        /**
         * value: "STOPPED"
         * @const
         */
        "STOPPED" = "STOPPED";

    
        /**
         * value: "STOPPING"
         * @const
         */
        "STOPPING" = "STOPPING";

    
        /**
         * value: "STOP_ERROR"
         * @const
         */
        "STOP_ERROR" = "STOP_ERROR";

    
        /**
         * value: "STOP_QUEUED"
         * @const
         */
        "STOP_QUEUED" = "STOP_QUEUED";

    

    /**
    * Returns a <code>StateEnum</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/StateEnum} The enum <code>StateEnum</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}
