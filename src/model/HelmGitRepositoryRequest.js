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
 * The HelmGitRepositoryRequest model module.
 * @module model/HelmGitRepositoryRequest
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class HelmGitRepositoryRequest {
    /**
     * Constructs a new <code>HelmGitRepositoryRequest</code>.
     * @alias module:model/HelmGitRepositoryRequest
     * @param url {String} application git repository URL
     */
    constructor(url) { 
        
        HelmGitRepositoryRequest.initialize(this, url);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, url) { 
        obj['url'] = url;
    }

    /**
     * Constructs a <code>HelmGitRepositoryRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HelmGitRepositoryRequest} obj Optional instance to populate.
     * @return {module:model/HelmGitRepositoryRequest} The populated <code>HelmGitRepositoryRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new HelmGitRepositoryRequest();

            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('branch')) {
                obj['branch'] = ApiClient.convertToType(data['branch'], 'String');
            }
            if (data.hasOwnProperty('root_path')) {
                obj['root_path'] = ApiClient.convertToType(data['root_path'], 'String');
            }
            if (data.hasOwnProperty('git_token_id')) {
                obj['git_token_id'] = ApiClient.convertToType(data['git_token_id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * application git repository URL
 * @member {String} url
 */
HelmGitRepositoryRequest.prototype['url'] = undefined;

/**
 * Name of the branch to use. This is optional If not specified, then the branch used is the `main` or `master` one 
 * @member {String} branch
 */
HelmGitRepositoryRequest.prototype['branch'] = undefined;

/**
 * indicates the root path of the application.
 * @member {String} root_path
 * @default '/'
 */
HelmGitRepositoryRequest.prototype['root_path'] = '/';

/**
 * The git token id on Qovery side
 * @member {String} git_token_id
 */
HelmGitRepositoryRequest.prototype['git_token_id'] = undefined;






export default HelmGitRepositoryRequest;

