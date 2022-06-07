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
import EnvironmentVariableScopeEnum from './EnvironmentVariableScopeEnum';

/**
 * The VariableImportRequestVarsInner model module.
 * @module model/VariableImportRequestVarsInner
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class VariableImportRequestVarsInner {
    /**
     * Constructs a new <code>VariableImportRequestVarsInner</code>.
     * @alias module:model/VariableImportRequestVarsInner
     * @param name {String} 
     * @param value {String} 
     * @param scope {module:model/EnvironmentVariableScopeEnum} 
     * @param isSecret {Boolean} 
     */
    constructor(name, value, scope, isSecret) { 
        
        VariableImportRequestVarsInner.initialize(this, name, value, scope, isSecret);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, value, scope, isSecret) { 
        obj['name'] = name;
        obj['value'] = value;
        obj['scope'] = scope;
        obj['is_secret'] = isSecret;
    }

    /**
     * Constructs a <code>VariableImportRequestVarsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VariableImportRequestVarsInner} obj Optional instance to populate.
     * @return {module:model/VariableImportRequestVarsInner} The populated <code>VariableImportRequestVarsInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VariableImportRequestVarsInner();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
            if (data.hasOwnProperty('scope')) {
                obj['scope'] = EnvironmentVariableScopeEnum.constructFromObject(data['scope']);
            }
            if (data.hasOwnProperty('is_secret')) {
                obj['is_secret'] = ApiClient.convertToType(data['is_secret'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
VariableImportRequestVarsInner.prototype['name'] = undefined;

/**
 * @member {String} value
 */
VariableImportRequestVarsInner.prototype['value'] = undefined;

/**
 * @member {module:model/EnvironmentVariableScopeEnum} scope
 */
VariableImportRequestVarsInner.prototype['scope'] = undefined;

/**
 * @member {Boolean} is_secret
 */
VariableImportRequestVarsInner.prototype['is_secret'] = undefined;






export default VariableImportRequestVarsInner;
