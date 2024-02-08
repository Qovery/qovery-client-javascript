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
 * The EnvironmentServiceIdsAllRequest model module.
 * @module model/EnvironmentServiceIdsAllRequest
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class EnvironmentServiceIdsAllRequest {
    /**
     * Constructs a new <code>EnvironmentServiceIdsAllRequest</code>.
     * @alias module:model/EnvironmentServiceIdsAllRequest
     */
    constructor() { 
        
        EnvironmentServiceIdsAllRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EnvironmentServiceIdsAllRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EnvironmentServiceIdsAllRequest} obj Optional instance to populate.
     * @return {module:model/EnvironmentServiceIdsAllRequest} The populated <code>EnvironmentServiceIdsAllRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EnvironmentServiceIdsAllRequest();

            if (data.hasOwnProperty('application_ids')) {
                obj['application_ids'] = ApiClient.convertToType(data['application_ids'], ['String']);
            }
            if (data.hasOwnProperty('container_ids')) {
                obj['container_ids'] = ApiClient.convertToType(data['container_ids'], ['String']);
            }
            if (data.hasOwnProperty('database_ids')) {
                obj['database_ids'] = ApiClient.convertToType(data['database_ids'], ['String']);
            }
            if (data.hasOwnProperty('job_ids')) {
                obj['job_ids'] = ApiClient.convertToType(data['job_ids'], ['String']);
            }
            if (data.hasOwnProperty('helm_ids')) {
                obj['helm_ids'] = ApiClient.convertToType(data['helm_ids'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<String>} application_ids
 */
EnvironmentServiceIdsAllRequest.prototype['application_ids'] = undefined;

/**
 * @member {Array.<String>} container_ids
 */
EnvironmentServiceIdsAllRequest.prototype['container_ids'] = undefined;

/**
 * @member {Array.<String>} database_ids
 */
EnvironmentServiceIdsAllRequest.prototype['database_ids'] = undefined;

/**
 * @member {Array.<String>} job_ids
 */
EnvironmentServiceIdsAllRequest.prototype['job_ids'] = undefined;

/**
 * @member {Array.<String>} helm_ids
 */
EnvironmentServiceIdsAllRequest.prototype['helm_ids'] = undefined;






export default EnvironmentServiceIdsAllRequest;

