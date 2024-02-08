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
import InviteMemberRoleEnum from './InviteMemberRoleEnum';

/**
 * The InviteMemberRequest model module.
 * @module model/InviteMemberRequest
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class InviteMemberRequest {
    /**
     * Constructs a new <code>InviteMemberRequest</code>.
     * @alias module:model/InviteMemberRequest
     * @param email {String} 
     */
    constructor(email) { 
        
        InviteMemberRequest.initialize(this, email);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, email) { 
        obj['email'] = email;
    }

    /**
     * Constructs a <code>InviteMemberRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InviteMemberRequest} obj Optional instance to populate.
     * @return {module:model/InviteMemberRequest} The populated <code>InviteMemberRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InviteMemberRequest();

            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('role')) {
                obj['role'] = InviteMemberRoleEnum.constructFromObject(data['role']);
            }
            if (data.hasOwnProperty('role_id')) {
                obj['role_id'] = ApiClient.convertToType(data['role_id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} email
 */
InviteMemberRequest.prototype['email'] = undefined;

/**
 * @member {module:model/InviteMemberRoleEnum} role
 */
InviteMemberRequest.prototype['role'] = undefined;

/**
 * the target role to attribute to the new member
 * @member {String} role_id
 */
InviteMemberRequest.prototype['role_id'] = undefined;






export default InviteMemberRequest;

