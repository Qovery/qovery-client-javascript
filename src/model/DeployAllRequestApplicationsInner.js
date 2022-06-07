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
 * The DeployAllRequestApplicationsInner model module.
 * @module model/DeployAllRequestApplicationsInner
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class DeployAllRequestApplicationsInner {
    /**
     * Constructs a new <code>DeployAllRequestApplicationsInner</code>.
     * @alias module:model/DeployAllRequestApplicationsInner
     * @param applicationId {String} id of the application to be deployed.
     * @param gitCommitId {String} Commit ID to deploy.
     */
    constructor(applicationId, gitCommitId) { 
        
        DeployAllRequestApplicationsInner.initialize(this, applicationId, gitCommitId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, applicationId, gitCommitId) { 
        obj['application_id'] = applicationId;
        obj['git_commit_id'] = gitCommitId;
    }

    /**
     * Constructs a <code>DeployAllRequestApplicationsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeployAllRequestApplicationsInner} obj Optional instance to populate.
     * @return {module:model/DeployAllRequestApplicationsInner} The populated <code>DeployAllRequestApplicationsInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeployAllRequestApplicationsInner();

            if (data.hasOwnProperty('application_id')) {
                obj['application_id'] = ApiClient.convertToType(data['application_id'], 'String');
            }
            if (data.hasOwnProperty('git_commit_id')) {
                obj['git_commit_id'] = ApiClient.convertToType(data['git_commit_id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * id of the application to be deployed.
 * @member {String} application_id
 */
DeployAllRequestApplicationsInner.prototype['application_id'] = undefined;

/**
 * Commit ID to deploy.
 * @member {String} git_commit_id
 */
DeployAllRequestApplicationsInner.prototype['git_commit_id'] = undefined;






export default DeployAllRequestApplicationsInner;
