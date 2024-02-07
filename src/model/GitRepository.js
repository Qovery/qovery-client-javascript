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
 * The GitRepository model module.
 * @module model/GitRepository
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class GitRepository {
    /**
     * Constructs a new <code>GitRepository</code>.
     * @alias module:model/GitRepository
     * @param id {String} 
     * @param name {String} 
     * @param url {String} 
     */
    constructor(id, name, url) { 
        
        GitRepository.initialize(this, id, name, url);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, name, url) { 
        obj['id'] = id;
        obj['name'] = name;
        obj['url'] = url;
    }

    /**
     * Constructs a <code>GitRepository</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GitRepository} obj Optional instance to populate.
     * @return {module:model/GitRepository} The populated <code>GitRepository</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GitRepository();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('default_branch')) {
                obj['default_branch'] = ApiClient.convertToType(data['default_branch'], 'String');
            }
            if (data.hasOwnProperty('is_private')) {
                obj['is_private'] = ApiClient.convertToType(data['is_private'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GitRepository</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GitRepository</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of GitRepository.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }
        // ensure the json data is a string
        if (data['default_branch'] && !(typeof data['default_branch'] === 'string' || data['default_branch'] instanceof String)) {
            throw new Error("Expected the field `default_branch` to be a primitive type in the JSON string but got " + data['default_branch']);
        }

        return true;
    }


}

GitRepository.RequiredProperties = ["id", "name", "url"];

/**
 * @member {String} id
 */
GitRepository.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GitRepository.prototype['name'] = undefined;

/**
 * @member {String} url
 */
GitRepository.prototype['url'] = undefined;

/**
 * @member {String} default_branch
 */
GitRepository.prototype['default_branch'] = undefined;

/**
 * @member {Boolean} is_private
 */
GitRepository.prototype['is_private'] = undefined;






export default GitRepository;

