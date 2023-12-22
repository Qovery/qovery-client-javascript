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
import LinkedServiceTypeEnum from './LinkedServiceTypeEnum';
import VariableAlias from './VariableAlias';
import VariableOverride from './VariableOverride';

/**
 * The VariableResponseAllOf model module.
 * @module model/VariableResponseAllOf
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class VariableResponseAllOf {
    /**
     * Constructs a new <code>VariableResponseAllOf</code>.
     * @alias module:model/VariableResponseAllOf
     * @param key {String} 
     * @param value {String} 
     * @param scope {module:model/APIVariableScopeEnum} 
     * @param isSecret {Boolean} 
     */
    constructor(key, value, scope, isSecret) { 
        
        VariableResponseAllOf.initialize(this, key, value, scope, isSecret);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, key, value, scope, isSecret) { 
        obj['key'] = key;
        obj['value'] = value;
        obj['scope'] = scope;
        obj['is_secret'] = isSecret;
    }

    /**
     * Constructs a <code>VariableResponseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VariableResponseAllOf} obj Optional instance to populate.
     * @return {module:model/VariableResponseAllOf} The populated <code>VariableResponseAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VariableResponseAllOf();

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


}

/**
 * @member {String} key
 */
VariableResponseAllOf.prototype['key'] = undefined;

/**
 * @member {String} value
 */
VariableResponseAllOf.prototype['value'] = undefined;

/**
 * @member {String} mount_path
 */
VariableResponseAllOf.prototype['mount_path'] = undefined;

/**
 * @member {module:model/VariableOverride} overridden_variable
 */
VariableResponseAllOf.prototype['overridden_variable'] = undefined;

/**
 * @member {module:model/VariableAlias} aliased_variable
 */
VariableResponseAllOf.prototype['aliased_variable'] = undefined;

/**
 * @member {module:model/APIVariableScopeEnum} scope
 */
VariableResponseAllOf.prototype['scope'] = undefined;

/**
 * @member {module:model/APIVariableTypeEnum} variable_type
 */
VariableResponseAllOf.prototype['variable_type'] = undefined;

/**
 * The id of the service referenced by this variable.
 * @member {String} service_id
 */
VariableResponseAllOf.prototype['service_id'] = undefined;

/**
 * The name of the service referenced by this variable.
 * @member {String} service_name
 */
VariableResponseAllOf.prototype['service_name'] = undefined;

/**
 * @member {module:model/LinkedServiceTypeEnum} service_type
 */
VariableResponseAllOf.prototype['service_type'] = undefined;

/**
 * Entity that created/own the variable (i.e: Qovery, Doppler)
 * @member {String} owned_by
 */
VariableResponseAllOf.prototype['owned_by'] = undefined;

/**
 * @member {Boolean} is_secret
 */
VariableResponseAllOf.prototype['is_secret'] = undefined;






export default VariableResponseAllOf;

