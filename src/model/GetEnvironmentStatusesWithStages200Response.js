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
import DeploymentStageWithServiceStatusesList from './DeploymentStageWithServiceStatusesList';
import Status from './Status';

/**
 * The GetEnvironmentStatusesWithStages200Response model module.
 * @module model/GetEnvironmentStatusesWithStages200Response
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class GetEnvironmentStatusesWithStages200Response {
    /**
     * Constructs a new <code>GetEnvironmentStatusesWithStages200Response</code>.
     * @alias module:model/GetEnvironmentStatusesWithStages200Response
     */
    constructor() { 
        
        GetEnvironmentStatusesWithStages200Response.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetEnvironmentStatusesWithStages200Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetEnvironmentStatusesWithStages200Response} obj Optional instance to populate.
     * @return {module:model/GetEnvironmentStatusesWithStages200Response} The populated <code>GetEnvironmentStatusesWithStages200Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetEnvironmentStatusesWithStages200Response();

            if (data.hasOwnProperty('environment')) {
                obj['environment'] = Status.constructFromObject(data['environment']);
            }
            if (data.hasOwnProperty('stages')) {
                obj['stages'] = DeploymentStageWithServiceStatusesList.constructFromObject(data['stages']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/Status} environment
 */
GetEnvironmentStatusesWithStages200Response.prototype['environment'] = undefined;

/**
 * @member {module:model/DeploymentStageWithServiceStatusesList} stages
 */
GetEnvironmentStatusesWithStages200Response.prototype['stages'] = undefined;






export default GetEnvironmentStatusesWithStages200Response;

