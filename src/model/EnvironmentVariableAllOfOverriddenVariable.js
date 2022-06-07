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
 * The EnvironmentVariableAllOfOverriddenVariable model module.
 * @module model/EnvironmentVariableAllOfOverriddenVariable
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class EnvironmentVariableAllOfOverriddenVariable {
    /**
     * Constructs a new <code>EnvironmentVariableAllOfOverriddenVariable</code>.
     * @alias module:model/EnvironmentVariableAllOfOverriddenVariable
     */
    constructor() { 
        
        EnvironmentVariableAllOfOverriddenVariable.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EnvironmentVariableAllOfOverriddenVariable</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EnvironmentVariableAllOfOverriddenVariable} obj Optional instance to populate.
     * @return {module:model/EnvironmentVariableAllOfOverriddenVariable} The populated <code>EnvironmentVariableAllOfOverriddenVariable</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EnvironmentVariableAllOfOverriddenVariable();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
            if (data.hasOwnProperty('scope')) {
                obj['scope'] = EnvironmentVariableScopeEnum.constructFromObject(data['scope']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
EnvironmentVariableAllOfOverriddenVariable.prototype['id'] = undefined;

/**
 * @member {String} key
 */
EnvironmentVariableAllOfOverriddenVariable.prototype['key'] = undefined;

/**
 * @member {String} value
 */
EnvironmentVariableAllOfOverriddenVariable.prototype['value'] = undefined;

/**
 * @member {module:model/EnvironmentVariableScopeEnum} scope
 */
EnvironmentVariableAllOfOverriddenVariable.prototype['scope'] = undefined;






export default EnvironmentVariableAllOfOverriddenVariable;
