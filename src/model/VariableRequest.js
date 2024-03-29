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

/**
 * The VariableRequest model module.
 * @module model/VariableRequest
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class VariableRequest {
    /**
     * Constructs a new <code>VariableRequest</code>.
     * @alias module:model/VariableRequest
     * @param key {String} the key of the environment variable
     * @param value {String} the value of the environment variable
     * @param isSecret {Boolean} if true, the variable will be considered as a secret and will not be accessible after its creation. Only your applications will be able to access its value at build and run time.
     * @param variableScope {module:model/APIVariableScopeEnum} 
     * @param variableParentId {String} based on the selected scope, it contains the ID of the service, environment or project where the variable is attached
     */
    constructor(key, value, isSecret, variableScope, variableParentId) { 
        
        VariableRequest.initialize(this, key, value, isSecret, variableScope, variableParentId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, key, value, isSecret, variableScope, variableParentId) { 
        obj['key'] = key;
        obj['value'] = value;
        obj['is_secret'] = isSecret;
        obj['variable_scope'] = variableScope;
        obj['variable_parent_id'] = variableParentId;
    }

    /**
     * Constructs a <code>VariableRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VariableRequest} obj Optional instance to populate.
     * @return {module:model/VariableRequest} The populated <code>VariableRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VariableRequest();

            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
            if (data.hasOwnProperty('mount_path')) {
                obj['mount_path'] = ApiClient.convertToType(data['mount_path'], 'String');
            }
            if (data.hasOwnProperty('is_secret')) {
                obj['is_secret'] = ApiClient.convertToType(data['is_secret'], 'Boolean');
            }
            if (data.hasOwnProperty('variable_scope')) {
                obj['variable_scope'] = APIVariableScopeEnum.constructFromObject(data['variable_scope']);
            }
            if (data.hasOwnProperty('variable_parent_id')) {
                obj['variable_parent_id'] = ApiClient.convertToType(data['variable_parent_id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * the key of the environment variable
 * @member {String} key
 */
VariableRequest.prototype['key'] = undefined;

/**
 * the value of the environment variable
 * @member {String} value
 */
VariableRequest.prototype['value'] = undefined;

/**
 * the path where the file will be mounted (only if type =file)
 * @member {String} mount_path
 */
VariableRequest.prototype['mount_path'] = undefined;

/**
 * if true, the variable will be considered as a secret and will not be accessible after its creation. Only your applications will be able to access its value at build and run time.
 * @member {Boolean} is_secret
 */
VariableRequest.prototype['is_secret'] = undefined;

/**
 * @member {module:model/APIVariableScopeEnum} variable_scope
 */
VariableRequest.prototype['variable_scope'] = undefined;

/**
 * based on the selected scope, it contains the ID of the service, environment or project where the variable is attached
 * @member {String} variable_parent_id
 */
VariableRequest.prototype['variable_parent_id'] = undefined;






export default VariableRequest;

