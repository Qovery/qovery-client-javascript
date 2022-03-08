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
import AliasedSecret from './AliasedSecret';
import EnvironmentVariableScopeEnum from './EnvironmentVariableScopeEnum';
import OverriddenSecret from './OverriddenSecret';

/**
 * The SecretResponseAllOf model module.
 * @module model/SecretResponseAllOf
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class SecretResponseAllOf {
    /**
     * Constructs a new <code>SecretResponseAllOf</code>.
     * @alias module:model/SecretResponseAllOf
     * @param scope {module:model/EnvironmentVariableScopeEnum} 
     */
    constructor(scope) { 
        
        SecretResponseAllOf.initialize(this, scope);
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
     * Constructs a <code>SecretResponseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SecretResponseAllOf} obj Optional instance to populate.
     * @return {module:model/SecretResponseAllOf} The populated <code>SecretResponseAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SecretResponseAllOf();

            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('overridden_secret')) {
                obj['overridden_secret'] = OverriddenSecret.constructFromObject(data['overridden_secret']);
            }
            if (data.hasOwnProperty('aliased_secret')) {
                obj['aliased_secret'] = AliasedSecret.constructFromObject(data['aliased_secret']);
            }
            if (data.hasOwnProperty('scope')) {
                obj['scope'] = EnvironmentVariableScopeEnum.constructFromObject(data['scope']);
            }
        }
        return obj;
    }


}

/**
 * key is case sensitive
 * @member {String} key
 */
SecretResponseAllOf.prototype['key'] = undefined;

/**
 * @member {module:model/OverriddenSecret} overridden_secret
 */
SecretResponseAllOf.prototype['overridden_secret'] = undefined;

/**
 * @member {module:model/AliasedSecret} aliased_secret
 */
SecretResponseAllOf.prototype['aliased_secret'] = undefined;

/**
 * @member {module:model/EnvironmentVariableScopeEnum} scope
 */
SecretResponseAllOf.prototype['scope'] = undefined;






export default SecretResponseAllOf;

