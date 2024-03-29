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
import ApplicationGitRepositoryRequest from './ApplicationGitRepositoryRequest';

/**
 * The JobRequestAllOfSourceDocker model module.
 * @module model/JobRequestAllOfSourceDocker
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class JobRequestAllOfSourceDocker {
    /**
     * Constructs a new <code>JobRequestAllOfSourceDocker</code>.
     * @alias module:model/JobRequestAllOfSourceDocker
     */
    constructor() { 
        
        JobRequestAllOfSourceDocker.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>JobRequestAllOfSourceDocker</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JobRequestAllOfSourceDocker} obj Optional instance to populate.
     * @return {module:model/JobRequestAllOfSourceDocker} The populated <code>JobRequestAllOfSourceDocker</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new JobRequestAllOfSourceDocker();

            if (data.hasOwnProperty('dockerfile_path')) {
                obj['dockerfile_path'] = ApiClient.convertToType(data['dockerfile_path'], 'String');
            }
            if (data.hasOwnProperty('git_repository')) {
                obj['git_repository'] = ApplicationGitRepositoryRequest.constructFromObject(data['git_repository']);
            }
        }
        return obj;
    }


}

/**
 * The path of the associated Dockerfile. Only if you are using build_mode = DOCKER
 * @member {String} dockerfile_path
 */
JobRequestAllOfSourceDocker.prototype['dockerfile_path'] = undefined;

/**
 * @member {module:model/ApplicationGitRepositoryRequest} git_repository
 */
JobRequestAllOfSourceDocker.prototype['git_repository'] = undefined;






export default JobRequestAllOfSourceDocker;

