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
import StorageDiskResponse from './StorageDiskResponse';

/**
 * The EnvironmentApplicationsStorageResponse model module.
 * @module model/EnvironmentApplicationsStorageResponse
 * @version 1.0.2
 */
class EnvironmentApplicationsStorageResponse {
    /**
     * Constructs a new <code>EnvironmentApplicationsStorageResponse</code>.
     * @alias module:model/EnvironmentApplicationsStorageResponse
     * @param application {String} 
     */
    constructor(application) { 
        
        EnvironmentApplicationsStorageResponse.initialize(this, application);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, application) { 
        obj['application'] = application;
    }

    /**
     * Constructs a <code>EnvironmentApplicationsStorageResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EnvironmentApplicationsStorageResponse} obj Optional instance to populate.
     * @return {module:model/EnvironmentApplicationsStorageResponse} The populated <code>EnvironmentApplicationsStorageResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EnvironmentApplicationsStorageResponse();

            if (data.hasOwnProperty('application')) {
                obj['application'] = ApiClient.convertToType(data['application'], 'String');
            }
            if (data.hasOwnProperty('disks')) {
                obj['disks'] = ApiClient.convertToType(data['disks'], [StorageDiskResponse]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} application
 */
EnvironmentApplicationsStorageResponse.prototype['application'] = undefined;

/**
 * @member {Array.<module:model/StorageDiskResponse>} disks
 */
EnvironmentApplicationsStorageResponse.prototype['disks'] = undefined;






export default EnvironmentApplicationsStorageResponse;

