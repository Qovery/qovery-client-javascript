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
 * The HelmResponseAllOfValuesOverrideFileGit model module.
 * @module model/HelmResponseAllOfValuesOverrideFileGit
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class HelmResponseAllOfValuesOverrideFileGit {
    /**
     * Constructs a new <code>HelmResponseAllOfValuesOverrideFileGit</code>.
     * @alias module:model/HelmResponseAllOfValuesOverrideFileGit
     */
    constructor() { 
        
        HelmResponseAllOfValuesOverrideFileGit.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>HelmResponseAllOfValuesOverrideFileGit</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HelmResponseAllOfValuesOverrideFileGit} obj Optional instance to populate.
     * @return {module:model/HelmResponseAllOfValuesOverrideFileGit} The populated <code>HelmResponseAllOfValuesOverrideFileGit</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new HelmResponseAllOfValuesOverrideFileGit();

            if (data.hasOwnProperty('git_repository')) {
                obj['git_repository'] = ApplicationGitRepositoryRequest.constructFromObject(data['git_repository']);
            }
            if (data.hasOwnProperty('paths')) {
                obj['paths'] = ApiClient.convertToType(data['paths'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/ApplicationGitRepositoryRequest} git_repository
 */
HelmResponseAllOfValuesOverrideFileGit.prototype['git_repository'] = undefined;

/**
 * List of path inside your git repository to locate values file. Must start by a /
 * @member {Array.<String>} paths
 */
HelmResponseAllOfValuesOverrideFileGit.prototype['paths'] = undefined;






export default HelmResponseAllOfValuesOverrideFileGit;
