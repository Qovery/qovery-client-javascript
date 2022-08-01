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
import Base from './Base';
import EnvironmentVariableScopeEnum from './EnvironmentVariableScopeEnum';
import LinkedServiceTypeEnum from './LinkedServiceTypeEnum';
import OverriddenSecret from './OverriddenSecret';
import SecretAllOf from './SecretAllOf';

/**
 * The Secret model module.
 * @module model/Secret
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class Secret {
    /**
     * Constructs a new <code>Secret</code>.
     * @alias module:model/Secret
     * @implements module:model/Base
     * @implements module:model/SecretAllOf
     * @param id {String} 
     * @param createdAt {Date} 
     * @param scope {module:model/EnvironmentVariableScopeEnum} 
     */
    constructor(id, createdAt, scope) { 
        Base.initialize(this, id, createdAt);SecretAllOf.initialize(this, scope);
        Secret.initialize(this, id, createdAt, scope);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, createdAt, scope) { 
        obj['id'] = id;
        obj['created_at'] = createdAt;
        obj['scope'] = scope;
    }

    /**
     * Constructs a <code>Secret</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Secret} obj Optional instance to populate.
     * @return {module:model/Secret} The populated <code>Secret</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Secret();
            Base.constructFromObject(data, obj);
            SecretAllOf.constructFromObject(data, obj);

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
            if (data.hasOwnProperty('overridden_secret')) {
                obj['overridden_secret'] = OverriddenSecret.constructFromObject(data['overridden_secret']);
            }
            if (data.hasOwnProperty('aliased_secret')) {
                obj['aliased_secret'] = AliasedSecret.constructFromObject(data['aliased_secret']);
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
 * @member {String} id
 */
Secret.prototype['id'] = undefined;

/**
 * @member {Date} created_at
 */
Secret.prototype['created_at'] = undefined;

/**
 * @member {Date} updated_at
 */
Secret.prototype['updated_at'] = undefined;

/**
 * key is case sensitive
 * @member {String} key
 */
Secret.prototype['key'] = undefined;

/**
 * @member {module:model/OverriddenSecret} overridden_secret
 */
Secret.prototype['overridden_secret'] = undefined;

/**
 * @member {module:model/AliasedSecret} aliased_secret
 */
Secret.prototype['aliased_secret'] = undefined;

/**
 * @member {module:model/EnvironmentVariableScopeEnum} scope
 */
Secret.prototype['scope'] = undefined;

/**
 * present only for `BUILT_IN` variable
 * @member {String} service_id
 */
Secret.prototype['service_id'] = undefined;

/**
 * present only for `BUILT_IN` variable
 * @member {String} service_name
 */
Secret.prototype['service_name'] = undefined;

/**
 * @member {module:model/LinkedServiceTypeEnum} service_type
 */
Secret.prototype['service_type'] = undefined;


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
// Implement SecretAllOf interface:
/**
 * key is case sensitive
 * @member {String} key
 */
SecretAllOf.prototype['key'] = undefined;
/**
 * @member {module:model/OverriddenSecret} overridden_secret
 */
SecretAllOf.prototype['overridden_secret'] = undefined;
/**
 * @member {module:model/AliasedSecret} aliased_secret
 */
SecretAllOf.prototype['aliased_secret'] = undefined;
/**
 * @member {module:model/EnvironmentVariableScopeEnum} scope
 */
SecretAllOf.prototype['scope'] = undefined;
/**
 * present only for `BUILT_IN` variable
 * @member {String} service_id
 */
SecretAllOf.prototype['service_id'] = undefined;
/**
 * present only for `BUILT_IN` variable
 * @member {String} service_name
 */
SecretAllOf.prototype['service_name'] = undefined;
/**
 * @member {module:model/LinkedServiceTypeEnum} service_type
 */
SecretAllOf.prototype['service_type'] = undefined;




export default Secret;

