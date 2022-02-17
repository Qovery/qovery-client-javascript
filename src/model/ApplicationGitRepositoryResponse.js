/**
 * Qovery API
 * - Qovery is the fastest way to deploy your full-stack apps on any Cloud provider. - ℹ️ The API is stable and still in development. 
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support+api+documentation@qovery.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The ApplicationGitRepositoryResponse model module.
 * @module model/ApplicationGitRepositoryResponse
 * @version 1.0.0
 */
class ApplicationGitRepositoryResponse {
    /**
     * Constructs a new <code>ApplicationGitRepositoryResponse</code>.
     * @alias module:model/ApplicationGitRepositoryResponse
     */
    constructor() { 
        
        ApplicationGitRepositoryResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ApplicationGitRepositoryResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApplicationGitRepositoryResponse} obj Optional instance to populate.
     * @return {module:model/ApplicationGitRepositoryResponse} The populated <code>ApplicationGitRepositoryResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApplicationGitRepositoryResponse();

            if (data.hasOwnProperty('has_access')) {
                obj['has_access'] = ApiClient.convertToType(data['has_access'], 'Boolean');
            }
            if (data.hasOwnProperty('provider')) {
                obj['provider'] = ApiClient.convertToType(data['provider'], 'String');
            }
            if (data.hasOwnProperty('owner')) {
                obj['owner'] = ApiClient.convertToType(data['owner'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('branch')) {
                obj['branch'] = ApiClient.convertToType(data['branch'], 'String');
            }
            if (data.hasOwnProperty('root_path')) {
                obj['root_path'] = ApiClient.convertToType(data['root_path'], 'String');
            }
            if (data.hasOwnProperty('deployed_commit_id')) {
                obj['deployed_commit_id'] = ApiClient.convertToType(data['deployed_commit_id'], 'String');
            }
            if (data.hasOwnProperty('deployed_commit_date')) {
                obj['deployed_commit_date'] = ApiClient.convertToType(data['deployed_commit_date'], 'Date');
            }
            if (data.hasOwnProperty('deployed_commit_contributor')) {
                obj['deployed_commit_contributor'] = ApiClient.convertToType(data['deployed_commit_contributor'], 'String');
            }
            if (data.hasOwnProperty('deployed_commit_tag')) {
                obj['deployed_commit_tag'] = ApiClient.convertToType(data['deployed_commit_tag'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} has_access
 */
ApplicationGitRepositoryResponse.prototype['has_access'] = undefined;

/**
 * @member {module:model/ApplicationGitRepositoryResponse.ProviderEnum} provider
 */
ApplicationGitRepositoryResponse.prototype['provider'] = undefined;

/**
 * @member {String} owner
 */
ApplicationGitRepositoryResponse.prototype['owner'] = undefined;

/**
 * @member {String} url
 */
ApplicationGitRepositoryResponse.prototype['url'] = undefined;

/**
 * repository name
 * @member {String} name
 */
ApplicationGitRepositoryResponse.prototype['name'] = undefined;

/**
 * @member {String} branch
 */
ApplicationGitRepositoryResponse.prototype['branch'] = undefined;

/**
 * @member {String} root_path
 */
ApplicationGitRepositoryResponse.prototype['root_path'] = undefined;

/**
 * Git commit ID corresponding to the deployed version of the app
 * @member {String} deployed_commit_id
 */
ApplicationGitRepositoryResponse.prototype['deployed_commit_id'] = undefined;

/**
 * Git commit date corresponding to the deployed version of the app
 * @member {Date} deployed_commit_date
 */
ApplicationGitRepositoryResponse.prototype['deployed_commit_date'] = undefined;

/**
 * Git commit user corresponding to the deployed version of the app
 * @member {String} deployed_commit_contributor
 */
ApplicationGitRepositoryResponse.prototype['deployed_commit_contributor'] = undefined;

/**
 * @member {String} deployed_commit_tag
 */
ApplicationGitRepositoryResponse.prototype['deployed_commit_tag'] = undefined;





/**
 * Allowed values for the <code>provider</code> property.
 * @enum {String}
 * @readonly
 */
ApplicationGitRepositoryResponse['ProviderEnum'] = {

    /**
     * value: "GITHUB"
     * @const
     */
    "GITHUB": "GITHUB",

    /**
     * value: "GITLAB"
     * @const
     */
    "GITLAB": "GITLAB"
};



export default ApplicationGitRepositoryResponse;

