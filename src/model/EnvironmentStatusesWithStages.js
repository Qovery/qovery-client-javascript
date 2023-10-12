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
import DeploymentStageWithServicesStatuses from './DeploymentStageWithServicesStatuses';
import EnvironmentStatus from './EnvironmentStatus';

/**
 * The EnvironmentStatusesWithStages model module.
 * @module model/EnvironmentStatusesWithStages
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class EnvironmentStatusesWithStages {
    /**
     * Constructs a new <code>EnvironmentStatusesWithStages</code>.
     * @alias module:model/EnvironmentStatusesWithStages
     */
    constructor() { 
        
        EnvironmentStatusesWithStages.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EnvironmentStatusesWithStages</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EnvironmentStatusesWithStages} obj Optional instance to populate.
     * @return {module:model/EnvironmentStatusesWithStages} The populated <code>EnvironmentStatusesWithStages</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EnvironmentStatusesWithStages();

            if (data.hasOwnProperty('environment')) {
                obj['environment'] = EnvironmentStatus.constructFromObject(data['environment']);
            }
            if (data.hasOwnProperty('stages')) {
                obj['stages'] = ApiClient.convertToType(data['stages'], [DeploymentStageWithServicesStatuses]);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/EnvironmentStatus} environment
 */
EnvironmentStatusesWithStages.prototype['environment'] = undefined;

/**
 * @member {Array.<module:model/DeploymentStageWithServicesStatuses>} stages
 */
EnvironmentStatusesWithStages.prototype['stages'] = undefined;






export default EnvironmentStatusesWithStages;

