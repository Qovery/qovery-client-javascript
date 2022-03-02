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
 * The InviteMemberRequest model module.
 * @module model/InviteMemberRequest
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class InviteMemberRequest {
    /**
     * Constructs a new <code>InviteMemberRequest</code>.
     * @alias module:model/InviteMemberRequest
     * @param email {String} 
     * @param role {module:model/InviteMemberRequest.RoleEnum} 
     */
    constructor(email, role) { 
        
        InviteMemberRequest.initialize(this, email, role);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, email, role) { 
        obj['email'] = email;
        obj['role'] = role;
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
                obj['role'] = ApiClient.convertToType(data['role'], 'String');
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
 * @member {module:model/InviteMemberRequest.RoleEnum} role
 */
InviteMemberRequest.prototype['role'] = undefined;





/**
 * Allowed values for the <code>role</code> property.
 * @enum {String}
 * @readonly
 */
InviteMemberRequest['RoleEnum'] = {

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



export default InviteMemberRequest;

