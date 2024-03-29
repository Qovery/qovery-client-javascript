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
import OrganizationApiTokenScope from './OrganizationApiTokenScope';

/**
 * The OrganizationApiTokenCreateRequest model module.
 * @module model/OrganizationApiTokenCreateRequest
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class OrganizationApiTokenCreateRequest {
    /**
     * Constructs a new <code>OrganizationApiTokenCreateRequest</code>.
     * @alias module:model/OrganizationApiTokenCreateRequest
     * @param name {String} 
     * @param roleId {String} the roleId provided by the \"List organization custom roles\" endpoint.
     */
    constructor(name, roleId) { 
        
        OrganizationApiTokenCreateRequest.initialize(this, name, roleId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, roleId) { 
        obj['name'] = name;
        obj['role_id'] = roleId;
    }

    /**
     * Constructs a <code>OrganizationApiTokenCreateRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrganizationApiTokenCreateRequest} obj Optional instance to populate.
     * @return {module:model/OrganizationApiTokenCreateRequest} The populated <code>OrganizationApiTokenCreateRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrganizationApiTokenCreateRequest();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('scope')) {
                obj['scope'] = OrganizationApiTokenScope.constructFromObject(data['scope']);
            }
            if (data.hasOwnProperty('role_id')) {
                obj['role_id'] = ApiClient.convertToType(data['role_id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
OrganizationApiTokenCreateRequest.prototype['name'] = undefined;

/**
 * @member {String} description
 */
OrganizationApiTokenCreateRequest.prototype['description'] = undefined;

/**
 * @member {module:model/OrganizationApiTokenScope} scope
 */
OrganizationApiTokenCreateRequest.prototype['scope'] = undefined;

/**
 * the roleId provided by the \"List organization custom roles\" endpoint.
 * @member {String} role_id
 */
OrganizationApiTokenCreateRequest.prototype['role_id'] = undefined;






export default OrganizationApiTokenCreateRequest;

