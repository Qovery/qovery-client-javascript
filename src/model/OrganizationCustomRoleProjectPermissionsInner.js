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
import OrganizationCustomRoleUpdateRequestProjectPermissionsInnerPermissionsInner from './OrganizationCustomRoleUpdateRequestProjectPermissionsInnerPermissionsInner';

/**
 * The OrganizationCustomRoleProjectPermissionsInner model module.
 * @module model/OrganizationCustomRoleProjectPermissionsInner
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class OrganizationCustomRoleProjectPermissionsInner {
    /**
     * Constructs a new <code>OrganizationCustomRoleProjectPermissionsInner</code>.
     * @alias module:model/OrganizationCustomRoleProjectPermissionsInner
     */
    constructor() { 
        
        OrganizationCustomRoleProjectPermissionsInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrganizationCustomRoleProjectPermissionsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrganizationCustomRoleProjectPermissionsInner} obj Optional instance to populate.
     * @return {module:model/OrganizationCustomRoleProjectPermissionsInner} The populated <code>OrganizationCustomRoleProjectPermissionsInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrganizationCustomRoleProjectPermissionsInner();

            if (data.hasOwnProperty('project_id')) {
                obj['project_id'] = ApiClient.convertToType(data['project_id'], 'String');
            }
            if (data.hasOwnProperty('project_name')) {
                obj['project_name'] = ApiClient.convertToType(data['project_name'], 'String');
            }
            if (data.hasOwnProperty('is_admin')) {
                obj['is_admin'] = ApiClient.convertToType(data['is_admin'], 'Boolean');
            }
            if (data.hasOwnProperty('permissions')) {
                obj['permissions'] = ApiClient.convertToType(data['permissions'], [OrganizationCustomRoleUpdateRequestProjectPermissionsInnerPermissionsInner]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} project_id
 */
OrganizationCustomRoleProjectPermissionsInner.prototype['project_id'] = undefined;

/**
 * @member {String} project_name
 */
OrganizationCustomRoleProjectPermissionsInner.prototype['project_name'] = undefined;

/**
 * If `is_admin` is `true`, the user is: - automatically `MANAGER` for each environment type - allowed to manage project deployment rules - able to delete the project    Note that `permissions` can then be ignored for this project 
 * @member {Boolean} is_admin
 * @default false
 */
OrganizationCustomRoleProjectPermissionsInner.prototype['is_admin'] = false;

/**
 * @member {Array.<module:model/OrganizationCustomRoleUpdateRequestProjectPermissionsInnerPermissionsInner>} permissions
 */
OrganizationCustomRoleProjectPermissionsInner.prototype['permissions'] = undefined;






export default OrganizationCustomRoleProjectPermissionsInner;

