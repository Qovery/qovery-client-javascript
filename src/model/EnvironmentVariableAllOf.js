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
import EnvironmentVariableAllOfAliasedVariable from './EnvironmentVariableAllOfAliasedVariable';
import EnvironmentVariableAllOfOverriddenVariable from './EnvironmentVariableAllOfOverriddenVariable';
import EnvironmentVariableScopeEnum from './EnvironmentVariableScopeEnum';
import LinkedServiceTypeEnum from './LinkedServiceTypeEnum';

/**
 * The EnvironmentVariableAllOf model module.
 * @module model/EnvironmentVariableAllOf
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class EnvironmentVariableAllOf {
    /**
     * Constructs a new <code>EnvironmentVariableAllOf</code>.
     * @alias module:model/EnvironmentVariableAllOf
     * @param scope {module:model/EnvironmentVariableScopeEnum} 
     */
    constructor(scope) { 
        
        EnvironmentVariableAllOf.initialize(this, scope);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, scope) { 
        obj['scope'] = scope;
    }

    /**
     * Constructs a <code>EnvironmentVariableAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EnvironmentVariableAllOf} obj Optional instance to populate.
     * @return {module:model/EnvironmentVariableAllOf} The populated <code>EnvironmentVariableAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EnvironmentVariableAllOf();

            if (data.hasOwnProperty('overridden_variable')) {
                obj['overridden_variable'] = EnvironmentVariableAllOfOverriddenVariable.constructFromObject(data['overridden_variable']);
            }
            if (data.hasOwnProperty('aliased_variable')) {
                obj['aliased_variable'] = EnvironmentVariableAllOfAliasedVariable.constructFromObject(data['aliased_variable']);
            }
            if (data.hasOwnProperty('scope')) {
                obj['scope'] = EnvironmentVariableScopeEnum.constructFromObject(data['scope']);
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
        }
        return obj;
    }


}

/**
 * @member {module:model/EnvironmentVariableAllOfOverriddenVariable} overridden_variable
 */
EnvironmentVariableAllOf.prototype['overridden_variable'] = undefined;

/**
 * @member {module:model/EnvironmentVariableAllOfAliasedVariable} aliased_variable
 */
EnvironmentVariableAllOf.prototype['aliased_variable'] = undefined;

/**
 * @member {module:model/EnvironmentVariableScopeEnum} scope
 */
EnvironmentVariableAllOf.prototype['scope'] = undefined;

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






export default EnvironmentVariableAllOf;

