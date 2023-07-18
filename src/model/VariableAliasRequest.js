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

/**
 * The VariableAliasRequest model module.
 * @module model/VariableAliasRequest
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class VariableAliasRequest {
    /**
     * Constructs a new <code>VariableAliasRequest</code>.
     * @alias module:model/VariableAliasRequest
     * @param key {String} 
     * @param aliasScope {module:model/APIVariableScopeEnum} 
     * @param aliasParentId {String} 
     */
    constructor(key, aliasScope, aliasParentId) { 
        
        VariableAliasRequest.initialize(this, key, aliasScope, aliasParentId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, key, aliasScope, aliasParentId) { 
        obj['key'] = key;
        obj['aliasScope'] = aliasScope;
        obj['aliasParentId'] = aliasParentId;
    }

    /**
     * Constructs a <code>VariableAliasRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VariableAliasRequest} obj Optional instance to populate.
     * @return {module:model/VariableAliasRequest} The populated <code>VariableAliasRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VariableAliasRequest();

            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('aliasScope')) {
                obj['aliasScope'] = APIVariableScopeEnum.constructFromObject(data['aliasScope']);
            }
            if (data.hasOwnProperty('aliasParentId')) {
                obj['aliasParentId'] = ApiClient.convertToType(data['aliasParentId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} key
 */
VariableAliasRequest.prototype['key'] = undefined;

/**
 * @member {module:model/APIVariableScopeEnum} aliasScope
 */
VariableAliasRequest.prototype['aliasScope'] = undefined;

/**
 * @member {String} aliasParentId
 */
VariableAliasRequest.prototype['aliasParentId'] = undefined;






export default VariableAliasRequest;

