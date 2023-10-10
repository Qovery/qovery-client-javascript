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
import SecretAlias from './SecretAlias';
import SecretOverride from './SecretOverride';

/**
 * The SecretAllOf model module.
 * @module model/SecretAllOf
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class SecretAllOf {
    /**
     * Constructs a new <code>SecretAllOf</code>.
     * @alias module:model/SecretAllOf
     * @param key {String} key is case sensitive
     * @param scope {module:model/APIVariableScopeEnum} 
     */
    constructor(key, scope) { 
        
        SecretAllOf.initialize(this, key, scope);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, key, scope) { 
        obj['key'] = key;
        obj['scope'] = scope;
    }

    /**
     * Constructs a <code>SecretAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SecretAllOf} obj Optional instance to populate.
     * @return {module:model/SecretAllOf} The populated <code>SecretAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SecretAllOf();

            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('overridden_secret')) {
                obj['overridden_secret'] = SecretOverride.constructFromObject(data['overridden_secret']);
            }
            if (data.hasOwnProperty('aliased_secret')) {
                obj['aliased_secret'] = SecretAlias.constructFromObject(data['aliased_secret']);
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
 * key is case sensitive
 * @member {String} key
 */
SecretAllOf.prototype['key'] = undefined;

/**
 * @member {module:model/SecretOverride} overridden_secret
 */
SecretAllOf.prototype['overridden_secret'] = undefined;

/**
 * @member {module:model/SecretAlias} aliased_secret
 */
SecretAllOf.prototype['aliased_secret'] = undefined;

/**
 * @member {module:model/APIVariableScopeEnum} scope
 */
SecretAllOf.prototype['scope'] = undefined;

/**
 * @member {module:model/APIVariableTypeEnum} variable_type
 */
SecretAllOf.prototype['variable_type'] = undefined;

/**
 * @member {String} service_id
 */
SecretAllOf.prototype['service_id'] = undefined;

/**
 * @member {String} service_name
 */
SecretAllOf.prototype['service_name'] = undefined;

/**
 * @member {module:model/LinkedServiceTypeEnum} service_type
 */
SecretAllOf.prototype['service_type'] = undefined;

/**
 * Entity that created/own the variable (i.e: Qovery, Doppler)
 * @member {String} owned_by
 */
SecretAllOf.prototype['owned_by'] = undefined;






export default SecretAllOf;

