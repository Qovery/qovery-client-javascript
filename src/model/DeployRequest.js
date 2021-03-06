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
 * The DeployRequest model module.
 * @module model/DeployRequest
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class DeployRequest {
    /**
     * Constructs a new <code>DeployRequest</code>.
     * @alias module:model/DeployRequest
     * @param gitCommitId {String} Commit ID to deploy
     */
    constructor(gitCommitId) { 
        
        DeployRequest.initialize(this, gitCommitId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, gitCommitId) { 
        obj['git_commit_id'] = gitCommitId;
    }

    /**
     * Constructs a <code>DeployRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeployRequest} obj Optional instance to populate.
     * @return {module:model/DeployRequest} The populated <code>DeployRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeployRequest();

            if (data.hasOwnProperty('git_commit_id')) {
                obj['git_commit_id'] = ApiClient.convertToType(data['git_commit_id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Commit ID to deploy
 * @member {String} git_commit_id
 */
DeployRequest.prototype['git_commit_id'] = undefined;






export default DeployRequest;

