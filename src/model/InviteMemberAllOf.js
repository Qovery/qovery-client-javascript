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
import InviteStatusEnum from './InviteStatusEnum';

/**
 * The InviteMemberAllOf model module.
 * @module model/InviteMemberAllOf
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class InviteMemberAllOf {
    /**
     * Constructs a new <code>InviteMemberAllOf</code>.
     * @alias module:model/InviteMemberAllOf
     * @param email {String} 
     * @param role {module:model/InviteMemberRoleEnum} 
     * @param invitationLink {String} 
     * @param invitationStatus {module:model/InviteStatusEnum} 
     * @param inviter {String} 
     */
    constructor(email, role, invitationLink, invitationStatus, inviter) { 
        
        InviteMemberAllOf.initialize(this, email, role, invitationLink, invitationStatus, inviter);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, email, role, invitationLink, invitationStatus, inviter) { 
        obj['email'] = email;
        obj['role'] = role;
        obj['invitation_link'] = invitationLink;
        obj['invitation_status'] = invitationStatus;
        obj['inviter'] = inviter;
    }

    /**
     * Constructs a <code>InviteMemberAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InviteMemberAllOf} obj Optional instance to populate.
     * @return {module:model/InviteMemberAllOf} The populated <code>InviteMemberAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InviteMemberAllOf();

            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('role')) {
                obj['role'] = InviteMemberRoleEnum.constructFromObject(data['role']);
            }
            if (data.hasOwnProperty('invitation_link')) {
                obj['invitation_link'] = ApiClient.convertToType(data['invitation_link'], 'String');
            }
            if (data.hasOwnProperty('invitation_status')) {
                obj['invitation_status'] = InviteStatusEnum.constructFromObject(data['invitation_status']);
            }
            if (data.hasOwnProperty('inviter')) {
                obj['inviter'] = ApiClient.convertToType(data['inviter'], 'String');
            }
            if (data.hasOwnProperty('logo_url')) {
                obj['logo_url'] = ApiClient.convertToType(data['logo_url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} email
 */
InviteMemberAllOf.prototype['email'] = undefined;

/**
 * @member {module:model/InviteMemberRoleEnum} role
 */
InviteMemberAllOf.prototype['role'] = undefined;

/**
 * @member {String} invitation_link
 */
InviteMemberAllOf.prototype['invitation_link'] = undefined;

/**
 * @member {module:model/InviteStatusEnum} invitation_status
 */
InviteMemberAllOf.prototype['invitation_status'] = undefined;

/**
 * @member {String} inviter
 */
InviteMemberAllOf.prototype['inviter'] = undefined;

/**
 * @member {String} logo_url
 */
InviteMemberAllOf.prototype['logo_url'] = undefined;






export default InviteMemberAllOf;
