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
* Enum class ServiceStepMetricNameEnum.
* @enum {}
* @readonly
*/
export default class ServiceStepMetricNameEnum {
    
        /**
         * value: "REGISTRY_CREATE_REPOSITORY"
         * @const
         */
        "REGISTRY_CREATE_REPOSITORY" = "REGISTRY_CREATE_REPOSITORY";

    
        /**
         * value: "GIT_CLONE"
         * @const
         */
        "GIT_CLONE" = "GIT_CLONE";

    
        /**
         * value: "BUILD_QUEUEING"
         * @const
         */
        "BUILD_QUEUEING" = "BUILD_QUEUEING";

    
        /**
         * value: "BUILD"
         * @const
         */
        "BUILD" = "BUILD";

    
        /**
         * value: "DEPLOYMENT_QUEUEING"
         * @const
         */
        "DEPLOYMENT_QUEUEING" = "DEPLOYMENT_QUEUEING";

    
        /**
         * value: "DEPLOYMENT"
         * @const
         */
        "DEPLOYMENT" = "DEPLOYMENT";

    
        /**
         * value: "ROUTER_DEPLOYMENT"
         * @const
         */
        "ROUTER_DEPLOYMENT" = "ROUTER_DEPLOYMENT";

    
        /**
         * value: "MIRROR_IMAGE"
         * @const
         */
        "MIRROR_IMAGE" = "MIRROR_IMAGE";

    

    /**
    * Returns a <code>ServiceStepMetricNameEnum</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/ServiceStepMetricNameEnum} The enum <code>ServiceStepMetricNameEnum</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

