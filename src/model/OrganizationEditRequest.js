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
 * The OrganizationEditRequest model module.
 * @module model/OrganizationEditRequest
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class OrganizationEditRequest {
    /**
     * Constructs a new <code>OrganizationEditRequest</code>.
     * @alias module:model/OrganizationEditRequest
     * @param name {String} name is case insensitive
     */
    constructor(name) { 
        
        OrganizationEditRequest.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['name'] = name;
    }

    /**
     * Constructs a <code>OrganizationEditRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrganizationEditRequest} obj Optional instance to populate.
     * @return {module:model/OrganizationEditRequest} The populated <code>OrganizationEditRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrganizationEditRequest();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('website_url')) {
                obj['website_url'] = ApiClient.convertToType(data['website_url'], 'String');
            }
            if (data.hasOwnProperty('repository')) {
                obj['repository'] = ApiClient.convertToType(data['repository'], 'String');
            }
            if (data.hasOwnProperty('logo_url')) {
                obj['logo_url'] = ApiClient.convertToType(data['logo_url'], 'String');
            }
            if (data.hasOwnProperty('icon_url')) {
                obj['icon_url'] = ApiClient.convertToType(data['icon_url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * name is case insensitive
 * @member {String} name
 */
OrganizationEditRequest.prototype['name'] = undefined;

/**
 * @member {String} description
 */
OrganizationEditRequest.prototype['description'] = undefined;

/**
 * @member {String} website_url
 */
OrganizationEditRequest.prototype['website_url'] = undefined;

/**
 * @member {String} repository
 */
OrganizationEditRequest.prototype['repository'] = undefined;

/**
 * @member {String} logo_url
 */
OrganizationEditRequest.prototype['logo_url'] = undefined;

/**
 * @member {String} icon_url
 */
OrganizationEditRequest.prototype['icon_url'] = undefined;






export default OrganizationEditRequest;

