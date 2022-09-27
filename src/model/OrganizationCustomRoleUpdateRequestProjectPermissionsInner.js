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
 * The OrganizationCustomRoleUpdateRequestProjectPermissionsInner model module.
 * @module model/OrganizationCustomRoleUpdateRequestProjectPermissionsInner
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class OrganizationCustomRoleUpdateRequestProjectPermissionsInner {
    /**
     * Constructs a new <code>OrganizationCustomRoleUpdateRequestProjectPermissionsInner</code>.
     * @alias module:model/OrganizationCustomRoleUpdateRequestProjectPermissionsInner
     */
    constructor() { 
        
        OrganizationCustomRoleUpdateRequestProjectPermissionsInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrganizationCustomRoleUpdateRequestProjectPermissionsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrganizationCustomRoleUpdateRequestProjectPermissionsInner} obj Optional instance to populate.
     * @return {module:model/OrganizationCustomRoleUpdateRequestProjectPermissionsInner} The populated <code>OrganizationCustomRoleUpdateRequestProjectPermissionsInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrganizationCustomRoleUpdateRequestProjectPermissionsInner();

            if (data.hasOwnProperty('project_id')) {
                obj['project_id'] = ApiClient.convertToType(data['project_id'], 'String');
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
OrganizationCustomRoleUpdateRequestProjectPermissionsInner.prototype['project_id'] = undefined;

/**
 * If `is_admin` is `true`, the user is: - automatically `MANAGER` for each environment type - allowed to manage project deployment rules - able to delete the project Note that `permissions` can then be ignored for this project 
 * @member {Boolean} is_admin
 * @default false
 */
OrganizationCustomRoleUpdateRequestProjectPermissionsInner.prototype['is_admin'] = false;

/**
 * Mandatory if `is_admin` is `false`   Should contain an entry for every environment type: - `DEVELOPMENT` - `PREVIEW` - `STAGING` - `PRODUCTION` 
 * @member {Array.<module:model/OrganizationCustomRoleUpdateRequestProjectPermissionsInnerPermissionsInner>} permissions
 */
OrganizationCustomRoleUpdateRequestProjectPermissionsInner.prototype['permissions'] = undefined;






export default OrganizationCustomRoleUpdateRequestProjectPermissionsInner;
