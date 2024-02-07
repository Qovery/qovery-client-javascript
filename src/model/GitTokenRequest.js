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
import GitProviderEnum from './GitProviderEnum';

/**
 * The GitTokenRequest model module.
 * @module model/GitTokenRequest
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class GitTokenRequest {
    /**
     * Constructs a new <code>GitTokenRequest</code>.
     * @alias module:model/GitTokenRequest
     * @param name {String} 
     * @param type {module:model/GitProviderEnum} 
     * @param token {String} The token from your git provider side
     */
    constructor(name, type, token) { 
        
        GitTokenRequest.initialize(this, name, type, token);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, type, token) { 
        obj['name'] = name;
        obj['type'] = type;
        obj['token'] = token;
    }

    /**
     * Constructs a <code>GitTokenRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GitTokenRequest} obj Optional instance to populate.
     * @return {module:model/GitTokenRequest} The populated <code>GitTokenRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GitTokenRequest();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = GitProviderEnum.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('workspace')) {
                obj['workspace'] = ApiClient.convertToType(data['workspace'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GitTokenRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GitTokenRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of GitTokenRequest.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['token'] && !(typeof data['token'] === 'string' || data['token'] instanceof String)) {
            throw new Error("Expected the field `token` to be a primitive type in the JSON string but got " + data['token']);
        }
        // ensure the json data is a string
        if (data['workspace'] && !(typeof data['workspace'] === 'string' || data['workspace'] instanceof String)) {
            throw new Error("Expected the field `workspace` to be a primitive type in the JSON string but got " + data['workspace']);
        }

        return true;
    }


}

GitTokenRequest.RequiredProperties = ["name", "type", "token"];

/**
 * @member {String} name
 */
GitTokenRequest.prototype['name'] = undefined;

/**
 * @member {String} description
 */
GitTokenRequest.prototype['description'] = undefined;

/**
 * @member {module:model/GitProviderEnum} type
 */
GitTokenRequest.prototype['type'] = undefined;

/**
 * The token from your git provider side
 * @member {String} token
 */
GitTokenRequest.prototype['token'] = undefined;

/**
 * Mandatory only for BITBUCKET git provider, to allow us to fetch repositories at creation/edition of a service
 * @member {String} workspace
 */
GitTokenRequest.prototype['workspace'] = undefined;






export default GitTokenRequest;

