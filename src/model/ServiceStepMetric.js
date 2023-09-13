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
import ServiceStepMetricNameEnum from './ServiceStepMetricNameEnum';
import StepMetricStatusEnum from './StepMetricStatusEnum';

/**
 * The ServiceStepMetric model module.
 * @module model/ServiceStepMetric
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class ServiceStepMetric {
    /**
     * Constructs a new <code>ServiceStepMetric</code>.
     * @alias module:model/ServiceStepMetric
     */
    constructor() { 
        
        ServiceStepMetric.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ServiceStepMetric</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ServiceStepMetric} obj Optional instance to populate.
     * @return {module:model/ServiceStepMetric} The populated <code>ServiceStepMetric</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ServiceStepMetric();

            if (data.hasOwnProperty('step_name')) {
                obj['step_name'] = ServiceStepMetricNameEnum.constructFromObject(data['step_name']);
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = StepMetricStatusEnum.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('duration_sec')) {
                obj['duration_sec'] = ApiClient.convertToType(data['duration_sec'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/ServiceStepMetricNameEnum} step_name
 */
ServiceStepMetric.prototype['step_name'] = undefined;

/**
 * @member {module:model/StepMetricStatusEnum} status
 */
ServiceStepMetric.prototype['status'] = undefined;

/**
 * The duration of the step in seconds.
 * @member {Number} duration_sec
 */
ServiceStepMetric.prototype['duration_sec'] = undefined;






export default ServiceStepMetric;
