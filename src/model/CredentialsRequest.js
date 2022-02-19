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

/**
 * The CredentialsRequest model module.
 * @module model/CredentialsRequest
 * @version 1.0.2
 */
class CredentialsRequest {
    /**
     * Constructs a new <code>CredentialsRequest</code>.
     * @alias module:model/CredentialsRequest
     * @param login {String} 
     * @param password {String} 
     */
    constructor(login, password) { 
        
        CredentialsRequest.initialize(this, login, password);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, login, password) { 
        obj['login'] = login;
        obj['password'] = password;
    }

    /**
     * Constructs a <code>CredentialsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CredentialsRequest} obj Optional instance to populate.
     * @return {module:model/CredentialsRequest} The populated <code>CredentialsRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CredentialsRequest();

            if (data.hasOwnProperty('login')) {
                obj['login'] = ApiClient.convertToType(data['login'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} login
 */
CredentialsRequest.prototype['login'] = undefined;

/**
 * @member {String} password
 */
CredentialsRequest.prototype['password'] = undefined;






export default CredentialsRequest;

