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
 * The ClusterCloudProviderInfoRequestCredentials model module.
 * @module model/ClusterCloudProviderInfoRequestCredentials
 * @version 1.0.3
 */
class ClusterCloudProviderInfoRequestCredentials {
    /**
     * Constructs a new <code>ClusterCloudProviderInfoRequestCredentials</code>.
     * @alias module:model/ClusterCloudProviderInfoRequestCredentials
     */
    constructor() { 
        
        ClusterCloudProviderInfoRequestCredentials.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ClusterCloudProviderInfoRequestCredentials</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ClusterCloudProviderInfoRequestCredentials} obj Optional instance to populate.
     * @return {module:model/ClusterCloudProviderInfoRequestCredentials} The populated <code>ClusterCloudProviderInfoRequestCredentials</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ClusterCloudProviderInfoRequestCredentials();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
ClusterCloudProviderInfoRequestCredentials.prototype['id'] = undefined;

/**
 * @member {String} name
 */
ClusterCloudProviderInfoRequestCredentials.prototype['name'] = undefined;






export default ClusterCloudProviderInfoRequestCredentials;

