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

/**
 * The OrganizationApiTokenCreateAllOf model module.
 * @module model/OrganizationApiTokenCreateAllOf
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class OrganizationApiTokenCreateAllOf {
    /**
     * Constructs a new <code>OrganizationApiTokenCreateAllOf</code>.
     * @alias module:model/OrganizationApiTokenCreateAllOf
     */
    constructor() { 
        
        OrganizationApiTokenCreateAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrganizationApiTokenCreateAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrganizationApiTokenCreateAllOf} obj Optional instance to populate.
     * @return {module:model/OrganizationApiTokenCreateAllOf} The populated <code>OrganizationApiTokenCreateAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrganizationApiTokenCreateAllOf();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('roleName')) {
                obj['roleName'] = ApiClient.convertToType(data['roleName'], 'String');
            }
            if (data.hasOwnProperty('roleId')) {
                obj['roleId'] = ApiClient.convertToType(data['roleId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
OrganizationApiTokenCreateAllOf.prototype['name'] = undefined;

/**
 * @member {String} description
 */
OrganizationApiTokenCreateAllOf.prototype['description'] = undefined;

/**
 * the generated token to send in 'Authorization' header prefixed by 'Token '
 * @member {String} token
 */
OrganizationApiTokenCreateAllOf.prototype['token'] = undefined;

/**
 * @member {String} roleName
 */
OrganizationApiTokenCreateAllOf.prototype['roleName'] = undefined;

/**
 * @member {String} roleId
 */
OrganizationApiTokenCreateAllOf.prototype['roleId'] = undefined;






export default OrganizationApiTokenCreateAllOf;

