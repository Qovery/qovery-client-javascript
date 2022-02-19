/**
 * Qovery API
 * - Qovery is the fastest way to deploy your full-stack apps on any Cloud provider. - ℹ️ The API is stable and still in development. 
 *
 * The version of the OpenAPI document: 1.0.1
 * Contact: support+api+documentation@qovery.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import BaseResponse from './BaseResponse';
import EnvironmentVariableRequest from './EnvironmentVariableRequest';

/**
 * The EnvironmentVariableResponse model module.
 * @module model/EnvironmentVariableResponse
 * @version 1.0.1
 */
class EnvironmentVariableResponse {
    /**
     * Constructs a new <code>EnvironmentVariableResponse</code>.
     * @alias module:model/EnvironmentVariableResponse
     * @implements module:model/BaseResponse
     * @implements module:model/EnvironmentVariableRequest
     * @param id {String} 
     * @param createdAt {Date} 
     * @param key {String} key is case sensitive
     * @param value {String} value of the env variable.
     */
    constructor(id, createdAt, key, value) { 
        BaseResponse.initialize(this, id, createdAt);EnvironmentVariableRequest.initialize(this, key, value);
        EnvironmentVariableResponse.initialize(this, id, createdAt, key, value);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, createdAt, key, value) { 
        obj['scope'] = scope;
        obj['id'] = id;
        obj['created_at'] = createdAt;
        obj['key'] = key;
        obj['value'] = value;
    }

    /**
     * Constructs a <code>EnvironmentVariableResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EnvironmentVariableResponse} obj Optional instance to populate.
     * @return {module:model/EnvironmentVariableResponse} The populated <code>EnvironmentVariableResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EnvironmentVariableResponse();
            BaseResponse.constructFromObject(data, obj);
            EnvironmentVariableRequest.constructFromObject(data, obj);

            if (data.hasOwnProperty('overridden_variable')) {
                obj['overridden_variable'] = ApiClient.convertToType(data['overridden_variable'], Object);
            }
            if (data.hasOwnProperty('aliased_variable')) {
                obj['aliased_variable'] = ApiClient.convertToType(data['aliased_variable'], Object);
            }
            if (data.hasOwnProperty('scope')) {
                obj['scope'] = ApiClient.convertToType(data['scope'], 'String');
            }
            if (data.hasOwnProperty('service_name')) {
                obj['service_name'] = ApiClient.convertToType(data['service_name'], 'String');
            }
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
        }
        return obj;
    }


}

/**
 * @member {Object} overridden_variable
 */
EnvironmentVariableResponse.prototype['overridden_variable'] = undefined;

/**
 * @member {Object} aliased_variable
 */
EnvironmentVariableResponse.prototype['aliased_variable'] = undefined;

/**
 * @member {module:model/EnvironmentVariableResponse.ScopeEnum} scope
 */
EnvironmentVariableResponse.prototype['scope'] = undefined;

/**
 * @member {String} service_name
 */
EnvironmentVariableResponse.prototype['service_name'] = undefined;

/**
 * @member {String} id
 */
EnvironmentVariableResponse.prototype['id'] = undefined;

/**
 * @member {Date} created_at
 */
EnvironmentVariableResponse.prototype['created_at'] = undefined;

/**
 * @member {Date} updated_at
 */
EnvironmentVariableResponse.prototype['updated_at'] = undefined;

/**
 * key is case sensitive
 * @member {String} key
 */
EnvironmentVariableResponse.prototype['key'] = undefined;

/**
 * value of the env variable.
 * @member {String} value
 */
EnvironmentVariableResponse.prototype['value'] = undefined;


// Implement BaseResponse interface:
/**
 * @member {String} id
 */
BaseResponse.prototype['id'] = undefined;
/**
 * @member {Date} created_at
 */
BaseResponse.prototype['created_at'] = undefined;
/**
 * @member {Date} updated_at
 */
BaseResponse.prototype['updated_at'] = undefined;
// Implement EnvironmentVariableRequest interface:
/**
 * key is case sensitive
 * @member {String} key
 */
EnvironmentVariableRequest.prototype['key'] = undefined;
/**
 * value of the env variable.
 * @member {String} value
 */
EnvironmentVariableRequest.prototype['value'] = undefined;



/**
 * Allowed values for the <code>scope</code> property.
 * @enum {String}
 * @readonly
 */
EnvironmentVariableResponse['ScopeEnum'] = {

    /**
     * value: "BUILT_IN"
     * @const
     */
    "BUILT_IN": "BUILT_IN",

    /**
     * value: "ENVIRONMENT"
     * @const
     */
    "ENVIRONMENT": "ENVIRONMENT",

    /**
     * value: "PROJECT"
     * @const
     */
    "PROJECT": "PROJECT",

    /**
     * value: "APPLICATION"
     * @const
     */
    "APPLICATION": "APPLICATION"
};



export default EnvironmentVariableResponse;

