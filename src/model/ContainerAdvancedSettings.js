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
 * The ContainerAdvancedSettings model module.
 * @module model/ContainerAdvancedSettings
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class ContainerAdvancedSettings {
    /**
     * Constructs a new <code>ContainerAdvancedSettings</code>.
     * @alias module:model/ContainerAdvancedSettings
     */
    constructor() { 
        
        ContainerAdvancedSettings.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ContainerAdvancedSettings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ContainerAdvancedSettings} obj Optional instance to populate.
     * @return {module:model/ContainerAdvancedSettings} The populated <code>ContainerAdvancedSettings</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ContainerAdvancedSettings();

            if (data.hasOwnProperty('deployment.delay_start_time_sec')) {
                obj['deployment.delay_start_time_sec'] = ApiClient.convertToType(data['deployment.delay_start_time_sec'], 'Number');
            }
            if (data.hasOwnProperty('build.timeout_max_sec')) {
                obj['build.timeout_max_sec'] = ApiClient.convertToType(data['build.timeout_max_sec'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} deployment.delay_start_time_sec
 */
ContainerAdvancedSettings.prototype['deployment.delay_start_time_sec'] = undefined;

/**
 * @member {Number} build.timeout_max_sec
 */
ContainerAdvancedSettings.prototype['build.timeout_max_sec'] = undefined;






export default ContainerAdvancedSettings;

