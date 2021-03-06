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
 * The Commit model module.
 * @module model/Commit
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class Commit {
    /**
     * Constructs a new <code>Commit</code>.
     * @alias module:model/Commit
     * @param createdAt {Date} 
     * @param gitCommitId {String} 
     * @param tag {String} 
     * @param message {String} 
     * @param authorName {String} 
     */
    constructor(createdAt, gitCommitId, tag, message, authorName) { 
        
        Commit.initialize(this, createdAt, gitCommitId, tag, message, authorName);
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
     * Constructs a <code>Commit</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Commit} obj Optional instance to populate.
     * @return {module:model/Commit} The populated <code>Commit</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Commit();

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
Commit.prototype['created_at'] = undefined;

/**
 * @member {String} git_commit_id
 */
Commit.prototype['git_commit_id'] = undefined;

/**
 * @member {String} tag
 */
Commit.prototype['tag'] = undefined;

/**
 * @member {String} message
 */
Commit.prototype['message'] = undefined;

/**
 * @member {String} author_name
 */
Commit.prototype['author_name'] = undefined;

/**
 * @member {String} author_avatar_url
 */
Commit.prototype['author_avatar_url'] = undefined;

/**
 * @member {String} commit_page_url
 */
Commit.prototype['commit_page_url'] = undefined;






export default Commit;

