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
import LinkedServiceTypeEnum from './LinkedServiceTypeEnum';
import VariableAlias from './VariableAlias';
import VariableOverride from './VariableOverride';
import VariableResponseAllOf from './VariableResponseAllOf';

/**
 * The VariableResponse model module.
 * @module model/VariableResponse
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class VariableResponse {
    /**
     * Constructs a new <code>VariableResponse</code>.
     * @alias module:model/VariableResponse
     * @implements module:model/Base
     * @implements module:model/VariableResponseAllOf
     * @param id {String} 
     * @param createdAt {Date} 
     * @param key {String} 
     * @param value {String} 
     * @param scope {module:model/APIVariableScopeEnum} 
     */
    constructor(id, createdAt, key, value, scope) { 
        Base.initialize(this, id, createdAt);VariableResponseAllOf.initialize(this, key, value, scope);
        VariableResponse.initialize(this, id, createdAt, key, value, scope);
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
     * Constructs a <code>VariableResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VariableResponse} obj Optional instance to populate.
     * @return {module:model/VariableResponse} The populated <code>VariableResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VariableResponse();
            Base.constructFromObject(data, obj);
            VariableResponseAllOf.constructFromObject(data, obj);

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
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
VariableResponse.prototype['id'] = undefined;

/**
 * @member {Date} created_at
 */
VariableResponse.prototype['created_at'] = undefined;

/**
 * @member {Date} updated_at
 */
VariableResponse.prototype['updated_at'] = undefined;

/**
 * @member {String} key
 */
VariableResponse.prototype['key'] = undefined;

/**
 * @member {String} value
 */
VariableResponse.prototype['value'] = undefined;

/**
 * @member {module:model/VariableOverride} overridden_variable
 */
VariableResponse.prototype['overridden_variable'] = undefined;

/**
 * @member {module:model/VariableAlias} aliased_variable
 */
VariableResponse.prototype['aliased_variable'] = undefined;

/**
 * @member {module:model/APIVariableScopeEnum} scope
 */
VariableResponse.prototype['scope'] = undefined;

/**
 * @member {module:model/APIVariableTypeEnum} variable_type
 */
VariableResponse.prototype['variable_type'] = undefined;

/**
 * The id of the service referenced by this variable.
 * @member {String} service_id
 */
VariableResponse.prototype['service_id'] = undefined;

/**
 * The name of the service referenced by this variable.
 * @member {String} service_name
 */
VariableResponse.prototype['service_name'] = undefined;

/**
 * @member {module:model/LinkedServiceTypeEnum} service_type
 */
VariableResponse.prototype['service_type'] = undefined;

/**
 * Entity that created/own the variable (i.e: Qovery, Doppler)
 * @member {String} owned_by
 */
VariableResponse.prototype['owned_by'] = undefined;


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
// Implement VariableResponseAllOf interface:
/**
 * @member {String} key
 */
VariableResponseAllOf.prototype['key'] = undefined;
/**
 * @member {String} value
 */
VariableResponseAllOf.prototype['value'] = undefined;
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




export default VariableResponse;

