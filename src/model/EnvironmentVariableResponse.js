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
import BaseResponse from './BaseResponse';
import EnvironmentVariableRequest from './EnvironmentVariableRequest';
import EnvironmentVariableResponseAllOf from './EnvironmentVariableResponseAllOf';
import EnvironmentVariableResponseAllOfAliasedVariable from './EnvironmentVariableResponseAllOfAliasedVariable';
import EnvironmentVariableResponseAllOfOverriddenVariable from './EnvironmentVariableResponseAllOfOverriddenVariable';
import EnvironmentVariableScopeEnum from './EnvironmentVariableScopeEnum';

/**
 * The EnvironmentVariableResponse model module.
 * @module model/EnvironmentVariableResponse
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class EnvironmentVariableResponse {
    /**
     * Constructs a new <code>EnvironmentVariableResponse</code>.
     * @alias module:model/EnvironmentVariableResponse
     * @implements module:model/BaseResponse
     * @implements module:model/EnvironmentVariableRequest
     * @implements module:model/EnvironmentVariableResponseAllOf
     * @param id {String} 
     * @param createdAt {Date} 
     * @param key {String} key is case sensitive
     * @param value {String} value of the env variable.
     * @param scope {module:model/EnvironmentVariableScopeEnum} 
     */
    constructor(id, createdAt, key, value, scope) { 
        BaseResponse.initialize(this, id, createdAt);EnvironmentVariableRequest.initialize(this, key, value);EnvironmentVariableResponseAllOf.initialize(this, scope);
        EnvironmentVariableResponse.initialize(this, id, createdAt, key, value, scope);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, createdAt, key, value, scope) { 
        obj['id'] = id;
        obj['created_at'] = createdAt;
        obj['key'] = key;
        obj['value'] = value;
        obj['scope'] = scope;
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
            EnvironmentVariableResponseAllOf.constructFromObject(data, obj);

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
            if (data.hasOwnProperty('overridden_variable')) {
                obj['overridden_variable'] = EnvironmentVariableResponseAllOfOverriddenVariable.constructFromObject(data['overridden_variable']);
            }
            if (data.hasOwnProperty('aliased_variable')) {
                obj['aliased_variable'] = EnvironmentVariableResponseAllOfAliasedVariable.constructFromObject(data['aliased_variable']);
            }
            if (data.hasOwnProperty('scope')) {
                obj['scope'] = EnvironmentVariableScopeEnum.constructFromObject(data['scope']);
            }
            if (data.hasOwnProperty('service_name')) {
                obj['service_name'] = ApiClient.convertToType(data['service_name'], 'String');
            }
        }
        return obj;
    }


}

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

/**
 * @member {module:model/EnvironmentVariableResponseAllOfOverriddenVariable} overridden_variable
 */
EnvironmentVariableResponse.prototype['overridden_variable'] = undefined;

/**
 * @member {module:model/EnvironmentVariableResponseAllOfAliasedVariable} aliased_variable
 */
EnvironmentVariableResponse.prototype['aliased_variable'] = undefined;

/**
 * @member {module:model/EnvironmentVariableScopeEnum} scope
 */
EnvironmentVariableResponse.prototype['scope'] = undefined;

/**
 * @member {String} service_name
 */
EnvironmentVariableResponse.prototype['service_name'] = undefined;


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
// Implement EnvironmentVariableResponseAllOf interface:
/**
 * @member {module:model/EnvironmentVariableResponseAllOfOverriddenVariable} overridden_variable
 */
EnvironmentVariableResponseAllOf.prototype['overridden_variable'] = undefined;
/**
 * @member {module:model/EnvironmentVariableResponseAllOfAliasedVariable} aliased_variable
 */
EnvironmentVariableResponseAllOf.prototype['aliased_variable'] = undefined;
/**
 * @member {module:model/EnvironmentVariableScopeEnum} scope
 */
EnvironmentVariableResponseAllOf.prototype['scope'] = undefined;
/**
 * @member {String} service_name
 */
EnvironmentVariableResponseAllOf.prototype['service_name'] = undefined;




export default EnvironmentVariableResponse;

