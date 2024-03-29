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
 * The DeployAllRequestJobsInner model module.
 * @module model/DeployAllRequestJobsInner
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class DeployAllRequestJobsInner {
    /**
     * Constructs a new <code>DeployAllRequestJobsInner</code>.
     * @alias module:model/DeployAllRequestJobsInner
     */
    constructor() { 
        
        DeployAllRequestJobsInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeployAllRequestJobsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeployAllRequestJobsInner} obj Optional instance to populate.
     * @return {module:model/DeployAllRequestJobsInner} The populated <code>DeployAllRequestJobsInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeployAllRequestJobsInner();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('image_tag')) {
                obj['image_tag'] = ApiClient.convertToType(data['image_tag'], 'String');
            }
            if (data.hasOwnProperty('git_commit_id')) {
                obj['git_commit_id'] = ApiClient.convertToType(data['git_commit_id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * id of the job to be updated.
 * @member {String} id
 */
DeployAllRequestJobsInner.prototype['id'] = undefined;

/**
 * new tag for the job image. Use only if job is an image source. Can be empty only if the service has been already deployed (in this case the service version won't be changed)
 * @member {String} image_tag
 */
DeployAllRequestJobsInner.prototype['image_tag'] = undefined;

/**
 * Commit ID to deploy. Use only if job is a repository source. Can be empty only if the service has been already deployed (in this case the service version won't be changed)
 * @member {String} git_commit_id
 */
DeployAllRequestJobsInner.prototype['git_commit_id'] = undefined;






export default DeployAllRequestJobsInner;

