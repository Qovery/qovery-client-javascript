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
 * The CommitResponse model module.
 * @module model/CommitResponse
 * @version 1.0.0
 */
class CommitResponse {
    /**
     * Constructs a new <code>CommitResponse</code>.
     * @alias module:model/CommitResponse
     * @param createdAt {Date} 
     * @param gitCommitId {String} 
     * @param tag {String} 
     * @param message {String} 
     * @param authorName {String} 
     */
    constructor(createdAt, gitCommitId, tag, message, authorName) { 
        
        CommitResponse.initialize(this, createdAt, gitCommitId, tag, message, authorName);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, createdAt, gitCommitId, tag, message, authorName) { 
        obj['created_at'] = createdAt;
        obj['git_commit_id'] = gitCommitId;
        obj['tag'] = tag;
        obj['message'] = message;
        obj['author_name'] = authorName;
    }

    /**
     * Constructs a <code>CommitResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CommitResponse} obj Optional instance to populate.
     * @return {module:model/CommitResponse} The populated <code>CommitResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CommitResponse();

            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('git_commit_id')) {
                obj['git_commit_id'] = ApiClient.convertToType(data['git_commit_id'], 'String');
            }
            if (data.hasOwnProperty('tag')) {
                obj['tag'] = ApiClient.convertToType(data['tag'], 'String');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('author_name')) {
                obj['author_name'] = ApiClient.convertToType(data['author_name'], 'String');
            }
            if (data.hasOwnProperty('author_avatar_url')) {
                obj['author_avatar_url'] = ApiClient.convertToType(data['author_avatar_url'], 'String');
            }
            if (data.hasOwnProperty('commit_page_url')) {
                obj['commit_page_url'] = ApiClient.convertToType(data['commit_page_url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Date} created_at
 */
CommitResponse.prototype['created_at'] = undefined;

/**
 * @member {String} git_commit_id
 */
CommitResponse.prototype['git_commit_id'] = undefined;

/**
 * @member {String} tag
 */
CommitResponse.prototype['tag'] = undefined;

/**
 * @member {String} message
 */
CommitResponse.prototype['message'] = undefined;

/**
 * @member {String} author_name
 */
CommitResponse.prototype['author_name'] = undefined;

/**
 * @member {String} author_avatar_url
 */
CommitResponse.prototype['author_avatar_url'] = undefined;

/**
 * @member {String} commit_page_url
 */
CommitResponse.prototype['commit_page_url'] = undefined;






export default CommitResponse;

