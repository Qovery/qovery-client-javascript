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
import OrganizationCustomRoleClusterPermissionsInner from './OrganizationCustomRoleClusterPermissionsInner';
import OrganizationCustomRoleProjectPermissionsInner from './OrganizationCustomRoleProjectPermissionsInner';

/**
 * The OrganizationCustomRole model module.
 * @module model/OrganizationCustomRole
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class OrganizationCustomRole {
    /**
     * Constructs a new <code>OrganizationCustomRole</code>.
     * @alias module:model/OrganizationCustomRole
     */
    constructor() { 
        
        OrganizationCustomRole.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrganizationCustomRole</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrganizationCustomRole} obj Optional instance to populate.
     * @return {module:model/OrganizationCustomRole} The populated <code>OrganizationCustomRole</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrganizationCustomRole();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('cluster_permissions')) {
                obj['cluster_permissions'] = ApiClient.convertToType(data['cluster_permissions'], [OrganizationCustomRoleClusterPermissionsInner]);
            }
            if (data.hasOwnProperty('project_permissions')) {
                obj['project_permissions'] = ApiClient.convertToType(data['project_permissions'], [OrganizationCustomRoleProjectPermissionsInner]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrganizationCustomRole</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrganizationCustomRole</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        if (data['cluster_permissions']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['cluster_permissions'])) {
                throw new Error("Expected the field `cluster_permissions` to be an array in the JSON data but got " + data['cluster_permissions']);
            }
            // validate the optional field `cluster_permissions` (array)
            for (const item of data['cluster_permissions']) {
                OrganizationCustomRoleClusterPermissionsInner.validateJSON(item);
            };
        }
        if (data['project_permissions']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['project_permissions'])) {
                throw new Error("Expected the field `project_permissions` to be an array in the JSON data but got " + data['project_permissions']);
            }
            // validate the optional field `project_permissions` (array)
            for (const item of data['project_permissions']) {
                OrganizationCustomRoleProjectPermissionsInner.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {String} id
 */
OrganizationCustomRole.prototype['id'] = undefined;

/**
 * @member {String} name
 */
OrganizationCustomRole.prototype['name'] = undefined;

/**
 * @member {String} description
 */
OrganizationCustomRole.prototype['description'] = undefined;

/**
 * @member {Array.<module:model/OrganizationCustomRoleClusterPermissionsInner>} cluster_permissions
 */
OrganizationCustomRole.prototype['cluster_permissions'] = undefined;

/**
 * @member {Array.<module:model/OrganizationCustomRoleProjectPermissionsInner>} project_permissions
 */
OrganizationCustomRole.prototype['project_permissions'] = undefined;






export default OrganizationCustomRole;

