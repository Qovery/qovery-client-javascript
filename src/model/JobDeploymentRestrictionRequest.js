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
import DeploymentRestrictionModeEnum from './DeploymentRestrictionModeEnum';
import DeploymentRestrictionTypeEnum from './DeploymentRestrictionTypeEnum';

/**
 * The JobDeploymentRestrictionRequest model module.
 * @module model/JobDeploymentRestrictionRequest
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class JobDeploymentRestrictionRequest {
    /**
     * Constructs a new <code>JobDeploymentRestrictionRequest</code>.
     * @alias module:model/JobDeploymentRestrictionRequest
     * @param mode {module:model/DeploymentRestrictionModeEnum} 
     * @param type {module:model/DeploymentRestrictionTypeEnum} 
     * @param value {String} For `PATH` restrictions, the value must not start with `/`
     */
    constructor(mode, type, value) { 
        
        JobDeploymentRestrictionRequest.initialize(this, mode, type, value);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, mode, type, value) { 
        obj['mode'] = mode;
        obj['type'] = type;
        obj['value'] = value;
    }

    /**
     * Constructs a <code>JobDeploymentRestrictionRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JobDeploymentRestrictionRequest} obj Optional instance to populate.
     * @return {module:model/JobDeploymentRestrictionRequest} The populated <code>JobDeploymentRestrictionRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new JobDeploymentRestrictionRequest();

            if (data.hasOwnProperty('mode')) {
                obj['mode'] = DeploymentRestrictionModeEnum.constructFromObject(data['mode']);
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = DeploymentRestrictionTypeEnum.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/DeploymentRestrictionModeEnum} mode
 */
JobDeploymentRestrictionRequest.prototype['mode'] = undefined;

/**
 * @member {module:model/DeploymentRestrictionTypeEnum} type
 */
JobDeploymentRestrictionRequest.prototype['type'] = undefined;

/**
 * For `PATH` restrictions, the value must not start with `/`
 * @member {String} value
 */
JobDeploymentRestrictionRequest.prototype['value'] = undefined;






export default JobDeploymentRestrictionRequest;

