/**
 * Qovery API
 * - Qovery is the fastest way to deploy your full-stack apps on any Cloud provider. - ℹ️ The API is stable and still in development. 
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
 * The MetricGenericDatapointResponse model module.
 * @module model/MetricGenericDatapointResponse
 * @version 1.0.0
 */
class MetricGenericDatapointResponse {
    /**
     * Constructs a new <code>MetricGenericDatapointResponse</code>.
     * @alias module:model/MetricGenericDatapointResponse
     * @param createdAt {Date} 
     * @param value {Number} 
     */
    constructor(createdAt, value) { 
        
        MetricGenericDatapointResponse.initialize(this, createdAt, value);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, createdAt, value) { 
        obj['created_at'] = createdAt;
        obj['value'] = value;
    }

    /**
     * Constructs a <code>MetricGenericDatapointResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MetricGenericDatapointResponse} obj Optional instance to populate.
     * @return {module:model/MetricGenericDatapointResponse} The populated <code>MetricGenericDatapointResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MetricGenericDatapointResponse();

            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Date} created_at
 */
MetricGenericDatapointResponse.prototype['created_at'] = undefined;

/**
 * @member {Number} value
 */
MetricGenericDatapointResponse.prototype['value'] = undefined;






export default MetricGenericDatapointResponse;

