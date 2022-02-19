/**
 * Qovery API
 * - Qovery is the fastest way to deploy your full-stack apps on any Cloud provider. - ℹ️ The API is stable and still in development. 
 *
 * The version of the OpenAPI document: 1.0.1
 * Contact: support+api+documentation@qovery.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The StorageDiskResponse model module.
 * @module model/StorageDiskResponse
 * @version 1.0.1
 */
class StorageDiskResponse {
    /**
     * Constructs a new <code>StorageDiskResponse</code>.
     * @alias module:model/StorageDiskResponse
     */
    constructor() { 
        
        StorageDiskResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>StorageDiskResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StorageDiskResponse} obj Optional instance to populate.
     * @return {module:model/StorageDiskResponse} The populated <code>StorageDiskResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StorageDiskResponse();

            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('storage_id')) {
                obj['storage_id'] = ApiClient.convertToType(data['storage_id'], 'String');
            }
            if (data.hasOwnProperty('requested_in_gb')) {
                obj['requested_in_gb'] = ApiClient.convertToType(data['requested_in_gb'], 'Number');
            }
            if (data.hasOwnProperty('consumed_in_gb')) {
                obj['consumed_in_gb'] = ApiClient.convertToType(data['consumed_in_gb'], 'Number');
            }
            if (data.hasOwnProperty('consumed_in_percent')) {
                obj['consumed_in_percent'] = ApiClient.convertToType(data['consumed_in_percent'], 'Number');
            }
            if (data.hasOwnProperty('warning_threshold_in_percent')) {
                obj['warning_threshold_in_percent'] = ApiClient.convertToType(data['warning_threshold_in_percent'], 'Number');
            }
            if (data.hasOwnProperty('alert_threshold_in_percent')) {
                obj['alert_threshold_in_percent'] = ApiClient.convertToType(data['alert_threshold_in_percent'], 'Number');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Date} created_at
 */
StorageDiskResponse.prototype['created_at'] = undefined;

/**
 * @member {String} storage_id
 */
StorageDiskResponse.prototype['storage_id'] = undefined;

/**
 * @member {Number} requested_in_gb
 */
StorageDiskResponse.prototype['requested_in_gb'] = undefined;

/**
 * @member {Number} consumed_in_gb
 */
StorageDiskResponse.prototype['consumed_in_gb'] = undefined;

/**
 * @member {Number} consumed_in_percent
 */
StorageDiskResponse.prototype['consumed_in_percent'] = undefined;

/**
 * @member {Number} warning_threshold_in_percent
 */
StorageDiskResponse.prototype['warning_threshold_in_percent'] = undefined;

/**
 * @member {Number} alert_threshold_in_percent
 */
StorageDiskResponse.prototype['alert_threshold_in_percent'] = undefined;

/**
 * @member {module:model/StorageDiskResponse.StatusEnum} status
 */
StorageDiskResponse.prototype['status'] = undefined;





/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
StorageDiskResponse['StatusEnum'] = {

    /**
     * value: "OK"
     * @const
     */
    "OK": "OK",

    /**
     * value: "Warning"
     * @const
     */
    "Warning": "Warning",

    /**
     * value: "Alert"
     * @const
     */
    "Alert": "Alert"
};



export default StorageDiskResponse;

