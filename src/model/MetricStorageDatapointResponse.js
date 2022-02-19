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
 * The MetricStorageDatapointResponse model module.
 * @module model/MetricStorageDatapointResponse
 * @version 1.0.1
 */
class MetricStorageDatapointResponse {
    /**
     * Constructs a new <code>MetricStorageDatapointResponse</code>.
     * @alias module:model/MetricStorageDatapointResponse
     * @param createdAt {Date} 
     * @param consumedInPercent {Number} 
     */
    constructor(createdAt, consumedInPercent) { 
        
        MetricStorageDatapointResponse.initialize(this, createdAt, consumedInPercent);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, createdAt, consumedInPercent) { 
        obj['created_at'] = createdAt;
        obj['consumed_in_percent'] = consumedInPercent;
    }

    /**
     * Constructs a <code>MetricStorageDatapointResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MetricStorageDatapointResponse} obj Optional instance to populate.
     * @return {module:model/MetricStorageDatapointResponse} The populated <code>MetricStorageDatapointResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MetricStorageDatapointResponse();

            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
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
        }
        return obj;
    }


}

/**
 * @member {Date} created_at
 */
MetricStorageDatapointResponse.prototype['created_at'] = undefined;

/**
 * @member {Number} requested_in_gb
 */
MetricStorageDatapointResponse.prototype['requested_in_gb'] = undefined;

/**
 * @member {Number} consumed_in_gb
 */
MetricStorageDatapointResponse.prototype['consumed_in_gb'] = undefined;

/**
 * @member {Number} consumed_in_percent
 */
MetricStorageDatapointResponse.prototype['consumed_in_percent'] = undefined;






export default MetricStorageDatapointResponse;

