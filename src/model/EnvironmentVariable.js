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
import EnvironmentVariableAlias from './EnvironmentVariableAlias';
import EnvironmentVariableAllOf from './EnvironmentVariableAllOf';
import EnvironmentVariableOverride from './EnvironmentVariableOverride';
import EnvironmentVariableRequest from './EnvironmentVariableRequest';
import LinkedServiceTypeEnum from './LinkedServiceTypeEnum';

/**
 * The EnvironmentVariable model module.
 * @module model/EnvironmentVariable
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class EnvironmentVariable {
    /**
     * Constructs a new <code>EnvironmentVariable</code>.
     * @alias module:model/EnvironmentVariable
     * @implements module:model/Base
     * @implements module:model/EnvironmentVariableRequest
     * @implements module:model/EnvironmentVariableAllOf
     * @param id {String} 
     * @param createdAt {Date} 
     * @param key {String} key is case sensitive.
     * @param value {String} value of the env variable.
     * @param scope {module:model/APIVariableScopeEnum} 
     */
    constructor(id, createdAt, key, value, scope) { 
        Base.initialize(this, id, createdAt);EnvironmentVariableRequest.initialize(this, key, value);EnvironmentVariableAllOf.initialize(this, scope);
        EnvironmentVariable.initialize(this, id, createdAt, key, value, scope);
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
     * Constructs a <code>EnvironmentVariable</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EnvironmentVariable} obj Optional instance to populate.
     * @return {module:model/EnvironmentVariable} The populated <code>EnvironmentVariable</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EnvironmentVariable();
            Base.constructFromObject(data, obj);
            EnvironmentVariableRequest.constructFromObject(data, obj);
            EnvironmentVariableAllOf.constructFromObject(data, obj);

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
                obj['overridden_variable'] = EnvironmentVariableOverride.constructFromObject(data['overridden_variable']);
            }
            if (data.hasOwnProperty('aliased_variable')) {
                obj['aliased_variable'] = EnvironmentVariableAlias.constructFromObject(data['aliased_variable']);
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
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
EnvironmentVariable.prototype['id'] = undefined;

/**
 * @member {Date} created_at
 */
EnvironmentVariable.prototype['created_at'] = undefined;

/**
 * @member {Date} updated_at
 */
EnvironmentVariable.prototype['updated_at'] = undefined;

/**
 * key is case sensitive.
 * @member {String} key
 */
EnvironmentVariable.prototype['key'] = undefined;

/**
 * value of the env variable.
 * @member {String} value
 */
EnvironmentVariable.prototype['value'] = undefined;

/**
 * should be set for file only. variable mount path makes variable a file (where file should be mounted).
 * @member {String} mount_path
 */
EnvironmentVariable.prototype['mount_path'] = undefined;

/**
 * @member {module:model/EnvironmentVariableOverride} overridden_variable
 */
EnvironmentVariable.prototype['overridden_variable'] = undefined;

/**
 * @member {module:model/EnvironmentVariableAlias} aliased_variable
 */
EnvironmentVariable.prototype['aliased_variable'] = undefined;

/**
 * @member {module:model/APIVariableScopeEnum} scope
 */
EnvironmentVariable.prototype['scope'] = undefined;

/**
 * @member {module:model/APIVariableTypeEnum} variable_type
 */
EnvironmentVariable.prototype['variable_type'] = undefined;

/**
 * present only for `BUILT_IN` variable
 * @member {String} service_id
 */
EnvironmentVariable.prototype['service_id'] = undefined;

/**
 * present only for `BUILT_IN` variable
 * @member {String} service_name
 */
EnvironmentVariable.prototype['service_name'] = undefined;

/**
 * @member {module:model/LinkedServiceTypeEnum} service_type
 */
EnvironmentVariable.prototype['service_type'] = undefined;

/**
 * Entity that created/own the variable (i.e: Qovery, Doppler)
 * @member {String} owned_by
 */
EnvironmentVariable.prototype['owned_by'] = undefined;


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
// Implement EnvironmentVariableRequest interface:
/**
 * key is case sensitive.
 * @member {String} key
 */
EnvironmentVariableRequest.prototype['key'] = undefined;
/**
 * value of the env variable.
 * @member {String} value
 */
EnvironmentVariableRequest.prototype['value'] = undefined;
/**
 * should be set for file only. variable mount path makes variable a file (where file should be mounted).
 * @member {String} mount_path
 */
EnvironmentVariableRequest.prototype['mount_path'] = undefined;
// Implement EnvironmentVariableAllOf interface:
/**
 * @member {module:model/EnvironmentVariableOverride} overridden_variable
 */
EnvironmentVariableAllOf.prototype['overridden_variable'] = undefined;
/**
 * @member {module:model/EnvironmentVariableAlias} aliased_variable
 */
EnvironmentVariableAllOf.prototype['aliased_variable'] = undefined;
/**
 * @member {module:model/APIVariableScopeEnum} scope
 */
EnvironmentVariableAllOf.prototype['scope'] = undefined;
/**
 * @member {module:model/APIVariableTypeEnum} variable_type
 */
EnvironmentVariableAllOf.prototype['variable_type'] = undefined;
/**
 * present only for `BUILT_IN` variable
 * @member {String} service_id
 */
EnvironmentVariableAllOf.prototype['service_id'] = undefined;
/**
 * present only for `BUILT_IN` variable
 * @member {String} service_name
 */
EnvironmentVariableAllOf.prototype['service_name'] = undefined;
/**
 * @member {module:model/LinkedServiceTypeEnum} service_type
 */
EnvironmentVariableAllOf.prototype['service_type'] = undefined;
/**
 * Entity that created/own the variable (i.e: Qovery, Doppler)
 * @member {String} owned_by
 */
EnvironmentVariableAllOf.prototype['owned_by'] = undefined;




export default EnvironmentVariable;

