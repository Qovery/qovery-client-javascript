/**
 * Qovery API
 * - Qovery is the fastest way to deploy your full-stack apps on any Cloud provider. - ℹ️ The API is stable and still in development. 
 *
 * The version of the OpenAPI document: 1.0.2
 * Contact: support+api+documentation@qovery.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import BaseResponse from './BaseResponse';

/**
 * The InviteMemberResponse model module.
 * @module model/InviteMemberResponse
 * @version 1.0.2
 */
class InviteMemberResponse {
    /**
     * Constructs a new <code>InviteMemberResponse</code>.
     * @alias module:model/InviteMemberResponse
     * @implements module:model/BaseResponse
     * @param id {String} 
     * @param createdAt {Date} 
     */
    constructor(id, createdAt) { 
        BaseResponse.initialize(this, id, createdAt);
        InviteMemberResponse.initialize(this, id, createdAt);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, createdAt) { 
        obj['email'] = email;
        obj['role'] = role;
        obj['invitation_link'] = invitationLink;
        obj['invitation_status'] = invitationStatus;
        obj['inviter'] = inviter;
        obj['id'] = id;
        obj['created_at'] = createdAt;
    }

    /**
     * Constructs a <code>InviteMemberResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InviteMemberResponse} obj Optional instance to populate.
     * @return {module:model/InviteMemberResponse} The populated <code>InviteMemberResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InviteMemberResponse();
            BaseResponse.constructFromObject(data, obj);

            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('role')) {
                obj['role'] = ApiClient.convertToType(data['role'], 'String');
            }
            if (data.hasOwnProperty('invitation_link')) {
                obj['invitation_link'] = ApiClient.convertToType(data['invitation_link'], 'String');
            }
            if (data.hasOwnProperty('invitation_status')) {
                obj['invitation_status'] = ApiClient.convertToType(data['invitation_status'], 'String');
            }
            if (data.hasOwnProperty('inviter')) {
                obj['inviter'] = ApiClient.convertToType(data['inviter'], 'String');
            }
            if (data.hasOwnProperty('logo_url')) {
                obj['logo_url'] = ApiClient.convertToType(data['logo_url'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * @member {String} email
 */
InviteMemberResponse.prototype['email'] = undefined;

/**
 * @member {module:model/InviteMemberResponse.RoleEnum} role
 */
InviteMemberResponse.prototype['role'] = undefined;

/**
 * @member {String} invitation_link
 */
InviteMemberResponse.prototype['invitation_link'] = undefined;

/**
 * @member {module:model/InviteMemberResponse.InvitationStatusEnum} invitation_status
 */
InviteMemberResponse.prototype['invitation_status'] = undefined;

/**
 * @member {String} inviter
 */
InviteMemberResponse.prototype['inviter'] = undefined;

/**
 * @member {String} logo_url
 */
InviteMemberResponse.prototype['logo_url'] = undefined;

/**
 * @member {String} id
 */
InviteMemberResponse.prototype['id'] = undefined;

/**
 * @member {Date} created_at
 */
InviteMemberResponse.prototype['created_at'] = undefined;

/**
 * @member {Date} updated_at
 */
InviteMemberResponse.prototype['updated_at'] = undefined;


// Implement BaseResponse interface:
/**
 * @member {String} id
 */
BaseResponse.prototype['id'] = undefined;
/**
 * @member {Date} created_at
 */
BaseResponse.prototype['created_at'] = undefined;
/**
 * @member {Date} updated_at
 */
BaseResponse.prototype['updated_at'] = undefined;



/**
 * Allowed values for the <code>role</code> property.
 * @enum {String}
 * @readonly
 */
InviteMemberResponse['RoleEnum'] = {

    /**
     * value: "ADMIN"
     * @const
     */
    "ADMIN": "ADMIN",

    /**
     * value: "DEVELOPER"
     * @const
     */
    "DEVELOPER": "DEVELOPER",

    /**
     * value: "VIEWER"
     * @const
     */
    "VIEWER": "VIEWER"
};


/**
 * Allowed values for the <code>invitation_status</code> property.
 * @enum {String}
 * @readonly
 */
InviteMemberResponse['InvitationStatusEnum'] = {

    /**
     * value: "PENDING"
     * @const
     */
    "PENDING": "PENDING",

    /**
     * value: "EXPIRED"
     * @const
     */
    "EXPIRED": "EXPIRED"
};



export default InviteMemberResponse;

