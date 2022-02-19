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

/**
 * The EnvironmentVariableRequest model module.
 * @module model/EnvironmentVariableRequest
 * @version 1.0.1
 */
class EnvironmentVariableRequest {
    /**
     * Constructs a new <code>EnvironmentVariableRequest</code>.
     * @alias module:model/EnvironmentVariableRequest
     * @param key {String} key is case sensitive
     * @param value {String} value of the env variable.
     */
    constructor(key, value) { 
        
        EnvironmentVariableRequest.initialize(this, key, value);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, key, value) { 
        obj['key'] = key;
        obj['value'] = value;
    }

    /**
     * Constructs a <code>EnvironmentVariableRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EnvironmentVariableRequest} obj Optional instance to populate.
     * @return {module:model/EnvironmentVariableRequest} The populated <code>EnvironmentVariableRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EnvironmentVariableRequest();

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
 * key is case sensitive
 * @member {String} key
 */
EnvironmentVariableRequest.prototype['key'] = undefined;

/**
 * value of the env variable.
 * @member {String} value
 */
EnvironmentVariableRequest.prototype['value'] = undefined;






export default EnvironmentVariableRequest;

