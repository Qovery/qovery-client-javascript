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
import Base from './Base';
import InviteMemberRoleEnum from './InviteMemberRoleEnum';
import InviteStatusEnum from './InviteStatusEnum';

/**
 * The InviteMember model module.
 * @module model/InviteMember
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class InviteMember {
    /**
     * Constructs a new <code>InviteMember</code>.
     * @alias module:model/InviteMember
     * @implements module:model/Base
     * @param id {String} 
     * @param createdAt {Date} 
     * @param email {String} 
     * @param role {module:model/InviteMemberRoleEnum} 
     * @param invitationLink {String} 
     * @param invitationStatus {module:model/InviteStatusEnum} 
     * @param inviter {String} 
     */
    constructor(id, createdAt, email, role, invitationLink, invitationStatus, inviter) { 
        Base.initialize(this, id, createdAt);
        InviteMember.initialize(this, id, createdAt, email, role, invitationLink, invitationStatus, inviter);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, createdAt, email, role, invitationLink, invitationStatus, inviter) { 
        obj['id'] = id;
        obj['created_at'] = createdAt;
        obj['email'] = email;
        obj['role'] = role;
        obj['invitation_link'] = invitationLink;
        obj['invitation_status'] = invitationStatus;
        obj['inviter'] = inviter;
    }

    /**
     * Constructs a <code>InviteMember</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InviteMember} obj Optional instance to populate.
     * @return {module:model/InviteMember} The populated <code>InviteMember</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InviteMember();
            Base.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
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
            if (data.hasOwnProperty('organization_name')) {
                obj['organization_name'] = ApiClient.convertToType(data['organization_name'], 'String');
            }
            if (data.hasOwnProperty('inviter')) {
                obj['inviter'] = ApiClient.convertToType(data['inviter'], 'String');
            }
            if (data.hasOwnProperty('logo_url')) {
                obj['logo_url'] = ApiClient.convertToType(data['logo_url'], 'String');
            }
            if (data.hasOwnProperty('role_id')) {
                obj['role_id'] = ApiClient.convertToType(data['role_id'], 'String');
            }
            if (data.hasOwnProperty('role_name')) {
                obj['role_name'] = ApiClient.convertToType(data['role_name'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>InviteMember</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>InviteMember</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of InviteMember.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['email'] && !(typeof data['email'] === 'string' || data['email'] instanceof String)) {
            throw new Error("Expected the field `email` to be a primitive type in the JSON string but got " + data['email']);
        }
        // ensure the json data is a string
        if (data['invitation_link'] && !(typeof data['invitation_link'] === 'string' || data['invitation_link'] instanceof String)) {
            throw new Error("Expected the field `invitation_link` to be a primitive type in the JSON string but got " + data['invitation_link']);
        }
        // ensure the json data is a string
        if (data['organization_name'] && !(typeof data['organization_name'] === 'string' || data['organization_name'] instanceof String)) {
            throw new Error("Expected the field `organization_name` to be a primitive type in the JSON string but got " + data['organization_name']);
        }
        // ensure the json data is a string
        if (data['inviter'] && !(typeof data['inviter'] === 'string' || data['inviter'] instanceof String)) {
            throw new Error("Expected the field `inviter` to be a primitive type in the JSON string but got " + data['inviter']);
        }
        // ensure the json data is a string
        if (data['logo_url'] && !(typeof data['logo_url'] === 'string' || data['logo_url'] instanceof String)) {
            throw new Error("Expected the field `logo_url` to be a primitive type in the JSON string but got " + data['logo_url']);
        }
        // ensure the json data is a string
        if (data['role_id'] && !(typeof data['role_id'] === 'string' || data['role_id'] instanceof String)) {
            throw new Error("Expected the field `role_id` to be a primitive type in the JSON string but got " + data['role_id']);
        }
        // ensure the json data is a string
        if (data['role_name'] && !(typeof data['role_name'] === 'string' || data['role_name'] instanceof String)) {
            throw new Error("Expected the field `role_name` to be a primitive type in the JSON string but got " + data['role_name']);
        }

        return true;
    }


}

InviteMember.RequiredProperties = ["id", "created_at", "email", "role", "invitation_link", "invitation_status", "inviter"];

/**
 * @member {String} id
 */
InviteMember.prototype['id'] = undefined;

/**
 * @member {Date} created_at
 */
InviteMember.prototype['created_at'] = undefined;

/**
 * @member {Date} updated_at
 */
InviteMember.prototype['updated_at'] = undefined;

/**
 * @member {String} email
 */
InviteMember.prototype['email'] = undefined;

/**
 * @member {module:model/InviteMemberRoleEnum} role
 */
InviteMember.prototype['role'] = undefined;

/**
 * @member {String} invitation_link
 */
InviteMember.prototype['invitation_link'] = undefined;

/**
 * @member {module:model/InviteStatusEnum} invitation_status
 */
InviteMember.prototype['invitation_status'] = undefined;

/**
 * @member {String} organization_name
 */
InviteMember.prototype['organization_name'] = undefined;

/**
 * @member {String} inviter
 */
InviteMember.prototype['inviter'] = undefined;

/**
 * @member {String} logo_url
 */
InviteMember.prototype['logo_url'] = undefined;

/**
 * @member {String} role_id
 */
InviteMember.prototype['role_id'] = undefined;

/**
 * @member {String} role_name
 */
InviteMember.prototype['role_name'] = undefined;


// Implement Base interface:
/**
 * @member {String} id
 */
Base.prototype['id'] = undefined;
/**
 * @member {Date} created_at
 */
Base.prototype['created_at'] = undefined;
/**
 * @member {Date} updated_at
 */
Base.prototype['updated_at'] = undefined;




export default InviteMember;

