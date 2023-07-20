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

/**
 * The VariableOverride model module.
 * @module model/VariableOverride
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class VariableOverride {
    /**
     * Constructs a new <code>VariableOverride</code>.
     * @alias module:model/VariableOverride
     * @param id {String} 
     * @param key {String} 
     * @param mountPath {String} 
     * @param scope {module:model/APIVariableScopeEnum} 
     * @param variableType {module:model/APIVariableTypeEnum} 
     */
    constructor(id, key, mountPath, scope, variableType) { 
        
        VariableOverride.initialize(this, id, key, mountPath, scope, variableType);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, key, mountPath, scope, variableType) { 
        obj['id'] = id;
        obj['key'] = key;
        obj['mount_path'] = mountPath;
        obj['scope'] = scope;
        obj['variable_type'] = variableType;
    }

    /**
     * Constructs a <code>VariableOverride</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VariableOverride} obj Optional instance to populate.
     * @return {module:model/VariableOverride} The populated <code>VariableOverride</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VariableOverride();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
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
            if (data.hasOwnProperty('scope')) {
                obj['scope'] = APIVariableScopeEnum.constructFromObject(data['scope']);
            }
            if (data.hasOwnProperty('variable_type')) {
                obj['variable_type'] = APIVariableTypeEnum.constructFromObject(data['variable_type']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
VariableOverride.prototype['id'] = undefined;

/**
 * @member {String} key
 */
VariableOverride.prototype['key'] = undefined;

/**
 * @member {String} value
 */
VariableOverride.prototype['value'] = undefined;

/**
 * @member {String} mount_path
 */
VariableOverride.prototype['mount_path'] = undefined;

/**
 * @member {module:model/APIVariableScopeEnum} scope
 */
VariableOverride.prototype['scope'] = undefined;

/**
 * @member {module:model/APIVariableTypeEnum} variable_type
 */
VariableOverride.prototype['variable_type'] = undefined;






export default VariableOverride;

