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
import OrganizationCustomRoleClusterPermission from './OrganizationCustomRoleClusterPermission';

/**
 * The OrganizationCustomRoleUpdateRequestClusterPermissionsInner model module.
 * @module model/OrganizationCustomRoleUpdateRequestClusterPermissionsInner
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class OrganizationCustomRoleUpdateRequestClusterPermissionsInner {
    /**
     * Constructs a new <code>OrganizationCustomRoleUpdateRequestClusterPermissionsInner</code>.
     * @alias module:model/OrganizationCustomRoleUpdateRequestClusterPermissionsInner
     */
    constructor() { 
        
        OrganizationCustomRoleUpdateRequestClusterPermissionsInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrganizationCustomRoleUpdateRequestClusterPermissionsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrganizationCustomRoleUpdateRequestClusterPermissionsInner} obj Optional instance to populate.
     * @return {module:model/OrganizationCustomRoleUpdateRequestClusterPermissionsInner} The populated <code>OrganizationCustomRoleUpdateRequestClusterPermissionsInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrganizationCustomRoleUpdateRequestClusterPermissionsInner();

            if (data.hasOwnProperty('cluster_id')) {
                obj['cluster_id'] = ApiClient.convertToType(data['cluster_id'], 'String');
            }
            if (data.hasOwnProperty('permission')) {
                obj['permission'] = OrganizationCustomRoleClusterPermission.constructFromObject(data['permission']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} cluster_id
 */
OrganizationCustomRoleUpdateRequestClusterPermissionsInner.prototype['cluster_id'] = undefined;

/**
 * @member {module:model/OrganizationCustomRoleClusterPermission} permission
 */
OrganizationCustomRoleUpdateRequestClusterPermissionsInner.prototype['permission'] = undefined;






export default OrganizationCustomRoleUpdateRequestClusterPermissionsInner;

