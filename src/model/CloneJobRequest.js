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
 * The CloneJobRequest model module.
 * @module model/CloneJobRequest
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class CloneJobRequest {
    /**
     * Constructs a new <code>CloneJobRequest</code>.
     * @alias module:model/CloneJobRequest
     * @param name {String} 
     * @param environmentId {String} 
     */
    constructor(name, environmentId) { 
        
        CloneJobRequest.initialize(this, name, environmentId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, environmentId) { 
        obj['name'] = name;
        obj['environment_id'] = environmentId;
    }

    /**
     * Constructs a <code>CloneJobRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CloneJobRequest} obj Optional instance to populate.
     * @return {module:model/CloneJobRequest} The populated <code>CloneJobRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CloneJobRequest();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('environment_id')) {
                obj['environment_id'] = ApiClient.convertToType(data['environment_id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
CloneJobRequest.prototype['name'] = undefined;

/**
 * @member {String} environment_id
 */
CloneJobRequest.prototype['environment_id'] = undefined;






export default CloneJobRequest;
