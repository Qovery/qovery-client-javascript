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
import Base from './Base';
import StateEnum from './StateEnum';

/**
 * The DeploymentHistoryContainer model module.
 * @module model/DeploymentHistoryContainer
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class DeploymentHistoryContainer {
    /**
     * Constructs a new <code>DeploymentHistoryContainer</code>.
     * @alias module:model/DeploymentHistoryContainer
     * @implements module:model/Base
     * @param id {String} 
     * @param createdAt {Date} 
     */
    constructor(id, createdAt) { 
        Base.initialize(this, id, createdAt);
        DeploymentHistoryContainer.initialize(this, id, createdAt);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, createdAt) { 
        obj['id'] = id;
        obj['created_at'] = createdAt;
    }

    /**
     * Constructs a <code>DeploymentHistoryContainer</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeploymentHistoryContainer} obj Optional instance to populate.
     * @return {module:model/DeploymentHistoryContainer} The populated <code>DeploymentHistoryContainer</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeploymentHistoryContainer();
            Base.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = StateEnum.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('image_name')) {
                obj['image_name'] = ApiClient.convertToType(data['image_name'], 'String');
            }
            if (data.hasOwnProperty('tag')) {
                obj['tag'] = ApiClient.convertToType(data['tag'], 'String');
            }
            if (data.hasOwnProperty('arguments')) {
                obj['arguments'] = ApiClient.convertToType(data['arguments'], ['String']);
            }
            if (data.hasOwnProperty('entrypoint')) {
                obj['entrypoint'] = ApiClient.convertToType(data['entrypoint'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DeploymentHistoryContainer</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DeploymentHistoryContainer</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of DeploymentHistoryContainer.RequiredProperties) {
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
        if (data['image_name'] && !(typeof data['image_name'] === 'string' || data['image_name'] instanceof String)) {
            throw new Error("Expected the field `image_name` to be a primitive type in the JSON string but got " + data['image_name']);
        }
        // ensure the json data is a string
        if (data['tag'] && !(typeof data['tag'] === 'string' || data['tag'] instanceof String)) {
            throw new Error("Expected the field `tag` to be a primitive type in the JSON string but got " + data['tag']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['arguments'])) {
            throw new Error("Expected the field `arguments` to be an array in the JSON data but got " + data['arguments']);
        }
        // ensure the json data is a string
        if (data['entrypoint'] && !(typeof data['entrypoint'] === 'string' || data['entrypoint'] instanceof String)) {
            throw new Error("Expected the field `entrypoint` to be a primitive type in the JSON string but got " + data['entrypoint']);
        }

        return true;
    }


}

DeploymentHistoryContainer.RequiredProperties = ["id", "created_at"];

/**
 * @member {String} id
 */
DeploymentHistoryContainer.prototype['id'] = undefined;

/**
 * @member {Date} created_at
 */
DeploymentHistoryContainer.prototype['created_at'] = undefined;

/**
 * @member {Date} updated_at
 */
DeploymentHistoryContainer.prototype['updated_at'] = undefined;

/**
 * name of the container
 * @member {String} name
 */
DeploymentHistoryContainer.prototype['name'] = undefined;

/**
 * @member {module:model/StateEnum} status
 */
DeploymentHistoryContainer.prototype['status'] = undefined;

/**
 * @member {String} image_name
 */
DeploymentHistoryContainer.prototype['image_name'] = undefined;

/**
 * @member {String} tag
 */
DeploymentHistoryContainer.prototype['tag'] = undefined;

/**
 * @member {Array.<String>} arguments
 */
DeploymentHistoryContainer.prototype['arguments'] = undefined;

/**
 * @member {String} entrypoint
 */
DeploymentHistoryContainer.prototype['entrypoint'] = undefined;


// Implement Base interface:
/**
 * @member {String} id
 */
Base.prototype['id'] = undefined;
/**
 * @member {Date} created_at
 */
Base.prototype['created_at'] = undefined;
/**
 * @member {Date} updated_at
 */
Base.prototype['updated_at'] = undefined;




export default DeploymentHistoryContainer;

