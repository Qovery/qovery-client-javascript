/**
 * [BETA] Qovery API
 * - Qovery is the fastest way to deploy your full-stack apps on any Cloud provider. - ℹ️ The API is in Beta and still in progress. Some endpoints are not available yet. 
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support+api+documentation@qovery.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The AwsCredentialsRequest model module.
 * @module model/AwsCredentialsRequest
 * @version 1.0.0
 */
class AwsCredentialsRequest {
    /**
     * Constructs a new <code>AwsCredentialsRequest</code>.
     * @alias module:model/AwsCredentialsRequest
     * @param name {String} 
     */
    constructor(name) { 
        
        AwsCredentialsRequest.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['name'] = name;
    }

    /**
     * Constructs a <code>AwsCredentialsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AwsCredentialsRequest} obj Optional instance to populate.
     * @return {module:model/AwsCredentialsRequest} The populated <code>AwsCredentialsRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AwsCredentialsRequest();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('access_key_id')) {
                obj['access_key_id'] = ApiClient.convertToType(data['access_key_id'], 'String');
            }
            if (data.hasOwnProperty('secret_access_key')) {
                obj['secret_access_key'] = ApiClient.convertToType(data['secret_access_key'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
AwsCredentialsRequest.prototype['name'] = undefined;

/**
 * @member {String} access_key_id
 */
AwsCredentialsRequest.prototype['access_key_id'] = undefined;

/**
 * @member {String} secret_access_key
 */
AwsCredentialsRequest.prototype['secret_access_key'] = undefined;






export default AwsCredentialsRequest;

