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
import Commit from './Commit';
import DeploymentHistoryHelmResponseAllOfRepository from './DeploymentHistoryHelmResponseAllOfRepository';
import StateEnum from './StateEnum';

/**
 * The DeploymentHistoryHelmResponse model module.
 * @module model/DeploymentHistoryHelmResponse
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class DeploymentHistoryHelmResponse {
    /**
     * Constructs a new <code>DeploymentHistoryHelmResponse</code>.
     * @alias module:model/DeploymentHistoryHelmResponse
     * @implements module:model/Base
     * @param id {String} 
     * @param createdAt {Date} 
     */
    constructor(id, createdAt) { 
        Base.initialize(this, id, createdAt);
        DeploymentHistoryHelmResponse.initialize(this, id, createdAt);
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
     * Constructs a <code>DeploymentHistoryHelmResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeploymentHistoryHelmResponse} obj Optional instance to populate.
     * @return {module:model/DeploymentHistoryHelmResponse} The populated <code>DeploymentHistoryHelmResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeploymentHistoryHelmResponse();
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
            if (data.hasOwnProperty('commit')) {
                obj['commit'] = Commit.constructFromObject(data['commit']);
            }
            if (data.hasOwnProperty('repository')) {
                obj['repository'] = DeploymentHistoryHelmResponseAllOfRepository.constructFromObject(data['repository']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DeploymentHistoryHelmResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DeploymentHistoryHelmResponse</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of DeploymentHistoryHelmResponse.RequiredProperties) {
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
        // validate the optional field `commit`
        if (data['commit']) { // data not null
          Commit.validateJSON(data['commit']);
        }
        // validate the optional field `repository`
        if (data['repository']) { // data not null
          DeploymentHistoryHelmResponseAllOfRepository.validateJSON(data['repository']);
        }

        return true;
    }


}

DeploymentHistoryHelmResponse.RequiredProperties = ["id", "created_at"];

/**
 * @member {String} id
 */
DeploymentHistoryHelmResponse.prototype['id'] = undefined;

/**
 * @member {Date} created_at
 */
DeploymentHistoryHelmResponse.prototype['created_at'] = undefined;

/**
 * @member {Date} updated_at
 */
DeploymentHistoryHelmResponse.prototype['updated_at'] = undefined;

/**
 * name of the helm
 * @member {String} name
 */
DeploymentHistoryHelmResponse.prototype['name'] = undefined;

/**
 * @member {module:model/StateEnum} status
 */
DeploymentHistoryHelmResponse.prototype['status'] = undefined;

/**
 * @member {module:model/Commit} commit
 */
DeploymentHistoryHelmResponse.prototype['commit'] = undefined;

/**
 * @member {module:model/DeploymentHistoryHelmResponseAllOfRepository} repository
 */
DeploymentHistoryHelmResponse.prototype['repository'] = undefined;


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




export default DeploymentHistoryHelmResponse;

