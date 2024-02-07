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
import APIVariableScopeEnum from './APIVariableScopeEnum';
import APIVariableTypeEnum from './APIVariableTypeEnum';
import Base from './Base';
import LinkedServiceTypeEnum from './LinkedServiceTypeEnum';
import VariableAlias from './VariableAlias';
import VariableOverride from './VariableOverride';

/**
 * The VariableResponse model module.
 * @module model/VariableResponse
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class VariableResponse {
    /**
     * Constructs a new <code>VariableResponse</code>.
     * @alias module:model/VariableResponse
     * @implements module:model/Base
     * @param id {String} 
     * @param createdAt {Date} 
     * @param key {String} 
     * @param value {String} 
     * @param scope {module:model/APIVariableScopeEnum} 
     * @param isSecret {Boolean} 
     */
    constructor(id, createdAt, key, value, scope, isSecret) { 
        Base.initialize(this, id, createdAt);
        VariableResponse.initialize(this, id, createdAt, key, value, scope, isSecret);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, createdAt, key, value, scope, isSecret) { 
        obj['id'] = id;
        obj['created_at'] = createdAt;
        obj['key'] = key;
        obj['value'] = value;
        obj['scope'] = scope;
        obj['is_secret'] = isSecret;
    }

    /**
     * Constructs a <code>VariableResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VariableResponse} obj Optional instance to populate.
     * @return {module:model/VariableResponse} The populated <code>VariableResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VariableResponse();
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
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
            if (data.hasOwnProperty('mount_path')) {
                obj['mount_path'] = ApiClient.convertToType(data['mount_path'], 'String');
            }
            if (data.hasOwnProperty('overridden_variable')) {
                obj['overridden_variable'] = VariableOverride.constructFromObject(data['overridden_variable']);
            }
            if (data.hasOwnProperty('aliased_variable')) {
                obj['aliased_variable'] = VariableAlias.constructFromObject(data['aliased_variable']);
            }
            if (data.hasOwnProperty('scope')) {
                obj['scope'] = APIVariableScopeEnum.constructFromObject(data['scope']);
            }
            if (data.hasOwnProperty('variable_type')) {
                obj['variable_type'] = APIVariableTypeEnum.constructFromObject(data['variable_type']);
            }
            if (data.hasOwnProperty('service_id')) {
                obj['service_id'] = ApiClient.convertToType(data['service_id'], 'String');
            }
            if (data.hasOwnProperty('service_name')) {
                obj['service_name'] = ApiClient.convertToType(data['service_name'], 'String');
            }
            if (data.hasOwnProperty('service_type')) {
                obj['service_type'] = LinkedServiceTypeEnum.constructFromObject(data['service_type']);
            }
            if (data.hasOwnProperty('owned_by')) {
                obj['owned_by'] = ApiClient.convertToType(data['owned_by'], 'String');
            }
            if (data.hasOwnProperty('is_secret')) {
                obj['is_secret'] = ApiClient.convertToType(data['is_secret'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>VariableResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>VariableResponse</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of VariableResponse.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['key'] && !(typeof data['key'] === 'string' || data['key'] instanceof String)) {
            throw new Error("Expected the field `key` to be a primitive type in the JSON string but got " + data['key']);
        }
        // ensure the json data is a string
        if (data['value'] && !(typeof data['value'] === 'string' || data['value'] instanceof String)) {
            throw new Error("Expected the field `value` to be a primitive type in the JSON string but got " + data['value']);
        }
        // ensure the json data is a string
        if (data['mount_path'] && !(typeof data['mount_path'] === 'string' || data['mount_path'] instanceof String)) {
            throw new Error("Expected the field `mount_path` to be a primitive type in the JSON string but got " + data['mount_path']);
        }
        // validate the optional field `overridden_variable`
        if (data['overridden_variable']) { // data not null
          VariableOverride.validateJSON(data['overridden_variable']);
        }
        // validate the optional field `aliased_variable`
        if (data['aliased_variable']) { // data not null
          VariableAlias.validateJSON(data['aliased_variable']);
        }
        // ensure the json data is a string
        if (data['service_id'] && !(typeof data['service_id'] === 'string' || data['service_id'] instanceof String)) {
            throw new Error("Expected the field `service_id` to be a primitive type in the JSON string but got " + data['service_id']);
        }
        // ensure the json data is a string
        if (data['service_name'] && !(typeof data['service_name'] === 'string' || data['service_name'] instanceof String)) {
            throw new Error("Expected the field `service_name` to be a primitive type in the JSON string but got " + data['service_name']);
        }
        // ensure the json data is a string
        if (data['owned_by'] && !(typeof data['owned_by'] === 'string' || data['owned_by'] instanceof String)) {
            throw new Error("Expected the field `owned_by` to be a primitive type in the JSON string but got " + data['owned_by']);
        }

        return true;
    }


}

VariableResponse.RequiredProperties = ["id", "created_at", "key", "value", "scope", "is_secret"];

/**
 * @member {String} id
 */
VariableResponse.prototype['id'] = undefined;

/**
 * @member {Date} created_at
 */
VariableResponse.prototype['created_at'] = undefined;

/**
 * @member {Date} updated_at
 */
VariableResponse.prototype['updated_at'] = undefined;

/**
 * @member {String} key
 */
VariableResponse.prototype['key'] = undefined;

/**
 * @member {String} value
 */
VariableResponse.prototype['value'] = undefined;

/**
 * @member {String} mount_path
 */
VariableResponse.prototype['mount_path'] = undefined;

/**
 * @member {module:model/VariableOverride} overridden_variable
 */
VariableResponse.prototype['overridden_variable'] = undefined;

/**
 * @member {module:model/VariableAlias} aliased_variable
 */
VariableResponse.prototype['aliased_variable'] = undefined;

/**
 * @member {module:model/APIVariableScopeEnum} scope
 */
VariableResponse.prototype['scope'] = undefined;

/**
 * @member {module:model/APIVariableTypeEnum} variable_type
 */
VariableResponse.prototype['variable_type'] = undefined;

/**
 * The id of the service referenced by this variable.
 * @member {String} service_id
 */
VariableResponse.prototype['service_id'] = undefined;

/**
 * The name of the service referenced by this variable.
 * @member {String} service_name
 */
VariableResponse.prototype['service_name'] = undefined;

/**
 * @member {module:model/LinkedServiceTypeEnum} service_type
 */
VariableResponse.prototype['service_type'] = undefined;

/**
 * Entity that created/own the variable (i.e: Qovery, Doppler)
 * @member {String} owned_by
 */
VariableResponse.prototype['owned_by'] = undefined;

/**
 * @member {Boolean} is_secret
 */
VariableResponse.prototype['is_secret'] = undefined;


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




export default VariableResponse;

