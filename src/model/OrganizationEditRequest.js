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
            if (data.hasOwnProperty('admin_emails')) {
                obj['admin_emails'] = ApiClient.convertToType(data['admin_emails'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrganizationEditRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrganizationEditRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of OrganizationEditRequest.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['website_url'] && !(typeof data['website_url'] === 'string' || data['website_url'] instanceof String)) {
            throw new Error("Expected the field `website_url` to be a primitive type in the JSON string but got " + data['website_url']);
        }
        // ensure the json data is a string
        if (data['repository'] && !(typeof data['repository'] === 'string' || data['repository'] instanceof String)) {
            throw new Error("Expected the field `repository` to be a primitive type in the JSON string but got " + data['repository']);
        }
        // ensure the json data is a string
        if (data['logo_url'] && !(typeof data['logo_url'] === 'string' || data['logo_url'] instanceof String)) {
            throw new Error("Expected the field `logo_url` to be a primitive type in the JSON string but got " + data['logo_url']);
        }
        // ensure the json data is a string
        if (data['icon_url'] && !(typeof data['icon_url'] === 'string' || data['icon_url'] instanceof String)) {
            throw new Error("Expected the field `icon_url` to be a primitive type in the JSON string but got " + data['icon_url']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['admin_emails'])) {
            throw new Error("Expected the field `admin_emails` to be an array in the JSON data but got " + data['admin_emails']);
        }

        return true;
    }


}

OrganizationEditRequest.RequiredProperties = ["name"];

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

/**
 * @member {Array.<String>} admin_emails
 */
OrganizationEditRequest.prototype['admin_emails'] = undefined;






export default OrganizationEditRequest;

